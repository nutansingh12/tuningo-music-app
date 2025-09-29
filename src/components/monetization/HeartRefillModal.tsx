import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Crown, Clock, Zap } from 'lucide-react';
import { useUserStore } from '@/store/userStore';

interface HeartRefillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (option: 'refill' | 'premium' | 'wait') => void;
}

const HeartRefillModal: React.FC<HeartRefillModalProps> = ({ isOpen, onClose, onPurchase }) => {
  const { user } = useUserStore();

  const refillOptions = [
    {
      id: 'refill',
      title: 'Refill Hearts',
      description: 'Get full hearts instantly',
      price: '$0.99',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      action: 'Buy Now'
    },
    {
      id: 'premium',
      title: 'Go Premium',
      description: 'Unlimited hearts forever',
      price: '$9.99/month',
      icon: Crown,
      color: 'from-purple-500 to-indigo-500',
      action: 'Upgrade',
      popular: true
    },
    {
      id: 'wait',
      title: 'Wait for Hearts',
      description: 'Hearts refill over time',
      price: 'Free',
      icon: Clock,
      color: 'from-gray-400 to-gray-500',
      action: 'Wait'
    }
  ];

  const timeUntilNextHeart = () => {
    // Hearts refill every 30 minutes
    const now = new Date();
    const nextRefill = new Date(now.getTime() + 30 * 60 * 1000);
    return nextRefill.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-t-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="text-4xl mb-2">💔</div>
                <h2 className="text-xl font-bold mb-2">You're out of hearts!</h2>
                <p className="text-red-100">
                  You need hearts to continue learning
                </p>
              </div>
            </div>

            {/* Current Status */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-semibold">
                  {user?.hearts || 0} / {user?.maxHearts || 5} hearts remaining
                </span>
              </div>
              <div className="text-center text-sm text-gray-500 mt-2">
                Next heart refills at {timeUntilNextHeart()}
              </div>
            </div>

            {/* Options */}
            <div className="p-6 space-y-4">
              {refillOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => onPurchase(option.id as 'refill' | 'premium' | 'wait')}
                    className={`relative w-full p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      option.popular
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          BEST VALUE
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${option.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-gray-800">{option.title}</h3>
                        <p className="text-sm text-gray-600">{option.description}</p>
                        <div className="text-lg font-bold text-purple-600 mt-1">
                          {option.price}
                        </div>
                      </div>
                      
                      <div className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${option.color}`}>
                        {option.action}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="px-6 pb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Zap className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-800 mb-1">Pro Tip!</h4>
                <p className="text-sm text-blue-700">
                  Practice in mini-games to earn bonus hearts and keep learning!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeartRefillModal;
