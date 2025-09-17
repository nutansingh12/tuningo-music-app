import { motion } from 'framer-motion';
import {
  User,
  Star,
  Flame,
  Trophy,
  Clock,
  Target,
  TrendingUp,
  Calendar,
  Award
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const ProfilePage = () => {
  const { user, progress } = useUserStore();

  if (!user || !progress) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600">Loading profile...</h2>
      </div>
    );
  }

  const stats = [
    {
      label: 'Current Level',
      value: user.level,
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      label: 'Total XP',
      value: user.xp.toLocaleString(),
      icon: TrendingUp,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      label: 'Current Streak',
      value: `${user.streak} days`,
      icon: Flame,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      label: 'Lessons Completed',
      value: progress.statistics.totalLessonsCompleted,
      icon: Trophy,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Time Learning',
      value: `${Math.round(progress.statistics.timeSpentLearning)} min`,
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Average Accuracy',
      value: `${Math.round(progress.statistics.averageAccuracy)}%`,
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  const recentAchievements = progress.achievements.slice(-3);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto">
          <User className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-display font-bold gradient-text">
          {user.username}
        </h1>
        <p className="text-gray-600">
          Member since {user.createdAt.toLocaleDateString()}
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className={`card text-center space-y-3 ${stat.bgColor}`}
            >
              <Icon className={`w-8 h-8 ${stat.color} mx-auto`} />
              <div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card space-y-6"
      >
        <h2 className="text-xl font-semibold flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-primary-500" />
          <span>Learning Progress</span>
        </h2>

        <div className="space-y-4">
          {/* Level Progress */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Level {user.level} Progress</span>
              <span className="text-sm text-gray-600">
                {user.xp % 100}/100 XP
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(user.xp % 100)}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
              />
            </div>
          </div>

          {/* Daily Goal */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Daily Goal</span>
              <span className="text-sm text-gray-600">
                {Math.round(progress.weeklyXP / 7)}/{progress.dailyGoal} XP
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((progress.weeklyXP / 7) / progress.dailyGoal * 100, 100)}%` }}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recent Achievements */}
      {recentAchievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card space-y-6"
        >
          <h2 className="text-xl font-semibold flex items-center space-x-2">
            <Award className="w-6 h-6 text-yellow-500" />
            <span>Recent Achievements</span>
          </h2>

          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-yellow-800">{achievement.name}</h3>
                  <p className="text-sm text-yellow-700">{achievement.description}</p>
                </div>
                <div className="text-xs text-yellow-600">
                  {achievement.unlockedAt?.toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card space-y-6"
      >
        <h2 className="text-xl font-semibold flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-primary-500" />
          <span>Settings</span>
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Daily Goal</h3>
              <p className="text-sm text-gray-600">Set your daily XP target</p>
            </div>
            <select 
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={progress.dailyGoal}
              onChange={(e) => {
                // In a real app, this would update the user's settings
                console.log('Daily goal changed to:', e.target.value);
              }}
            >
              <option value={25}>25 XP</option>
              <option value={50}>50 XP</option>
              <option value={100}>100 XP</option>
              <option value={150}>150 XP</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-gray-600">Daily practice reminders</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
