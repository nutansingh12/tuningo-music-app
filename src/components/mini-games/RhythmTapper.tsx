import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface RhythmTapperProps {
  onComplete: (score: number, accuracy: number) => void;
  difficulty: 'easy' | 'medium' | 'hard';
  duration?: number; // in seconds
}

interface Beat {
  id: string;
  timestamp: number;
  hit: boolean;
  accuracy?: 'perfect' | 'good' | 'miss';
}

const RhythmTapper: React.FC<RhythmTapperProps> = ({ 
  onComplete, 
  difficulty = 'easy',
  duration = 30 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [beats, setBeats] = useState<Beat[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const audioContextRef = useRef<AudioContext>();

  // Difficulty settings
  const difficultySettings = {
    easy: { bpm: 120, tolerance: 200 },
    medium: { bpm: 140, tolerance: 150 },
    hard: { bpm: 160, tolerance: 100 }
  };

  const settings = difficultySettings[difficulty];
  const beatInterval = (60 / settings.bpm) * 1000; // ms between beats

  // Generate beats for the game
  useEffect(() => {
    const generateBeats = () => {
      const newBeats: Beat[] = [];
      const totalBeats = Math.floor((duration * 1000) / beatInterval);
      
      for (let i = 0; i < totalBeats; i++) {
        newBeats.push({
          id: `beat-${i}`,
          timestamp: i * beatInterval,
          hit: false
        });
      }
      setBeats(newBeats);
    };

    generateBeats();
  }, [difficulty, duration, beatInterval]);

  // Game timer
  useEffect(() => {
    if (isPlaying && gameStarted && !gameEnded) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 50;
          if (newTime >= duration * 1000) {
            endGame();
            return duration * 1000;
          }
          return newTime;
        });
      }, 50);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, gameStarted, gameEnded, duration]);

  // Play metronome sound
  const playMetronomeSound = (frequency: number = 800) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }

    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1);

    oscillator.start(audioContextRef.current.currentTime);
    oscillator.stop(audioContextRef.current.currentTime + 0.1);
  };

  // Handle tap
  const handleTap = () => {
    if (!gameStarted || gameEnded) return;

    const currentBeat = beats.find(beat => 
      Math.abs(beat.timestamp - currentTime) <= settings.tolerance && !beat.hit
    );

    if (currentBeat) {
      const timeDiff = Math.abs(currentBeat.timestamp - currentTime);
      let accuracy: 'perfect' | 'good' | 'miss';
      let points = 0;

      if (timeDiff <= 50) {
        accuracy = 'perfect';
        points = 100;
        setCombo(prev => prev + 1);
      } else if (timeDiff <= 100) {
        accuracy = 'good';
        points = 50;
        setCombo(prev => prev + 1);
      } else {
        accuracy = 'miss';
        points = 0;
        setCombo(0);
      }

      // Combo multiplier
      const multiplier = Math.min(Math.floor(combo / 5) + 1, 4);
      const finalPoints = points * multiplier;

      setScore(prev => prev + finalPoints);
      setBeats(prev => prev.map(beat => 
        beat.id === currentBeat.id ? { ...beat, hit: true, accuracy } : beat
      ));

      playMetronomeSound(accuracy === 'perfect' ? 1000 : accuracy === 'good' ? 800 : 400);
    } else {
      // Missed tap
      setCombo(0);
      playMetronomeSound(300);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setIsPlaying(true);
    setCurrentTime(0);
    setScore(0);
    setCombo(0);
  };

  const pauseGame = () => {
    setIsPlaying(!isPlaying);
  };

  const resetGame = () => {
    setIsPlaying(false);
    setGameStarted(false);
    setGameEnded(false);
    setCurrentTime(0);
    setScore(0);
    setCombo(0);
    setBeats(prev => prev.map(beat => ({ ...beat, hit: false, accuracy: undefined })));
  };

  const endGame = () => {
    setIsPlaying(false);
    setGameEnded(true);
    
    const hitBeats = beats.filter(beat => beat.hit).length;
    const accuracy = (hitBeats / beats.length) * 100;
    
    onComplete(score, accuracy);
  };

  // Get current beat indicator
  const getCurrentBeatIndex = () => {
    return beats.findIndex(beat => 
      beat.timestamp >= currentTime && beat.timestamp <= currentTime + beatInterval
    );
  };

  const progress = (currentTime / (duration * 1000)) * 100;
  const currentBeatIndex = getCurrentBeatIndex();

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">🥁 Rhythm Tapper</h2>
        <p className="text-gray-600">Tap to the beat! Stay in rhythm to build your combo!</p>
        <div className="text-sm text-gray-500">
          Difficulty: <span className="font-semibold capitalize">{difficulty}</span> | 
          BPM: {settings.bpm}
        </div>
      </div>

      {/* Game Stats */}
      <div className="flex space-x-8 text-center">
        <div>
          <div className="text-2xl font-bold text-purple-600">{score}</div>
          <div className="text-sm text-gray-600">Score</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-pink-600">{combo}</div>
          <div className="text-sm text-gray-600">Combo</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">
            {Math.floor((duration * 1000 - currentTime) / 1000)}s
          </div>
          <div className="text-sm text-gray-600">Time Left</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Beat Visualizer */}
      <div className="flex items-center space-x-2 h-16">
        {beats.slice(Math.max(0, currentBeatIndex - 2), currentBeatIndex + 3).map((beat, index) => {
          const isActive = Math.abs(beat.timestamp - currentTime) <= settings.tolerance;
          const isPast = beat.timestamp < currentTime;
          
          return (
            <motion.div
              key={beat.id}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                isActive ? 'border-yellow-400 bg-yellow-100 scale-125' :
                isPast ? (beat.hit ? 'border-green-400 bg-green-100' : 'border-red-400 bg-red-100') :
                'border-gray-300 bg-gray-100'
              }`}
              animate={{ scale: isActive ? 1.25 : 1 }}
              transition={{ duration: 0.1 }}
            >
              {beat.hit && (
                <span className="text-lg">
                  {beat.accuracy === 'perfect' ? '🎯' : beat.accuracy === 'good' ? '✅' : '❌'}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Tap Button */}
      <motion.button
        onClick={handleTap}
        disabled={!gameStarted || gameEnded}
        className={`w-32 h-32 rounded-full text-white font-bold text-xl shadow-lg ${
          gameStarted && !gameEnded 
            ? 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:scale-95' 
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
      >
        TAP!
      </motion.button>

      {/* Controls */}
      <div className="flex space-x-4">
        {!gameStarted ? (
          <button
            onClick={startGame}
            className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Play className="w-5 h-5" />
            <span>Start Game</span>
          </button>
        ) : (
          <>
            <button
              onClick={pauseGame}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Resume'}</span>
            </button>
            <button
              onClick={resetGame}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </>
        )}
      </div>

      {/* Game Over Modal */}
      <AnimatePresence>
        {gameEnded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-xl p-8 text-center space-y-4 max-w-sm mx-4">
              <div className="text-4xl">🎉</div>
              <h3 className="text-2xl font-bold">Game Complete!</h3>
              <div className="space-y-2">
                <div>Final Score: <span className="font-bold text-purple-600">{score}</span></div>
                <div>Accuracy: <span className="font-bold text-pink-600">
                  {Math.round((beats.filter(b => b.hit).length / beats.length) * 100)}%
                </span></div>
                <div>Max Combo: <span className="font-bold text-blue-600">{combo}</span></div>
              </div>
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Play Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RhythmTapper;
