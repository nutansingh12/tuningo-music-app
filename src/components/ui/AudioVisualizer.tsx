import { motion } from 'framer-motion';
import { useAudioProcessor } from '@/hooks/useAudio';
import { Mic, MicOff, Volume2 } from 'lucide-react';

interface AudioVisualizerProps {
  onToggle?: () => void;
  showControls?: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  onToggle,
  showControls = true,
}) => {
  const {
    isInitialized,
    isListening,
    currentVolume,
    error,
    initialize,
    startListening,
    stopListening,
    getCurrentNote,
  } = useAudioProcessor();

  const handleToggle = async () => {
    if (!isInitialized) {
      await initialize();
    }

    if (isListening) {
      stopListening();
    } else {
      startListening();
    }

    onToggle?.();
  };

  const currentNote = getCurrentNote();
  const volumeLevel = Math.min(currentVolume * 100, 100);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Audio Visualizer Bars */}
      <div className="audio-visualizer">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="audio-bar"
            animate={{
              height: isListening && currentVolume > 0.1 
                ? `${Math.random() * 30 + 10}px` 
                : '10px'
            }}
            transition={{
              duration: 0.1,
              repeat: isListening ? Infinity : 0,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Current Note Display */}
      {isListening && currentNote && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-primary-600">
            {currentNote.note}{currentNote.octave}
          </div>
          <div className="text-sm text-gray-600">
            {currentNote.cents > 0 ? '+' : ''}{currentNote.cents} cents
          </div>
        </motion.div>
      )}

      {/* Volume Level */}
      {isListening && (
        <div className="w-32 bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
            animate={{ width: `${volumeLevel}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      )}

      {/* Controls */}
      {showControls && (
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggle}
            disabled={!isInitialized && !error}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : 'bg-primary-500 hover:bg-primary-600'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isListening ? (
              <MicOff className="w-6 h-6 text-white" />
            ) : (
              <Mic className="w-6 h-6 text-white" />
            )}
          </button>

          {isListening && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Volume2 className="w-4 h-4" />
              <span>Listening...</span>
            </div>
          )}
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="text-red-600 text-sm text-center max-w-xs">
          {error}
        </div>
      )}

      {/* Status */}
      {!isInitialized && !error && (
        <div className="text-gray-600 text-sm">
          Click to enable microphone
        </div>
      )}
    </div>
  );
};

export default AudioVisualizer;
