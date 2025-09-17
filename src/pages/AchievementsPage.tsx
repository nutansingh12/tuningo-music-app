import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Star } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { sampleAchievements } from '@/data/sampleData';
import { Achievement, AchievementCategory } from '@/types';

const AchievementsPage = () => {
  const { progress } = useUserStore();
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>('all');

  // Combine sample achievements with user's unlocked achievements
  const allAchievements = sampleAchievements;
  const unlockedAchievementIds = progress?.achievements.map(a => a.id) || [];

  const categories: { value: AchievementCategory | 'all'; label: string; icon: string }[] = [
    { value: 'all', label: 'All', icon: '🏆' },
    { value: 'streak', label: 'Streaks', icon: '🔥' },
    { value: 'xp', label: 'Experience', icon: '⭐' },
    { value: 'accuracy', label: 'Accuracy', icon: '🎯' },
    { value: 'skill-mastery', label: 'Skills', icon: '🎵' },
    { value: 'social', label: 'Social', icon: '👥' },
    { value: 'special', label: 'Special', icon: '✨' },
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? allAchievements 
    : allAchievements.filter(achievement => achievement.category === selectedCategory);

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'border-gray-300 bg-gray-50';
      case 'rare':
        return 'border-blue-300 bg-blue-50';
      case 'epic':
        return 'border-purple-300 bg-purple-50';
      case 'legendary':
        return 'border-yellow-300 bg-yellow-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityBadge = (rarity: Achievement['rarity']) => {
    const colors = {
      common: 'bg-gray-500',
      rare: 'bg-blue-500',
      epic: 'bg-purple-500',
      legendary: 'bg-yellow-500',
    };

    return (
      <span className={`${colors[rarity]} text-white text-xs px-2 py-1 rounded-full font-medium capitalize`}>
        {rarity}
      </span>
    );
  };

  const isUnlocked = (achievementId: string) => {
    return unlockedAchievementIds.includes(achievementId);
  };

  const getUnlockedDate = (achievementId: string) => {
    const userAchievement = progress?.achievements.find(a => a.id === achievementId);
    return userAchievement?.unlockedAt;
  };

  const unlockedCount = filteredAchievements.filter(a => isUnlocked(a.id)).length;
  const totalCount = filteredAchievements.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-display font-bold gradient-text">
          Achievements 🏆
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Track your musical milestones and unlock special rewards as you progress!
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card text-center space-y-4"
      >
        <div className="text-3xl font-bold gradient-text">
          {unlockedCount} / {totalCount}
        </div>
        <div className="text-gray-600">Achievements Unlocked</div>
        <div className="w-full bg-gray-200 rounded-full h-3 max-w-md mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
          />
        </div>
        <div className="text-sm text-gray-500">
          {Math.round((unlockedCount / totalCount) * 100)}% Complete
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category.value
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredAchievements.map((achievement, index) => {
          const unlocked = isUnlocked(achievement.id);
          const unlockedDate = getUnlockedDate(achievement.id);

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className={`card relative overflow-hidden ${getRarityColor(achievement.rarity)} ${
                unlocked ? 'border-2' : 'opacity-60'
              }`}
            >
              {/* Rarity Badge */}
              <div className="absolute top-3 right-3">
                {getRarityBadge(achievement.rarity)}
              </div>

              {/* Achievement Icon */}
              <div className="text-center mb-4">
                <div className={`text-6xl mb-2 ${unlocked ? '' : 'grayscale'}`}>
                  {unlocked ? achievement.icon : '🔒'}
                </div>
                {unlocked && (
                  <div className="flex justify-center">
                    <div className="bg-green-500 rounded-full p-1">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                )}
              </div>

              {/* Achievement Info */}
              <div className="text-center space-y-2">
                <h3 className={`font-bold text-lg ${unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
                  {unlocked ? achievement.name : '???'}
                </h3>
                <p className={`text-sm ${unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                  {unlocked ? achievement.description : 'Complete the requirement to unlock'}
                </p>

                {/* Requirement */}
                <div className="text-xs text-gray-500 bg-white bg-opacity-50 rounded-lg p-2">
                  {achievement.requirement.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}: {achievement.requirement.value}
                  {achievement.requirement.timeframe && ` (${achievement.requirement.timeframe})`}
                </div>

                {/* Rewards */}
                {achievement.reward && (
                  <div className="flex justify-center space-x-2 text-xs">
                    {achievement.reward.xp && (
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        +{achievement.reward.xp} XP
                      </span>
                    )}
                    {achievement.reward.gems && (
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        +{achievement.reward.gems} 💎
                      </span>
                    )}
                    {achievement.reward.hearts && (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                        +{achievement.reward.hearts} ❤️
                      </span>
                    )}
                  </div>
                )}

                {/* Unlock Date */}
                {unlocked && unlockedDate && (
                  <div className="text-xs text-gray-500 mt-2">
                    Unlocked {unlockedDate.toLocaleDateString()}
                  </div>
                )}
              </div>

              {/* Locked Overlay */}
              {!unlocked && (
                <div className="absolute inset-0 bg-gray-200 bg-opacity-20 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No achievements in this category yet
          </h3>
          <p className="text-gray-500">
            Keep learning and new achievements will be added!
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default AchievementsPage;
