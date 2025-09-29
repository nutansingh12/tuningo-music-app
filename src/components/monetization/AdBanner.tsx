import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface AdBannerProps {
  position: 'top' | 'bottom' | 'inline';
  onClose?: () => void;
  className?: string;
}

interface MockAd {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  url: string;
  sponsor: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ position, onClose, className = '' }) => {
  const [currentAd, setCurrentAd] = useState<MockAd | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Mock ads - in production, these would come from an ad network
  const mockAds: MockAd[] = [
    {
      id: '1',
      title: 'Learn Piano Online',
      description: 'Master piano with interactive lessons. Start your free trial today!',
      image: '🎹',
      cta: 'Start Free Trial',
      url: '#',
      sponsor: 'PianoAcademy'
    },
    {
      id: '2',
      title: 'Professional Music Software',
      description: 'Create, record, and produce music like a pro. 50% off this month!',
      image: '🎵',
      cta: 'Get Discount',
      url: '#',
      sponsor: 'MusicPro'
    },
    {
      id: '3',
      title: 'Guitar Lessons App',
      description: 'Learn guitar from beginner to advanced. Join millions of students!',
      image: '🎸',
      cta: 'Download Now',
      url: '#',
      sponsor: 'GuitarMaster'
    },
    {
      id: '4',
      title: 'Music Theory Course',
      description: 'Understand music theory in just 30 days. Comprehensive online course.',
      image: '📚',
      cta: 'Enroll Today',
      url: '#',
      sponsor: 'TheoryPro'
    }
  ];

  useEffect(() => {
    // Randomly select an ad
    const randomAd = mockAds[Math.floor(Math.random() * mockAds.length)];
    setCurrentAd(randomAd);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleAdClick = () => {
    // In production, this would track ad clicks and redirect
    console.log('Ad clicked:', currentAd?.title);
    // window.open(currentAd?.url, '_blank');
  };

  if (!currentAd || !isVisible) return null;

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'fixed top-16 left-0 right-0 z-40';
      case 'bottom':
        return 'fixed bottom-0 left-0 right-0 z-40';
      case 'inline':
        return 'relative';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: position === 'top' ? -50 : position === 'bottom' ? 50 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === 'top' ? -50 : position === 'bottom' ? 50 : 0 }}
          className={`${getPositionClasses()} ${className}`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Ad Content */}
                <div 
                  className="flex items-center space-x-4 flex-1 cursor-pointer hover:bg-white hover:bg-opacity-50 rounded-lg p-2 transition-colors"
                  onClick={handleAdClick}
                >
                  {/* Ad Image/Icon */}
                  <div className="text-3xl">{currentAd.image}</div>
                  
                  {/* Ad Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-800 truncate">
                        {currentAd.title}
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        Ad
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {currentAd.description}
                    </p>
                    <div className="text-xs text-gray-500 mt-1">
                      Sponsored by {currentAd.sponsor}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="hidden sm:block">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <span className="font-semibold">{currentAd.cta}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                {onClose && (
                  <button
                    onClick={handleClose}
                    className="ml-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Close ad"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              {/* Mobile CTA */}
              <div className="sm:hidden mt-3">
                <button
                  onClick={handleAdClick}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="font-semibold">{currentAd.cta}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdBanner;
