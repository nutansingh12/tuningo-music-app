// Lesson Loader Service - Lazy loading for memory optimization
import type { Lesson } from '@/types/game';

// Cache for loaded lessons to avoid re-loading
const lessonCache = new Map<string, any>();

// Level metadata - lightweight data loaded immediately
export const levelMetadata = [
  {
    id: "intro_to_notes",
    title: "🎵 LEVEL 1: Musical Alphabet & Note Recognition", 
    description: "Learn the basics of musical notes and staff reading",
    color: "#3B82F6",
    lessonCount: 2
  },
  {
    id: "building_skills", 
    title: "🎯 LEVEL 2: Building Skills",
    description: "Develop fundamental music theory knowledge",
    color: "#10B981",
    lessonCount: 3
  },
  {
    id: "expanding",
    title: "🎨 LEVEL 3: Expanding Knowledge", 
    description: "Advanced concepts and composition",
    color: "#F59E0B",
    lessonCount: 2
  },
  {
    id: "ear_voice_training",
    title: "🎤 LEVEL 4: Ear & Voice Training",
    description: "Develop perfect pitch and vocal skills", 
    color: "#8B5CF6",
    lessonCount: 2
  }
];

// Lazy load level data only when needed
export const loadLevelLessons = async (levelId: string) => {
  // Check cache first
  if (lessonCache.has(levelId)) {
    console.log(`📦 Loading ${levelId} from cache`);
    return lessonCache.get(levelId);
  }

  console.log(`🔄 Lazy loading ${levelId} lessons...`);
  
  try {
    let levelData;
    
    switch (levelId) {
      case 'intro_to_notes':
        const level1Module = await import('../data/lessons/level1');
        levelData = level1Module.level1Lessons;
        break;
        
      case 'ear_voice_training':
        const level4Module = await import('../data/lessons/level4');
        levelData = level4Module.level4Lessons;
        break;
        
      case 'building_skills':
        // For now, return minimal data for levels 2 & 3
        levelData = {
          id: 'building_skills',
          title: '🎯 LEVEL 2: Building Skills',
          lessons: [
            {
              id: 'demo_lesson_2',
              title: 'Demo Lesson 2',
              description: 'Coming soon...',
              exercises: [
                {
                  id: 'demo-ex',
                  type: 'multiple-choice',
                  question: 'This level is coming soon!',
                  options: ['OK', 'Understood'],
                  answer: 'OK',
                  explanation: 'Level 2 content will be added in future updates.'
                }
              ]
            }
          ]
        };
        break;
        
      case 'expanding':
        levelData = {
          id: 'expanding', 
          title: '🎨 LEVEL 3: Expanding Knowledge',
          lessons: [
            {
              id: 'demo_lesson_3',
              title: 'Demo Lesson 3', 
              description: 'Coming soon...',
              exercises: [
                {
                  id: 'demo-ex',
                  type: 'multiple-choice',
                  question: 'This level is coming soon!',
                  options: ['OK', 'Understood'],
                  answer: 'OK',
                  explanation: 'Level 3 content will be added in future updates.'
                }
              ]
            }
          ]
        };
        break;
        
      default:
        throw new Error(`Unknown level: ${levelId}`);
    }
    
    // Cache the loaded data
    lessonCache.set(levelId, levelData);
    console.log(`✅ Successfully loaded and cached ${levelId}`);
    
    return levelData;
    
  } catch (error) {
    console.error(`❌ Failed to load level ${levelId}:`, error);
    throw error;
  }
};

// Load specific lesson by ID across all levels
export const loadLessonById = async (lessonId: string): Promise<Lesson | null> => {
  console.log(`🔍 Searching for lesson: ${lessonId}`);
  
  // Check if it's a specific lesson we know about
  if (lessonId === 'interval_recognition_unison') {
    const level4Data = await loadLevelLessons('ear_voice_training');
    const lesson = level4Data.lessons.find((l: any) => l.id === lessonId);
    if (lesson) {
      console.log(`✅ Found lesson: ${lesson.title}`);
      return lesson;
    }
  }
  
  // Search through all levels (but only load them as needed)
  for (const levelMeta of levelMetadata) {
    try {
      const levelData = await loadLevelLessons(levelMeta.id);
      const lesson = levelData.lessons.find((l: any) => l.id === lessonId);
      if (lesson) {
        console.log(`✅ Found lesson: ${lesson.title} in level: ${levelMeta.title}`);
        return lesson;
      }
    } catch (error) {
      console.warn(`⚠️ Could not search level ${levelMeta.id}:`, error);
      continue;
    }
  }
  
  console.log(`❌ Lesson not found: ${lessonId}`);
  return null;
};

// Clear cache if needed (for memory management)
export const clearLessonCache = () => {
  lessonCache.clear();
  console.log('🗑️ Lesson cache cleared');
};

// Get cache status for debugging
export const getCacheStatus = () => {
  return {
    cachedLevels: Array.from(lessonCache.keys()),
    cacheSize: lessonCache.size
  };
};
