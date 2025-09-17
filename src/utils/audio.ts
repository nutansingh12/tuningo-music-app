// Audio utility functions for pitch detection and rhythm analysis

export interface AudioContextState {
  context: AudioContext | null;
  analyser: AnalyserNode | null;
  microphone: MediaStreamAudioSourceNode | null;
  dataArray: Uint8Array | null;
}

export class AudioProcessor {
  private audioContext: globalThis.AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private microphone: MediaStreamAudioSourceNode | null = null;
  private dataArray: Uint8Array | null = null;
  private isListening = false;

  async initialize(): Promise<boolean> {
    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Create audio context
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)() as globalThis.AudioContext;
      
      // Create analyser node
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 2048;
      
      // Create microphone source
      this.microphone = this.audioContext.createMediaStreamSource(stream);
      this.microphone.connect(this.analyser);
      
      // Create data array for frequency analysis
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(new ArrayBuffer(bufferLength));
      
      return true;
    } catch (error) {
      console.error('Failed to initialize audio:', error);
      return false;
    }
  }

  startListening(): void {
    this.isListening = true;
  }

  stopListening(): void {
    this.isListening = false;
  }

  getFrequencyData(): Uint8Array | null {
    if (!this.analyser || !this.dataArray || !this.isListening) {
      return null;
    }

    this.analyser.getByteFrequencyData(this.dataArray!);
    return this.dataArray;
  }

  // Convert frequency to musical note
  frequencyToNote(frequency: number): { note: string; octave: number; cents: number } {
    const A4 = 440;
    const C0 = A4 * Math.pow(2, -4.75);
    
    if (frequency <= 0) {
      return { note: '', octave: 0, cents: 0 };
    }

    const h = Math.round(12 * Math.log2(frequency / C0));
    const octave = Math.floor(h / 12);
    const n = h % 12;
    const cents = Math.floor(1200 * Math.log2(frequency / (C0 * Math.pow(2, h / 12))));

    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const note = noteNames[n];

    return { note, octave, cents };
  }

  // Detect fundamental frequency using autocorrelation
  detectPitch(): number {
    if (!this.analyser || !this.dataArray || !this.isListening) {
      return 0;
    }

    this.analyser.getByteTimeDomainData(this.dataArray!);
    
    // Simple peak detection (in a real app, you'd use more sophisticated algorithms)
    let maxAmplitude = 0;
    let maxIndex = 0;
    
    for (let i = 0; i < this.dataArray.length; i++) {
      const amplitude = Math.abs(this.dataArray[i] - 128);
      if (amplitude > maxAmplitude) {
        maxAmplitude = amplitude;
        maxIndex = i;
      }
    }

    // Convert to frequency (simplified)
    const sampleRate = this.audioContext?.sampleRate || 44100;
    const frequency = (maxIndex * sampleRate) / (this.dataArray.length * 2);
    
    return frequency;
  }

  // Calculate volume level
  getVolume(): number {
    if (!this.analyser || !this.dataArray || !this.isListening) {
      return 0;
    }

    this.analyser.getByteFrequencyData(this.dataArray!);
    
    let sum = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      sum += this.dataArray[i];
    }
    
    return sum / this.dataArray.length / 255; // Normalize to 0-1
  }

  // Clean up resources
  cleanup(): void {
    this.isListening = false;
    
    if (this.microphone) {
      this.microphone.disconnect();
    }
    
    if (this.audioContext) {
      this.audioContext.close();
    }
  }
}

// Utility functions for rhythm analysis
export class RhythmAnalyzer {
  private beats: number[] = [];
  private lastBeatTime = 0;
  private tempo = 0;

  recordBeat(): void {
    const now = Date.now();
    this.beats.push(now);
    
    // Keep only recent beats (last 8 beats)
    if (this.beats.length > 8) {
      this.beats.shift();
    }
    
    this.calculateTempo();
    this.lastBeatTime = now;
  }

  private calculateTempo(): void {
    if (this.beats.length < 2) {
      return;
    }

    const intervals: number[] = [];
    for (let i = 1; i < this.beats.length; i++) {
      intervals.push(this.beats[i] - this.beats[i - 1]);
    }

    // Calculate average interval
    const avgInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
    
    // Convert to BPM
    this.tempo = Math.round(60000 / avgInterval);
  }

  getTempo(): number {
    return this.tempo;
  }

  getTimeSinceLastBeat(): number {
    return Date.now() - this.lastBeatTime;
  }

  reset(): void {
    this.beats = [];
    this.lastBeatTime = 0;
    this.tempo = 0;
  }
}

// Audio synthesis for playing reference notes
export class AudioSynthesizer {
  private audioContext: globalThis.AudioContext | null = null;

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)() as globalThis.AudioContext;
  }

  playNote(frequency: number, duration: number = 1000): void {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = 'sine';

    // Envelope for smooth attack and release
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration / 1000);
  }

  playChord(frequencies: number[], duration: number = 1000): void {
    frequencies.forEach(freq => this.playNote(freq, duration));
  }

  // Convert note name to frequency
  noteToFrequency(note: string, octave: number): number {
    const noteFrequencies: { [key: string]: number } = {
      'C': 261.63,
      'C#': 277.18,
      'D': 293.66,
      'D#': 311.13,
      'E': 329.63,
      'F': 349.23,
      'F#': 369.99,
      'G': 392.00,
      'G#': 415.30,
      'A': 440.00,
      'A#': 466.16,
      'B': 493.88,
    };

    const baseFreq = noteFrequencies[note.toUpperCase()];
    if (!baseFreq) return 0;

    // Adjust for octave (A4 = 440Hz is octave 4)
    return baseFreq * Math.pow(2, octave - 4);
  }
}
