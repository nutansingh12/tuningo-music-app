import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  TreePine,
  User,
  Trophy,
  Award,
  Heart,
  Flame,
  Star,
  Gamepad2
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const Navbar = () => {
  const location = useLocation();
  const { user } = useUserStore();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/skill-tree', icon: TreePine, label: 'Learn' },
    { path: '/mini-games', icon: Gamepad2, label: 'Games' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/achievements', icon: Award, label: 'Achievements' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-display font-bold text-xl gradient-text">
              Tuningo
            </span>
          </Link>

          {/* User Stats */}
          {user && (
            <div className="hidden md:flex items-center space-x-4">
              {/* Level */}
              <div className="flex items-center space-x-1 bg-primary-50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium text-primary-700">
                  Level {user.level}
                </span>
              </div>

              {/* XP */}
              <div className="flex items-center space-x-1 bg-secondary-50 px-3 py-1 rounded-full">
                <div className="w-4 h-4 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full" />
                <span className="text-sm font-medium text-secondary-700">
                  {user.xp} XP
                </span>
              </div>

              {/* Streak */}
              <div className="flex items-center space-x-1 bg-orange-50 px-3 py-1 rounded-full">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-orange-700">
                  {user.streak}
                </span>
              </div>

              {/* Hearts */}
              <div className="flex items-center space-x-1 bg-red-50 px-3 py-1 rounded-full">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span className="text-sm font-medium text-red-700">
                  {user.hearts}/{user.maxHearts}
                </span>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center space-y-1">
                    <Icon 
                      className={`w-5 h-5 ${
                        isActive 
                          ? 'text-primary-600' 
                          : 'text-gray-600 hover:text-primary-600'
                      }`} 
                    />
                    <span 
                      className={`text-xs font-medium ${
                        isActive 
                          ? 'text-primary-600' 
                          : 'text-gray-600 hover:text-primary-600'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary-100 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile User Stats */}
        {user && (
          <div className="md:hidden flex items-center justify-center space-x-4 pb-3">
            <div className="flex items-center space-x-1 bg-primary-50 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 text-primary-500" />
              <span className="text-xs font-medium text-primary-700">
                Lv.{user.level}
              </span>
            </div>

            <div className="flex items-center space-x-1 bg-secondary-50 px-2 py-1 rounded-full">
              <div className="w-3 h-3 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full" />
              <span className="text-xs font-medium text-secondary-700">
                {user.xp}
              </span>
            </div>

            <div className="flex items-center space-x-1 bg-orange-50 px-2 py-1 rounded-full">
              <Flame className="w-3 h-3 text-orange-500" />
              <span className="text-xs font-medium text-orange-700">
                {user.streak}
              </span>
            </div>

            <div className="flex items-center space-x-1 bg-red-50 px-2 py-1 rounded-full">
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span className="text-xs font-medium text-red-700">
                {user.hearts}
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
