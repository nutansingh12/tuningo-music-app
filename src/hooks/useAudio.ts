import { useState, useEffect, useRef, useCallback } from 'react';
import { AudioProcessor, RhythmAnalyzer, AudioSynthesizer } from '@/utils/audio';

export const useAudioProcessor = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentPitch, setCurrentPitch] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const audioProcessorRef = useRef<AudioProcessor | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const initialize = useCallback(async () => {
    try {
      if (!audioProcessorRef.current) {
        audioProcessorRef.current = new AudioProcessor();
      }
      
      const success = await audioProcessorRef.current.initialize();
      if (success) {
        setIsInitialized(true);
        setError(null);
      } else {
        setError('Failed to initialize audio');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown audio error');
    }
  }, []);

  const startListening = useCallback(() => {
    if (!audioProcessorRef.current || !isInitialized) return;
    
    audioProcessorRef.current.startListening();
    setIsListening(true);
    
    // Start analysis loop
    const analyze = () => {
      if (!audioProcessorRef.current || !isListening) return;
      
      const pitch = audioProcessorRef.current.detectPitch();
      const volume = audioProcessorRef.current.getVolume();
      
      setCurrentPitch(pitch);
      setCurrentVolume(volume);
      
      animationFrameRef.current = requestAnimationFrame(analyze);
    };
    
    analyze();
  }, [isInitialized, isListening]);

  const stopListening = useCallback(() => {
    if (audioProcessorRef.current) {
      audioProcessorRef.current.stopListening();
    }
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    setIsListening(false);
    setCurrentPitch(0);
    setCurrentVolume(0);
  }, []);

  const getCurrentNote = useCallback(() => {
    if (!audioProcessorRef.current || currentPitch === 0) {
      return null;
    }
    
    return audioProcessorRef.current.frequencyToNote(currentPitch);
  }, [currentPitch]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioProcessorRef.current) {
        audioProcessorRef.current.cleanup();
      }
    };
  }, []);

  return {
    isInitialized,
    isListening,
    currentPitch,
    currentVolume,
    error,
    initialize,
    startListening,
    stopListening,
    getCurrentNote,
  };
};

export const useRhythmAnalyzer = () => {
  const [tempo, setTempo] = useState(0);
  const [timeSinceLastBeat, setTimeSinceLastBeat] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  
  const rhythmAnalyzerRef = useRef<RhythmAnalyzer | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    rhythmAnalyzerRef.current = new RhythmAnalyzer();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startRecording = useCallback(() => {
    if (!rhythmAnalyzerRef.current) return;
    
    setIsRecording(true);
    
    // Update timer every 50ms
    intervalRef.current = setInterval(() => {
      if (rhythmAnalyzerRef.current) {
        setTempo(rhythmAnalyzerRef.current.getTempo());
        setTimeSinceLastBeat(rhythmAnalyzerRef.current.getTimeSinceLastBeat());
      }
    }, 50);
  }, []);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const recordBeat = useCallback(() => {
    if (rhythmAnalyzerRef.current && isRecording) {
      rhythmAnalyzerRef.current.recordBeat();
    }
  }, [isRecording]);

  const reset = useCallback(() => {
    if (rhythmAnalyzerRef.current) {
      rhythmAnalyzerRef.current.reset();
    }
    setTempo(0);
    setTimeSinceLastBeat(0);
  }, []);

  return {
    tempo,
    timeSinceLastBeat,
    isRecording,
    startRecording,
    stopRecording,
    recordBeat,
    reset,
  };
};

export const useAudioSynthesizer = () => {
  const synthesizerRef = useRef<AudioSynthesizer | null>(null);

  useEffect(() => {
    synthesizerRef.current = new AudioSynthesizer();
  }, []);

  const playNote = useCallback((note: string, octave: number, duration?: number) => {
    if (!synthesizerRef.current) return;
    
    const frequency = synthesizerRef.current.noteToFrequency(note, octave);
    if (frequency > 0) {
      synthesizerRef.current.playNote(frequency, duration);
    }
  }, []);

  const playFrequency = useCallback((frequency: number, duration?: number) => {
    if (synthesizerRef.current) {
      synthesizerRef.current.playNote(frequency, duration);
    }
  }, []);

  const playChord = useCallback((notes: Array<{ note: string; octave: number }>, duration?: number) => {
    if (!synthesizerRef.current) return;
    
    const frequencies = notes.map(({ note, octave }) => 
      synthesizerRef.current!.noteToFrequency(note, octave)
    ).filter(freq => freq > 0);
    
    if (frequencies.length > 0) {
      synthesizerRef.current.playChord(frequencies, duration);
    }
  }, []);

  return {
    playNote,
    playFrequency,
    playChord,
  };
};

// Hook for managing audio permissions
export const useAudioPermissions = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);

  const requestPermission = useCallback(async () => {
    setIsRequesting(true);
    
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
    } catch (error) {
      console.error('Audio permission denied:', error);
      setHasPermission(false);
    } finally {
      setIsRequesting(false);
    }
  }, []);

  const checkPermission = useCallback(async () => {
    try {
      const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
      setHasPermission(result.state === 'granted');
      
      result.addEventListener('change', () => {
        setHasPermission(result.state === 'granted');
      });
    } catch (error) {
      // Fallback: try to access microphone directly
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop());
        setHasPermission(true);
      } catch {
        setHasPermission(false);
      }
    }
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return {
    hasPermission,
    isRequesting,
    requestPermission,
    checkPermission,
  };
};
