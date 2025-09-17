import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const LeaderboardPage = () => {
  const { user } = useUserStore();
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'all-time'>('weekly');

  // Mock leaderboard data
  const leaderboardData = {
    daily: [
      { id: '1', username: 'MusicMaster', avatar: '🎵', score: 450, rank: 1, change: 2 },
      { id: '2', username: 'RhythmKing', avatar: '🥁', score: 420, rank: 2, change: -1 },
      { id: '3', username: 'PitchPerfect', avatar: '🎤', score: 380, rank: 3, change: 1 },
      { id: '4', username: user?.username || 'You', avatar: '🎹', score: 350, rank: 4, change: 0 },
      { id: '5', username: 'ScaleSage', avatar: '🎼', score: 320, rank: 5, change: -2 },
    ],
    weekly: [
      { id: '1', username: 'HarmonyHero', avatar: '🎶', score: 2850, rank: 1, change: 0 },
      { id: '2', username: 'ChordChamp', avatar: '🎸', score: 2720, rank: 2, change: 1 },
      { id: '3', username: 'MelodyMaven', avatar: '🎺', score: 2650, rank: 3, change: -1 },
      { id: '4', username: user?.username || 'You', avatar: '🎹', score: 2400, rank: 4, change: 2 },
      { id: '5', username: 'BeatBoxer', avatar: '🎵', score: 2350, rank: 5, change: -1 },
      { id: '6', username: 'SongSmith', avatar: '✍️', score: 2200, rank: 6, change: 0 },
      { id: '7', username: 'TuneTamer', avatar: '🎭', score: 2100, rank: 7, change: 1 },
      { id: '8', username: 'NoteNinja', avatar: '🥷', score: 2050, rank: 8, change: -2 },
    ],
    monthly: [
      { id: '1', username: 'SymphonyStar', avatar: '⭐', score: 12500, rank: 1, change: 0 },
      { id: '2', username: 'ConcertoCrush', avatar: '🎻', score: 11800, rank: 2, change: 1 },
      { id: '3', username: user?.username || 'You', avatar: '🎹', score: 10900, rank: 3, change: 3 },
      { id: '4', username: 'OperaOracle', avatar: '🎭', score: 10500, rank: 4, change: -1 },
      { id: '5', username: 'JazzJedi', avatar: '🎷', score: 10200, rank: 5, change: -2 },
    ],
    'all-time': [
      { id: '1', username: 'LegendaryLyricist', avatar: '👑', score: 45000, rank: 1, change: 0 },
      { id: '2', username: 'MaestroMax', avatar: '🎼', score: 42000, rank: 2, change: 0 },
      { id: '3', username: 'VirtuosoVic', avatar: '🎹', score: 38500, rank: 3, change: 1 },
      { id: '4', username: 'ComposerQueen', avatar: '👸', score: 35000, rank: 4, change: -1 },
      { id: '5', username: user?.username || 'You', avatar: '🎹', score: 8900, rank: 15, change: 2 },
    ],
  };

  const currentData = leaderboardData[selectedPeriod];
  const userEntry = currentData.find(entry => entry.username === (user?.username || 'You'));

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Trophy className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">{rank}</span>;
    }
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getRowClasses = (entry: any) => {
    const isUser = entry.username === (user?.username || 'You');
    const baseClasses = "flex items-center space-x-4 p-4 rounded-lg transition-all duration-200";
    
    if (isUser) {
      return `${baseClasses} bg-primary-50 border-2 border-primary-200`;
    }
    
    if (entry.rank <= 3) {
      return `${baseClasses} bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200`;
    }
    
    return `${baseClasses} bg-white hover:bg-gray-50 border border-gray-100`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-display font-bold gradient-text">
          Leaderboard 🏆
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how you stack up against other music learners around the world!
        </p>
      </motion.div>

      {/* Period Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
          {(['daily', 'weekly', 'monthly', 'all-time'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 capitalize ${
                selectedPeriod === period
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {period.replace('-', ' ')}
            </button>
          ))}
        </div>
      </motion.div>

      {/* User's Current Position */}
      {userEntry && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">Your Position</h2>
          <div className={getRowClasses(userEntry)}>
            <div className="flex items-center space-x-3">
              {getRankIcon(userEntry.rank)}
              <div className="text-2xl">{userEntry.avatar}</div>
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{userEntry.username}</h3>
              <p className="text-sm text-gray-600">
                {userEntry.score.toLocaleString()} XP
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              {getChangeIcon(userEntry.change)}
              <span className="text-sm font-medium">
                {userEntry.change > 0 && '+'}
                {userEntry.change}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">
          {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1).replace('-', ' ')} Rankings
        </h2>
        
        <div className="space-y-2">
          {currentData.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className={getRowClasses(entry)}
            >
              <div className="flex items-center space-x-3">
                {getRankIcon(entry.rank)}
                <div className="text-2xl">{entry.avatar}</div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold">{entry.username}</h3>
                <p className="text-sm text-gray-600">
                  {entry.score.toLocaleString()} XP
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                {getChangeIcon(entry.change)}
                <span className="text-sm font-medium">
                  {entry.change > 0 && '+'}
                  {entry.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Competition Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
      >
        <div className="text-center space-y-4">
          <div className="text-4xl">🎯</div>
          <h3 className="text-lg font-semibold">Weekly Challenge</h3>
          <p className="text-gray-600">
            Complete 5 lessons this week to earn bonus XP and climb the leaderboard!
          </p>
          <div className="text-sm text-gray-500">
            Resets every Monday at midnight
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LeaderboardPage;
