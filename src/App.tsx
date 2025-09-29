import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Pages
import HomePage from '@/pages/HomePage';
import SkillTreePage from '@/pages/SkillTreePage';
import LessonPage from '@/pages/LessonPage';
import ProfilePage from '@/pages/ProfilePage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import AchievementsPage from '@/pages/AchievementsPage';
import MiniGamesPage from '@/pages/MiniGamesPage';

// Components
import Navbar from '@/components/layout/Navbar';
import FeedbackToast from '@/components/ui/FeedbackToast';

// Hooks
import { useGameStore } from '@/store/gameStore';
import { useEffect } from 'react';

// Sample data
import { sampleSkillTrees } from '@/data/sampleData';

function App() {
  const location = useLocation();
  const { setSkillTrees } = useGameStore();

  useEffect(() => {
    // Initialize with sample data
    console.log('App.tsx: Loading skill trees:', sampleSkillTrees);
    console.log('App.tsx: First skill tree:', sampleSkillTrees[0]);
    console.log('App.tsx: First lesson in first tree:', sampleSkillTrees[0]?.nodes[0]);
    setSkillTrees(sampleSkillTrees);
  }, [setSkillTrees]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skill-tree" element={<SkillTreePage />} />
              <Route path="/lesson/:lessonId" element={<LessonPage />} />
              <Route path="/mini-games" element={<MiniGamesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <FeedbackToast />
    </div>
  );
}

export default App;
