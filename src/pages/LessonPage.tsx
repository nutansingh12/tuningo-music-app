import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Star,
  Volume2,
  Mic,
  MicOff
} from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { useUserStore } from '@/store/userStore';
import { sampleSkillTrees } from '@/data/sampleData';
import StaffNotation from '@/components/StaffNotation';

// Helper function to extract note information from question text
const extractNoteFromQuestion = (question: string): { note: string; clef: 'treble' | 'bass' } | null => {
  const lowerQuestion = question.toLowerCase();

  // Look for patterns like "A on staff", "B on staff", etc.
  const noteOnStaffMatch = lowerQuestion.match(/([a-g])\s+on\s+staff/);
  if (noteOnStaffMatch) {
    return {
      note: noteOnStaffMatch[1].toUpperCase(),
      clef: 'treble' // Default to treble clef
    };
  }

  // Look for patterns like "treble clef" or "bass clef"
  const clefMatch = lowerQuestion.match(/(treble|bass)\s+clef/);
  const clef = clefMatch ? (clefMatch[1] as 'treble' | 'bass') : 'treble';

  // Look for specific note mentions in context of staff
  const noteMatch = lowerQuestion.match(/note\s+([a-g])/);
  if (noteMatch) {
    return {
      note: noteMatch[1].toUpperCase(),
      clef
    };
  }

  return null;
};

const LessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const {
    currentLesson,
    currentExercise,
    exerciseIndex,
    exerciseResults,
    setCurrentLesson,
    nextExercise,
    previousExercise,
    submitAnswer,
    submitAnswerWithResult,
    resetLesson,
    showFeedbackMessage
  } = useGameStore();
  const { user, useHeart, addXP, completeLesson } = useUserStore();

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isListening, setIsListening] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Function to find lesson by ID from our comprehensive database
  const findLessonById = (id: string) => {
    for (const skillTree of sampleSkillTrees) {
      for (const node of skillTree.nodes) {
        for (const lesson of node.lessons) {
          if (lesson.id === id) {
            return lesson;
          }
        }
      }
    }
    return null;
  };

  // Demo lesson data (fallback)
  const demoLesson = {
    id: 'demo',
    title: 'Musical Notes Basics',
    description: 'Learn the fundamental musical notes',
    type: 'theory' as const,
    difficulty: 'beginner' as const,
    estimatedDuration: 5,
    xpReward: 50,
    prerequisites: [],
    exercises: [
      {
        id: 'note-names-1',
        type: 'multiple-choice' as const,
        question: 'How many musical notes are there in the basic scale?',
        options: [
          { id: 'a', text: '5 notes', isCorrect: false },
          { id: 'b', text: '7 notes', isCorrect: true },
          { id: 'c', text: '8 notes', isCorrect: false },
          { id: 'd', text: '12 notes', isCorrect: false },
        ],
        correctAnswer: 'b',
        explanation: 'There are 7 basic musical notes: A, B, C, D, E, F, and G.',
        difficulty: 'beginner' as const,
      },
      {
        id: 'note-names-2',
        type: 'multiple-choice' as const,
        question: 'Which note comes after G?',
        options: [
          { id: 'a', text: 'H', isCorrect: false },
          { id: 'b', text: 'A', isCorrect: true },
          { id: 'c', text: 'B', isCorrect: false },
          { id: 'd', text: 'C', isCorrect: false },
        ],
        correctAnswer: 'b',
        explanation: 'After G, the notes repeat starting with A again.',
        difficulty: 'beginner' as const,
      },
      {
        id: 'pitch-match-demo',
        type: 'pitch-match' as const,
        question: 'Listen to this note and try to match the pitch with your voice',
        correctAnswer: 'C4',
        explanation: 'This was a C4 note (middle C). Try humming or singing the same pitch.',
        difficulty: 'beginner' as const,
        timeLimit: 30,
      },
    ],
  };

  useEffect(() => {
    console.log('LessonPage useEffect - lessonId:', lessonId);
    console.log('Available skill trees:', sampleSkillTrees.length);

    if (!lessonId) {
      console.log('No lessonId provided, using demo lesson');
      setCurrentLesson(demoLesson);
      return;
    }

    // Debug: Log all available lesson IDs
    const allLessonIds: string[] = [];
    sampleSkillTrees.forEach(tree => {
      tree.nodes.forEach(node => {
        node.lessons.forEach(lesson => {
          allLessonIds.push(lesson.id);
        });
      });
    });
    console.log('All available lesson IDs:', allLessonIds);

    // Try to find the lesson in our comprehensive database
    const foundLesson = findLessonById(lessonId);
    if (foundLesson) {
      console.log('✅ Found lesson:', foundLesson.title, 'with', foundLesson.exercises.length, 'exercises');
      setCurrentLesson(foundLesson);
    } else if (lessonId === 'demo') {
      console.log('Using demo lesson');
      setCurrentLesson(demoLesson);
    } else {
      console.warn('❌ Lesson not found:', lessonId, 'falling back to demo');
      console.log('Searched for lesson ID:', lessonId);
      setCurrentLesson(demoLesson);
    }

    return () => {
      resetLesson();
    };
  }, [lessonId, setCurrentLesson, resetLesson]);

  const handleAnswerSelect = (answerId: string) => {
    console.log('🔍 Answer selected:', answerId);
    setSelectedAnswer(answerId);
  };

  const handleSubmitAnswer = () => {
    console.log('🔍 handleSubmitAnswer called');
    console.log('🔍 currentExercise:', currentExercise);
    console.log('🔍 selectedAnswer:', selectedAnswer);

    if (!currentExercise || !selectedAnswer) {
      console.log('❌ Missing currentExercise or selectedAnswer');
      return;
    }

    // Find the selected option and check if it's correct
    let isCorrect = false;
    if (currentExercise.type === 'multiple-choice' && currentExercise.options) {
      console.log('🔍 Multiple choice exercise with options:', currentExercise.options);
      const selectedOption = currentExercise.options.find(option => option.id === selectedAnswer);
      console.log('🔍 selectedOption:', selectedOption);
      isCorrect = selectedOption?.isCorrect || false;
      console.log('🔍 isCorrect from selectedOption.isCorrect:', isCorrect);
    } else {
      // For non-multiple choice, compare directly with correctAnswer
      console.log('🔍 Non-multiple choice, comparing:', selectedAnswer, '===', currentExercise.correctAnswer);
      isCorrect = selectedAnswer === currentExercise.correctAnswer;
      console.log('🔍 isCorrect from direct comparison:', isCorrect);
    }

    console.log('🎯 Final isCorrect result:', isCorrect);

    // Use a heart for wrong answers
    if (!isCorrect && user) {
      console.log('💔 Wrong answer, using heart');
      const heartUsed = useHeart();
      if (!heartUsed) {
        showFeedbackMessage('No hearts left! Take a break and try again later.', 'error');
        return;
      }
    } else if (isCorrect) {
      console.log('✅ Correct answer!');
    }

    // Show immediate feedback based on our validation
    if (isCorrect) {
      showFeedbackMessage('Correct! Well done! 🎉', 'success');
    } else {
      showFeedbackMessage(
        currentExercise.explanation || 'Not quite right. Try again!',
        'error'
      );
    }

    // Submit the answer with our validation result
    submitAnswerWithResult(selectedAnswer, isCorrect);
    setSelectedAnswer('');

    // Move to next exercise after a delay
    setTimeout(() => {
      if (exerciseIndex < (currentLesson?.exercises.length || 0) - 1) {
        nextExercise();
      } else {
        // Lesson completed
        setShowResults(true);
        if (isCorrect) {
          addXP(currentLesson?.xpReward || 0);
        }
      }
    }, 2000);
  };

  const handleMicToggle = () => {
    setIsListening(!isListening);
    // In a real app, this would start/stop audio recording and analysis
    showFeedbackMessage(
      isListening ? 'Stopped listening' : 'Listening for your voice...',
      'info'
    );
  };

  const handleFinishLesson = () => {
    console.log('🚀 handleFinishLesson called!');
    console.log('🚀 currentLesson:', currentLesson);
    console.log('🚀 exerciseResults:', exerciseResults);

    if (currentLesson) {
      // Calculate final score based on exercise results
      const correctAnswers = exerciseResults.filter(r => r.isCorrect).length;
      const totalQuestions = exerciseResults.length;
      const score = Math.round((correctAnswers / totalQuestions) * 100);

      console.log('🚀 Score calculation:', { correctAnswers, totalQuestions, score });

      // Find the node ID for this lesson
      let nodeId = '';
      console.log('🚀 Searching for node ID in sampleSkillTrees:', sampleSkillTrees.length, 'trees');

      sampleSkillTrees.forEach((tree, treeIndex) => {
        console.log(`🚀 Checking tree ${treeIndex}:`, tree.title, 'with', tree.nodes.length, 'nodes');
        tree.nodes.forEach((node, nodeIndex) => {
          console.log(`🚀 Checking node ${nodeIndex}:`, node.id, 'with', node.lessons.length, 'lessons');
          if (node.lessons.some(lesson => lesson.id === currentLesson.id)) {
            nodeId = node.id;
            console.log('🚀 Found matching node:', nodeId);
          }
        });
      });

      if (nodeId) {
        console.log('🎯 Completing lesson:', currentLesson.id, 'with score:', score, 'for node:', nodeId);
        completeLesson(currentLesson.id, nodeId, score);
      } else {
        console.warn('⚠️ Could not find node ID for lesson:', currentLesson.id);
      }
    } else {
      console.warn('⚠️ No currentLesson found!');
    }

    console.log('🚀 Navigating to skill-tree');
    navigate('/skill-tree');
  };

  if (!currentLesson || !currentExercise) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600">Loading lesson...</h2>
      </div>
    );
  }

  if (showResults) {
    const correctAnswers = exerciseResults.filter(r => r.isCorrect).length;
    const totalQuestions = exerciseResults.length;
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <div className="card space-y-6">
          <div className="text-6xl">🎉</div>
          <h1 className="text-3xl font-bold gradient-text">Lesson Complete!</h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary-600">{accuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-secondary-600">
                {currentLesson.xpReward}
              </div>
              <div className="text-sm text-gray-600">XP Earned</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">
                {correctAnswers}/{totalQuestions}
              </div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
          </div>

          <button
            onClick={handleFinishLesson}
            className="btn-primary text-lg px-8 py-3"
          >
            Continue Learning
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/skill-tree')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Skills</span>
        </button>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span className="font-medium">{user?.hearts}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-medium">{user?.xp}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="card">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{currentLesson.title}</h2>
          <span className="text-sm text-gray-600">
            {exerciseIndex + 1} of {currentLesson.exercises.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((exerciseIndex + 1) / currentLesson.exercises.length) * 100}%` }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Exercise Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentExercise.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="card space-y-6"
        >
          <h3 className="text-xl font-semibold text-center">
            {currentExercise.question}
          </h3>

          {/* Staff Notation Visual Aid */}
          {(() => {
            const noteInfo = extractNoteFromQuestion(currentExercise.question);
            if (noteInfo) {
              return (
                <div className="flex justify-center my-6">
                  <StaffNotation
                    note={noteInfo.note}
                    clef={noteInfo.clef}
                    className="shadow-lg"
                  />
                </div>
              );
            }
            return null;
          })()}

          {/* Multiple Choice Exercise */}
          {currentExercise.type === 'multiple-choice' && currentExercise.options && (
            <div className="space-y-3">
              {currentExercise.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === option.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}

          {/* Pitch Match Exercise */}
          {currentExercise.type === 'pitch-match' && (
            <div className="text-center space-y-6">
              <button className="btn-secondary flex items-center space-x-2 mx-auto">
                <Volume2 className="w-5 h-5" />
                <span>Play Note</span>
              </button>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Click the microphone and match the pitch with your voice
                </p>

                <button
                  onClick={handleMicToggle}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-200 ${
                    isListening
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                      : 'bg-primary-500 hover:bg-primary-600'
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-8 h-8 text-white" />
                  ) : (
                    <Mic className="w-8 h-8 text-white" />
                  )}
                </button>

                {isListening && (
                  <div className="audio-visualizer">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="audio-bar" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer && currentExercise.type === 'multiple-choice'}
              className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentExercise.type === 'pitch-match' ? 'Check Pitch' : 'Submit Answer'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={previousExercise}
          disabled={exerciseIndex === 0}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextExercise}
          disabled={exerciseIndex === currentLesson.exercises.length - 1}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
