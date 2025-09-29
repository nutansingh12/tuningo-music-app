import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface NoteCatcherProps {
  onComplete: (score: number, accuracy: number) => void;
  difficulty: 'easy' | 'medium' | 'hard';
  duration?: number;
}

interface FallingNote {
  id: string;
  note: string;
  x: number;
  y: number;
  speed: number;
  caught: boolean;
  missed: boolean;
}

const NoteCatcher: React.FC<NoteCatcherProps> = ({ 
  onComplete, 
  difficulty = 'easy',
  duration = 45 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [fallingNotes, setFallingNotes] = useState<FallingNote[]>([]);
  const [basketPosition, setBasketPosition] = useState(50); // percentage
  const [targetNote, setTargetNote] = useState('C');
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const spawnRef = useRef<NodeJS.Timeout>();

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const noteColors = {
    'C': 'bg-red-400',
    'D': 'bg-orange-400', 
    'E': 'bg-yellow-400',
    'F': 'bg-green-400',
    'G': 'bg-blue-400',
    'A': 'bg-indigo-400',
    'B': 'bg-purple-400'
  };

  // Difficulty settings
  const difficultySettings = {
    easy: { spawnRate: 2000, speed: 2, basketSize: 80 },
    medium: { spawnRate: 1500, speed: 3, basketSize: 60 },
    hard: { spawnRate: 1000, speed: 4, basketSize: 40 }
  };

  const settings = difficultySettings[difficulty];

  // Generate random target note
  const generateTargetNote = () => {
    setTargetNote(notes[Math.floor(Math.random() * notes.length)]);
  };

  // Spawn falling note
  const spawnNote = () => {
    if (!gameStarted || gameEnded) return;

    const newNote: FallingNote = {
      id: `note-${Date.now()}-${Math.random()}`,
      note: notes[Math.floor(Math.random() * notes.length)],
      x: Math.random() * 80 + 10, // 10-90% to keep notes in bounds
      y: -10,
      speed: settings.speed,
      caught: false,
      missed: false
    };

    setFallingNotes(prev => [...prev, newNote]);
  };

  // Game loop
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

        // Move notes down
        setFallingNotes(prev => prev.map(note => ({
          ...note,
          y: note.y + note.speed
        })).filter(note => {
          // Remove notes that fell off screen
          if (note.y > 110 && !note.caught) {
            if (note.note === targetNote) {
              // Missed a target note
              setLives(prevLives => {
                const newLives = prevLives - 1;
                if (newLives <= 0) {
                  endGame();
                }
                return newLives;
              });
            }
            return false;
          }
          return note.y <= 110;
        }));
      }, 50);

      // Spawn notes
      spawnRef.current = setInterval(spawnNote, settings.spawnRate);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (spawnRef.current) clearInterval(spawnRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (spawnRef.current) clearInterval(spawnRef.current);
    };
  }, [isPlaying, gameStarted, gameEnded, targetNote, duration, settings.spawnRate]);

  // Handle mouse/touch movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameAreaRef.current) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setBasketPosition(Math.max(10, Math.min(90, x)));
  };

  // Check for catches
  useEffect(() => {
    setFallingNotes(prev => prev.map(note => {
      if (note.caught || note.missed) return note;

      // Check if note is in basket area
      const basketLeft = basketPosition - settings.basketSize / 2;
      const basketRight = basketPosition + settings.basketSize / 2;
      const basketTop = 85;
      const basketBottom = 95;

      if (note.x >= basketLeft && note.x <= basketRight && 
          note.y >= basketTop && note.y <= basketBottom) {
        
        if (note.note === targetNote) {
          // Caught correct note
          setScore(prevScore => prevScore + 100);
          generateTargetNote();
          return { ...note, caught: true };
        } else {
          // Caught wrong note
          setScore(prevScore => Math.max(0, prevScore - 25));
          return { ...note, missed: true };
        }
      }

      return note;
    }));
  }, [fallingNotes, basketPosition, targetNote, settings.basketSize]);

  const startGame = () => {
    setGameStarted(true);
    setIsPlaying(true);
    setCurrentTime(0);
    setScore(0);
    setLives(3);
    setFallingNotes([]);
    generateTargetNote();
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
    setLives(3);
    setFallingNotes([]);
    setBasketPosition(50);
  };

  const endGame = () => {
    setIsPlaying(false);
    setGameEnded(true);
    
    const totalNotes = fallingNotes.filter(note => note.caught || note.missed).length;
    const caughtNotes = fallingNotes.filter(note => note.caught).length;
    const accuracy = totalNotes > 0 ? (caughtNotes / totalNotes) * 100 : 0;
    
    onComplete(score, accuracy);
  };

  const progress = (currentTime / (duration * 1000)) * 100;

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">🎵 Note Catcher</h2>
        <p className="text-gray-600">Catch the falling notes! Only catch the target note!</p>
        <div className="text-sm text-gray-500">
          Difficulty: <span className="font-semibold capitalize">{difficulty}</span>
        </div>
      </div>

      {/* Game Stats */}
      <div className="flex space-x-8 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">{score}</div>
          <div className="text-sm text-gray-600">Score</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-red-600">{'❤️'.repeat(lives)}</div>
          <div className="text-sm text-gray-600">Lives</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">
            {Math.floor((duration * 1000 - currentTime) / 1000)}s
          </div>
          <div className="text-sm text-gray-600">Time Left</div>
        </div>
      </div>

      {/* Target Note */}
      <div className="text-center">
        <div className="text-lg text-gray-600 mb-2">Catch this note:</div>
        <div className={`inline-block px-6 py-3 rounded-full text-white font-bold text-2xl ${noteColors[targetNote as keyof typeof noteColors]} shadow-lg`}>
          {targetNote}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Game Area */}
      <div 
        ref={gameAreaRef}
        className="relative w-full max-w-md h-96 bg-gradient-to-b from-sky-100 to-blue-200 rounded-lg border-2 border-blue-300 overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
        style={{ touchAction: 'none' }}
      >
        {/* Falling Notes */}
        <AnimatePresence>
          {fallingNotes.map(note => (
            <motion.div
              key={note.id}
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                noteColors[note.note as keyof typeof noteColors]
              } ${note.caught ? 'ring-4 ring-green-400' : note.missed ? 'ring-4 ring-red-400' : ''}`}
              style={{
                left: `${note.x}%`,
                top: `${note.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0 }}
              animate={{ scale: note.caught || note.missed ? 1.5 : 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {note.note}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Basket */}
        <motion.div
          className="absolute bottom-2 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-full border-2 border-amber-700"
          style={{
            left: `${basketPosition}%`,
            width: `${settings.basketSize}px`,
            height: '40px',
            transform: 'translateX(-50%)'
          }}
          animate={{ left: `${basketPosition}%` }}
          transition={{ duration: 0.1 }}
        >
          <div className="absolute inset-x-2 top-1 h-1 bg-amber-300 rounded-full"></div>
        </motion.div>

        {/* Instructions */}
        {!gameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white text-center p-4">
            <div>
              <div className="text-lg font-bold mb-2">Move your mouse to control the basket!</div>
              <div className="text-sm">Catch only the target notes to score points</div>
            </div>
          </div>
        )}
      </div>

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
              <div className="text-4xl">{lives > 0 ? '🎉' : '💔'}</div>
              <h3 className="text-2xl font-bold">
                {lives > 0 ? 'Time\'s Up!' : 'Game Over!'}
              </h3>
              <div className="space-y-2">
                <div>Final Score: <span className="font-bold text-blue-600">{score}</span></div>
                <div>Notes Caught: <span className="font-bold text-green-600">
                  {fallingNotes.filter(n => n.caught).length}
                </span></div>
              </div>
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
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

export default NoteCatcher;
