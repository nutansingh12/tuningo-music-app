import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

const FeedbackToast = () => {
  const { showFeedback, feedbackMessage, feedbackType, hideFeedback } = useGameStore();

  const getIcon = () => {
    switch (feedbackType) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-success-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-error-500" />;
      default:
        return <Info className="w-5 h-5 text-primary-500" />;
    }
  };

  const getBackgroundColor = () => {
    switch (feedbackType) {
      case 'success':
        return 'bg-success-50 border-success-200';
      case 'error':
        return 'bg-error-50 border-error-200';
      default:
        return 'bg-primary-50 border-primary-200';
    }
  };

  const getTextColor = () => {
    switch (feedbackType) {
      case 'success':
        return 'text-success-800';
      case 'error':
        return 'text-error-800';
      default:
        return 'text-primary-800';
    }
  };

  return (
    <AnimatePresence>
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div className={`${getBackgroundColor()} border rounded-lg shadow-lg p-4`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {getIcon()}
              </div>
              
              <div className="flex-1">
                <p className={`${getTextColor()} font-medium text-sm`}>
                  {feedbackMessage}
                </p>
              </div>
              
              <button
                onClick={hideFeedback}
                className={`flex-shrink-0 ${getTextColor()} hover:opacity-70 transition-opacity`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackToast;
