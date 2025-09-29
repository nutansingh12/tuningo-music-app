import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Heart, Zap, Download, BarChart3, Shield } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (plan: 'monthly' | 'yearly') => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose, onSubscribe }) => {
  const features = [
    {
      icon: Heart,
      title: 'Unlimited Hearts',
      description: 'Never run out of hearts. Practice as much as you want!',
      color: 'text-red-500'
    },
    {
      icon: Zap,
      title: 'No Ads',
      description: 'Enjoy uninterrupted learning without any advertisements.',
      color: 'text-yellow-500'
    },
    {
      icon: Download,
      title: 'Offline Lessons',
      description: 'Download lessons and practice anywhere, even without internet.',
      color: 'text-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Detailed progress tracking and personalized insights.',
      color: 'text-green-500'
    },
    {
      icon: Crown,
      title: 'Exclusive Content',
      description: 'Access premium lessons, advanced techniques, and masterclasses.',
      color: 'text-purple-500'
    },
    {
      icon: Shield,
      title: 'Streak Freeze',
      description: 'Protect your streak even when you miss a day.',
      color: 'text-indigo-500'
    }
  ];

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$9.99',
      period: '/month',
      savings: null,
      popular: false
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: '$59.99',
      period: '/year',
      savings: 'Save 50%',
      popular: true
    }
  ];

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
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="text-4xl mb-2">👑</div>
                <h2 className="text-2xl font-bold mb-2">Upgrade to Tuningo Premium</h2>
                <p className="text-purple-100">
                  Unlock unlimited learning and advanced features
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                What you'll get with Premium:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
                    >
                      <Icon className={`w-5 h-5 mt-0.5 ${feature.color}`} />
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Pricing Plans */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  Choose your plan:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plans.map((plan) => (
                    <motion.button
                      key={plan.id}
                      onClick={() => onSubscribe(plan.id as 'monthly' | 'yearly')}
                      className={`relative p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                        plan.popular
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 bg-white hover:border-purple-300'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            MOST POPULAR
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center">
                        <h4 className="font-bold text-lg text-gray-800">{plan.name}</h4>
                        <div className="my-2">
                          <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                          <span className="text-gray-600">{plan.period}</span>
                        </div>
                        {plan.savings && (
                          <div className="text-green-600 font-semibold text-sm">
                            {plan.savings}
                          </div>
                        )}
                        <div className="text-sm text-gray-500 mt-2">
                          {plan.id === 'monthly' ? '$9.99 per month' : 'Just $4.99 per month'}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>✓ Cancel anytime • ✓ 7-day free trial • ✓ Secure payment</p>
                <p className="mt-2">Join thousands of musicians improving their skills daily!</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumModal;
