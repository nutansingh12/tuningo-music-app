import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Play,
  Target,
  TrendingUp,
  Calendar,
  Music,
  Headphones
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const HomePage = () => {
  const { user, progress } = useUserStore();

  const dailyGoalProgress = progress ? (progress.weeklyXP / 7) / progress.dailyGoal : 0;

  const quickActions = [
    {
      title: 'Continue Learning',
      description: 'Pick up where you left off',
      icon: Play,
      color: 'bg-primary-500',
      link: '/skill-tree',
    },
    {
      title: 'Daily Challenge',
      description: 'Complete today\'s challenge',
      icon: Target,
      color: 'bg-secondary-500',
      link: '/skill-tree',
    },
    {
      title: 'Practice Mode',
      description: 'Free practice session',
      icon: Headphones,
      color: 'bg-green-500',
      link: '/skill-tree',
    },
    {
      title: 'Mini Games',
      description: 'Fun musical games',
      icon: Music,
      color: 'bg-orange-500',
      link: '/skill-tree',
    },
  ];

  const skillAreas = [
    { name: 'Music Theory', icon: '🎼', progress: 25, color: 'bg-blue-500' },
    { name: 'Ear Training', icon: '👂', progress: 15, color: 'bg-green-500' },
    { name: 'Rhythm', icon: '🥁', progress: 40, color: 'bg-red-500' },
    { name: 'Piano', icon: '🎹', progress: 10, color: 'bg-purple-500' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text">
          Welcome back, {user?.username}! 🎵
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to continue your musical journey? Let's make some beautiful music together!
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="card text-center">
          <div className="text-2xl font-bold text-primary-600">{user?.level}</div>
          <div className="text-sm text-gray-600">Level</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-secondary-600">{user?.xp}</div>
          <div className="text-sm text-gray-600">Total XP</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-orange-600">{user?.streak}</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-600">
            {progress?.statistics.totalLessonsCompleted || 0}
          </div>
          <div className="text-sm text-gray-600">Lessons</div>
        </div>
      </motion.div>

      {/* Daily Goal Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Calendar className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold">Daily Goal</h2>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(dailyGoalProgress * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(dailyGoalProgress * 100, 100)}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            {progress?.dailyGoal ? `${Math.round((progress.weeklyXP / 7))}/${progress.dailyGoal} XP today` : 'Set your daily goal!'}
          </p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">What would you like to do?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Link to={action.link} className="block">
                  <div className="card-hover text-center space-y-3">
                    <div className={`${action.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Skill Areas Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card"
      >
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold">Your Progress</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillAreas.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className={`${skill.color} w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`${skill.color} h-2 rounded-full`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-center"
      >
        <Link to="/skill-tree">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4 rounded-xl shadow-xl"
          >
            Start Learning 🚀
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;
