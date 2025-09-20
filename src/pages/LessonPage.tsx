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
  MicOff,
  Play,
  Pause
} from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { useUserStore } from '@/store/userStore';
import { sampleSkillTrees } from '@/data/sampleData';
import StaffNotation from '@/components/StaffNotation';
import { useAudioSynthesizer } from '@/hooks/useAudio';
import { loadLessonById } from '@/services/lessonLoader';

// Helper function to extract note information from question text and exercise data
const extractNoteFromQuestion = (question: string, exercise?: any): { note: string; clef: 'treble' | 'bass' } | null => {
  const lowerQuestion = question.toLowerCase();



  // EXCLUDE alphabet sequence questions - these are theoretical, not visual
  if (lowerQuestion.includes('musical alphabet') ||
      lowerQuestion.includes('comes after') ||
      lowerQuestion.includes('comes before') ||
      lowerQuestion.includes('what note comes') ||
      lowerQuestion.includes('which letter comes')) {
    return null;
  }

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

  // Look for "What note is shown on the [treble/bass] clef staff?" patterns
  const whatNoteMatch = lowerQuestion.match(/what\s+note\s+is\s+shown\s+on\s+the\s+(treble|bass)\s+clef/);
  const exerciseAnswer = exercise?.answer || exercise?.correctAnswer;
  if (whatNoteMatch && exerciseAnswer) {

    // Extract the note from the exercise answer since the question doesn't reveal it
    return {
      note: exerciseAnswer.toUpperCase(),
      clef: whatNoteMatch[1] as 'treble' | 'bass'
    };
  }

  // Look for "What note is shown on the staff?" (generic)
  if (lowerQuestion.includes('what note is shown') && lowerQuestion.includes('staff') && exerciseAnswer) {
    // Determine clef from context or default to treble
    const clefFromContext = lowerQuestion.includes('bass') ? 'bass' : 'treble';
    return {
      note: exerciseAnswer.toUpperCase(),
      clef: clefFromContext
    };
  }

  // Look for questions about specific staff positions that need visual aids
  const staffPositionPatterns = [
    /what\s+note\s+is\s+on\s+the\s+(bottom|first|second|third|fourth|top|middle)\s+(line|space)\s+of\s+(treble|bass)\s+clef/,
    /what\s+note\s+is\s+in\s+the\s+(first|second|third|fourth|top)\s+space\s+of\s+(treble|bass)\s+clef/,
    /what\s+note\s+is\s+on\s+the\s+.*\s+ledger\s+line\s+(above|below)\s+(treble|bass)/,
    /what\s+note\s+is\s+in\s+the\s+space\s+(above|below)\s+.*\s+(treble|bass)/
  ];

  for (const pattern of staffPositionPatterns) {
    const match = lowerQuestion.match(pattern);
    if (match && exerciseAnswer) {
      const clefFromMatch = match[match.length - 1]; // Last capture group is usually the clef
      return {
        note: exerciseAnswer.toUpperCase(),
        clef: (clefFromMatch === 'bass' ? 'bass' : 'treble') as 'treble' | 'bass'
      };
    }
  }

  // Look for "note X is shown on the Y clef staff" patterns
  const noteOnClefMatch = lowerQuestion.match(/note\s+([a-g])\s+.*on\s+the\s+(treble|bass)\s+clef/);
  if (noteOnClefMatch) {
    return {
      note: noteOnClefMatch[1].toUpperCase(),
      clef: noteOnClefMatch[2] as 'treble' | 'bass'
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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const { playNote, playChord } = useAudioSynthesizer();

  // Function to find lesson by ID using lazy loading
  const findLessonById = async (id: string) => {
    console.log(`🔍 Loading lesson: ${id}`);

    // For ANY Level 4 lesson, return a simple working lesson
    if (id === 'interval_recognition_unison' || id.includes('ear_voice_training') || id.includes('level_4')) {
      console.log(`✅ Creating simple ear training lesson for ID: ${id}`);
      return {
        id: id,
        title: 'Recognizing Unisons',
        description: 'Identify when two notes are the same',
        type: 'listening' as const,
        difficulty: 'beginner' as const,
        estimatedDuration: 12,
        xpReward: 120,
        prerequisites: [],
        exercises: [
          {
            id: 'ex1',
            type: 'multiple-choice' as const,
            question: 'Listen to these two notes. Are they the same or different?',
            options: [
              { id: 'a', text: 'Same (Unison)', isCorrect: true },
              { id: 'b', text: 'Different', isCorrect: false }
            ],
            correctAnswer: 'a',
            explanation: 'These notes are identical - a perfect unison (0 semitones apart)',
            difficulty: 'beginner' as const
          },
          {
            id: 'ex2',
            type: 'multiple-choice' as const,
            question: 'What is a unison in music?',
            options: [
              { id: 'a', text: 'Two notes of the same pitch', isCorrect: true },
              { id: 'b', text: 'Two different notes', isCorrect: false },
              { id: 'c', text: 'A type of instrument', isCorrect: false }
            ],
            correctAnswer: 'a',
            explanation: 'A unison occurs when two notes have exactly the same pitch',
            difficulty: 'beginner' as const
          }
        ]
      };
    }

    try {
      const lesson = await loadLessonById(id);
      if (lesson) {
        console.log(`✅ Lesson loaded: ${lesson.title}`);
        return lesson;
      }
    } catch (error) {
      console.error(`❌ Failed to load lesson ${id}:`, error);
    }

    // Fallback: search in existing skill trees (for backward compatibility)
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
    const loadLesson = async () => {
      console.log(`🔄 useEffect triggered for lessonId: ${lessonId}`);

      if (!lessonId) {
        console.log(`📝 No lessonId, using demo lesson`);
        setCurrentLesson(demoLesson);
        return;
      }

      if (lessonId === 'demo') {
        console.log(`📝 Demo lesson requested`);
        setCurrentLesson(demoLesson);
        return;
      }

      try {
        console.log(`🔍 Attempting to load lesson: ${lessonId}`);
        // Try to find the lesson using lazy loading
        const foundLesson = await findLessonById(lessonId);
        console.log(`🎯 Found lesson result:`, foundLesson);

        if (foundLesson && foundLesson.exercises && foundLesson.exercises.length > 0) {
          console.log(`✅ Setting lesson: ${foundLesson.title} with ${foundLesson.exercises.length} exercises`);
          console.log(`🔍 First exercise:`, foundLesson.exercises[0]);
          console.log(`🔍 First exercise options:`, foundLesson.exercises[0]?.options);
          setCurrentLesson(foundLesson);
          console.log(`📊 Lesson set successfully`);
        } else {
          console.warn(`❌ Lesson not found or invalid: ${lessonId}, creating fallback lesson`);
          // Create a fallback lesson for any unrecognized lesson ID
          const fallbackLesson = {
            id: lessonId,
            title: `Lesson: ${lessonId}`,
            description: 'A basic music lesson',
            type: 'theory' as const,
            difficulty: 'beginner' as const,
            estimatedDuration: 10,
            xpReward: 100,
            prerequisites: [],
            exercises: [
              {
                id: 'fallback-1',
                type: 'multiple-choice' as const,
                question: 'This is a test question. What is music?',
                options: [
                  { id: 'a', text: 'Sound organized in time', isCorrect: true },
                  { id: 'b', text: 'Just noise', isCorrect: false },
                  { id: 'c', text: 'Only instruments', isCorrect: false }
                ],
                correctAnswer: 'a',
                explanation: 'Music is sound organized in time with rhythm, melody, and harmony',
                difficulty: 'beginner' as const
              }
            ]
          };
          setCurrentLesson(fallbackLesson);
        }
      } catch (error) {
        console.error(`💥 Error loading lesson ${lessonId}:`, error);
        setCurrentLesson(demoLesson);
      }
    };

    loadLesson();

    return () => {
      resetLesson();
    };
  }, [lessonId, setCurrentLesson, resetLesson]);

  const handleAnswerSelect = (answerId: string) => {
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
      console.log('🔍 Selected answer:', selectedAnswer);

      // Try to find the selected option in new format first
      const selectedOptionNew = currentExercise.options.find(option =>
        typeof option === 'object' && option !== null && option.id === selectedAnswer
      );

      if (selectedOptionNew) {
        // Found in new format: {id, text, isCorrect}
        console.log('🔍 New format - selectedOption:', selectedOptionNew);
        isCorrect = selectedOptionNew.isCorrect || false;
        console.log('🔍 New format - isCorrect:', isCorrect);
      } else {
        // Check if it's old format: ["option1", "option2"] with separate answer field
        const exerciseAnswer = currentExercise.answer || currentExercise.correctAnswer;
        console.log('🔍 Old format - comparing:', selectedAnswer, '===', exerciseAnswer);
        isCorrect = selectedAnswer === exerciseAnswer;
        console.log('🔍 Old format - isCorrect:', isCorrect);
      }
    } else {
      // For non-multiple choice, compare directly with correctAnswer
      const exerciseAnswer = currentExercise.answer || currentExercise.correctAnswer;
      console.log('🔍 Non-multiple choice, comparing:', selectedAnswer, '===', exerciseAnswer);
      isCorrect = selectedAnswer === exerciseAnswer;
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

  const playAudioExercise = (audioData: any) => {
    if (isPlayingAudio) return;

    setIsPlayingAudio(true);

    if (audioData.type === 'interval') {
      const notes = audioData.notes;
      const duration = audioData.duration || 1000;

      if (audioData.playSequentially) {
        // Play notes one after another
        notes.forEach((noteData: any, index: number) => {
          setTimeout(() => {
            playNote(noteData.note, noteData.octave, duration);
          }, index * (duration + 200));
        });

        setTimeout(() => {
          setIsPlayingAudio(false);
        }, notes.length * (duration + 200));
      } else {
        // Play notes simultaneously (harmony)
        playChord(notes, duration);
        setTimeout(() => {
          setIsPlayingAudio(false);
        }, duration);
      }
    } else if (audioData.type === 'comparison') {
      // Play comparison intervals with pause between
      const intervals = audioData.intervals;
      let totalTime = 0;

      intervals.forEach((interval: any, intervalIndex: number) => {
        const notes = interval.notes;
        const duration = audioData.duration || 1000;

        setTimeout(() => {
          showFeedbackMessage(`Playing ${interval.label}`, 'info');

          if (audioData.playSequentially) {
            notes.forEach((noteData: any, noteIndex: number) => {
              setTimeout(() => {
                playNote(noteData.note, noteData.octave, duration);
              }, noteIndex * (duration + 100));
            });
          } else {
            playChord(notes, duration);
          }
        }, totalTime);

        totalTime += (notes.length * (duration + 100)) + 1000; // Add pause between intervals
      });

      setTimeout(() => {
        setIsPlayingAudio(false);
      }, totalTime);
    }
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

    navigate('/skill-tree');
  };

  console.log(`🎮 Render state - currentLesson:`, currentLesson);
  console.log(`🎮 Render state - currentExercise:`, currentExercise);
  console.log(`🎮 Render state - lessonId:`, lessonId);

  if (!currentLesson || !currentExercise) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600">Loading lesson...</h2>
        <p className="text-gray-500 mt-2">Lesson ID: {lessonId}</p>
        <p className="text-gray-500">Current Lesson: {currentLesson ? 'Found' : 'Not found'}</p>
        <p className="text-gray-500">Current Exercise: {currentExercise ? 'Found' : 'Not found'}</p>
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
            const noteInfo = extractNoteFromQuestion(currentExercise.question, currentExercise);

            if (noteInfo) {
              return (
                <div className="flex justify-center my-6">
                  <div className="text-center">
                    <StaffNotation
                      note={noteInfo.note}
                      clef={noteInfo.clef}
                      className="shadow-lg"
                    />
                    {/* Audio playback for the note */}
                    <button
                      onClick={() => {
                        try {
                          const octave = noteInfo.clef === 'bass' ? 3 : 4;
                          playNote(noteInfo.note, octave, 1000);
                        } catch (error) {
                          console.warn('Audio playback failed:', error);
                        }
                      }}
                      disabled={isPlayingAudio}
                      className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 flex items-center space-x-2 mx-auto transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      <span>{isPlayingAudio ? 'Playing...' : 'Play Note'}</span>
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })()}

          {/* Multiple Choice Exercise */}
          {currentExercise.type === 'multiple-choice' && currentExercise.options && (
            <div className="space-y-3">
              {currentExercise.options.map((option, index) => {
                // Handle both new format {id, text, isCorrect} and old format ["option1", "option2"]
                // Check each option individually since formats can be mixed within the same lesson
                const isNewFormat = typeof option === 'object' && option !== null && 'id' in option && 'text' in option;
                const optionKey = isNewFormat ? option.id : `option-${index}`;
                const optionText = isNewFormat ? option.text : String(option);
                const optionValue = isNewFormat ? option.id : String(option);

                console.log(`🔍 Option ${index}:`, { option, isNewFormat, optionText, optionValue });

                return (
                  <button
                    key={optionKey}
                    onClick={() => handleAnswerSelect(optionValue)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === optionValue
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {optionText}
                  </button>
                );
              })}
            </div>
          )}

          {/* Audio Multiple Choice Exercise */}
          {currentExercise.type === 'audio-multiple-choice' && (
            <div className="space-y-6">
              {/* Audio Player */}
              <div className="text-center">
                <button
                  onClick={() => playAudioExercise(currentExercise.audioData)}
                  disabled={isPlayingAudio}
                  className={`btn-primary flex items-center space-x-2 mx-auto ${
                    isPlayingAudio ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="w-5 h-5" />
                      <span>Playing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      <span>Play Audio</span>
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Click to play the musical example
                </p>
              </div>

              {/* Answer Options */}
              <div className="space-y-3">
                {currentExercise.options && currentExercise.options.map((option, index) => {
                  // Handle both new format {id, text, isCorrect} and old format ["option1", "option2"]
                  // Check each option individually since formats can be mixed within the same lesson
                  const isNewFormat = typeof option === 'object' && option !== null && 'id' in option && 'text' in option;
                  const optionKey = isNewFormat ? option.id : `audio-option-${index}`;
                  const optionText = isNewFormat ? option.text : String(option);
                  const optionValue = isNewFormat ? option.id : String(option);

                  console.log(`🔍 Audio Option ${index}:`, { option, isNewFormat, optionText, optionValue });

                  return (
                    <button
                      key={optionKey}
                      onClick={() => handleAnswerSelect(optionValue)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                        selectedAnswer === optionValue
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {optionText}
                    </button>
                  );
                })}
              </div>
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
