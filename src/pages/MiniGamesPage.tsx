import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trophy, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';
import RhythmTapper from '@/components/mini-games/RhythmTapper';
import NoteCatcher from '@/components/mini-games/NoteCatcher';

interface MiniGame {
  id: string;
  name: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number; // in minutes
  xpReward: number;
  component: React.ComponentType<any>;
}

const MiniGamesPage = () => {
  const navigate = useNavigate();
  const { addXP, user } = useUserStore();
  const [selectedGame, setSelectedGame] = useState<MiniGame | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  const miniGames: MiniGame[] = [
    {
      id: 'rhythm-tapper',
      name: 'Rhythm Tapper',
      description: 'Test your rhythm skills! Tap to the beat and build up your combo multiplier.',
      icon: '🥁',
      difficulty: 'easy',
      estimatedTime: 1,
      xpReward: 15,
      component: RhythmTapper
    },
    {
      id: 'note-catcher',
      name: 'Note Catcher',
      description: 'Catch falling musical notes! Only catch the target note to score points.',
      icon: '🎵',
      difficulty: 'easy',
      estimatedTime: 2,
      xpReward: 20,
      component: NoteCatcher
    },
    {
      id: 'chord-builder',
      name: 'Chord Builder',
      description: 'Build chords by selecting the correct notes. Learn chord progressions!',
      icon: '🎹',
      difficulty: 'medium',
      estimatedTime: 3,
      xpReward: 25,
      component: () => <div className="text-center p-8">Coming Soon! 🚧</div>
    },
    {
      id: 'scale-runner',
      name: 'Scale Runner',
      description: 'Navigate through musical scales like a platformer game!',
      icon: '🏃‍♂️',
      difficulty: 'medium',
      estimatedTime: 4,
      xpReward: 30,
      component: () => <div className="text-center p-8">Coming Soon! 🚧</div>
    },
    {
      id: 'pitch-match',
      name: 'Pitch Match',
      description: 'Match your voice to the target pitch using your microphone!',
      icon: '🎤',
      difficulty: 'hard',
      estimatedTime: 3,
      xpReward: 35,
      component: () => <div className="text-center p-8">Coming Soon! 🚧</div>
    }
  ];

  const handleGameComplete = (score: number, accuracy: number) => {
    if (!selectedGame) return;

    // Calculate XP based on performance
    const baseXP = selectedGame.xpReward;
    const difficultyMultiplier = selectedDifficulty === 'easy' ? 1 : selectedDifficulty === 'medium' ? 1.5 : 2;
    const accuracyBonus = Math.floor(accuracy / 10) * 5; // 5 XP per 10% accuracy
    const finalXP = Math.floor(baseXP * difficultyMultiplier + accuracyBonus);

    addXP(finalXP);

    // Show completion message
    alert(`🎉 Game Complete!\nScore: ${score}\nAccuracy: ${Math.round(accuracy)}%\nXP Earned: ${finalXP}`);
  };

  const getDifficultyColor = (difficulty: 'easy' | 'medium' | 'hard') => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
    }
  };

  const getDifficultyXP = (baseXP: number, difficulty: 'easy' | 'medium' | 'hard') => {
    const multiplier = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 1.5 : 2;
    return Math.floor(baseXP * multiplier);
  };

  if (selectedGame) {
    const GameComponent = selectedGame.component;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setSelectedGame(null)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Games</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">{selectedGame.name}</h1>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mt-1">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(selectedDifficulty)}`}>
                  {selectedDifficulty.toUpperCase()}
                </span>
                <span>+{getDifficultyXP(selectedGame.xpReward, selectedDifficulty)} XP</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-600">Your XP</div>
              <div className="text-xl font-bold text-purple-600">{user?.xp || 0}</div>
            </div>
          </div>

          {/* Difficulty Selector */}
          <div className="flex justify-center space-x-4 mb-6">
            {(['easy', 'medium', 'hard'] as const).map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedDifficulty === difficulty
                    ? getDifficultyColor(difficulty)
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                <div className="text-xs">+{getDifficultyXP(selectedGame.xpReward, difficulty)} XP</div>
              </button>
            ))}
          </div>

          {/* Game Component */}
          <GameComponent
            onComplete={handleGameComplete}
            difficulty={selectedDifficulty}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-display font-bold gradient-text">
            🎮 Mini Games
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have fun while learning! Play musical mini-games to earn XP and improve your skills.
          </p>
          
          {/* User Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">{user?.xp || 0}</div>
              <div className="text-sm text-gray-600">Total XP</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">{user?.level || 1}</div>
              <div className="text-sm text-gray-600">Level</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{user?.streak || 0}</div>
              <div className="text-sm text-gray-600">Streak</div>
            </div>
          </div>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {miniGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedGame(game)}
            >
              {/* Game Icon */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {game.icon}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty.toUpperCase()}
                </div>
              </div>

              {/* Game Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {game.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {game.description}
                </p>

                {/* Game Stats */}
                <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{game.estimatedTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>+{game.xpReward} XP</span>
                  </div>
                </div>

                {/* Play Button */}
                <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors font-semibold">
                  Play Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl">🚀</div>
            <h3 className="text-xl font-bold text-gray-800">More Games Coming Soon!</h3>
            <p className="text-gray-600">
              We're working on more exciting mini-games including Chord Builder, Scale Runner, and Pitch Match!
            </p>
            <div className="text-sm text-gray-500">
              Follow our progress and suggest new game ideas!
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MiniGamesPage;
