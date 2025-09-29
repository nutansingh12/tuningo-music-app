import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SubscriptionPlan {
  id: 'free' | 'monthly' | 'yearly';
  name: string;
  price: number;
  period: 'month' | 'year' | null;
  features: string[];
}

export interface PurchaseHistory {
  id: string;
  type: 'subscription' | 'hearts' | 'gems' | 'streak_freeze';
  amount: number;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

interface MonetizationState {
  // Subscription
  currentPlan: SubscriptionPlan['id'];
  subscriptionExpiry: Date | null;
  isTrialActive: boolean;
  trialExpiry: Date | null;
  
  // Premium features
  hasUnlimitedHearts: boolean;
  hasAdFree: boolean;
  hasOfflineAccess: boolean;
  hasAdvancedAnalytics: boolean;
  hasExclusiveContent: boolean;
  hasStreakFreeze: boolean;
  
  // Purchase history
  purchases: PurchaseHistory[];
  
  // Ad settings
  showAds: boolean;
  lastAdShown: Date | null;
  adFrequency: number; // minutes between ads
  
  // Actions
  subscribeToPlan: (planId: SubscriptionPlan['id']) => void;
  cancelSubscription: () => void;
  startTrial: () => void;
  purchaseHearts: () => void;
  purchaseGems: (amount: number) => void;
  purchaseStreakFreeze: () => void;
  addPurchase: (purchase: Omit<PurchaseHistory, 'id' | 'date'>) => void;
  checkSubscriptionStatus: () => void;
  shouldShowAd: () => boolean;
  markAdShown: () => void;
  reset: () => void;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: null,
    features: [
      'Limited hearts (5 per day)',
      'Basic lessons',
      'Ads between lessons',
      'Basic progress tracking'
    ]
  },
  {
    id: 'monthly',
    name: 'Premium Monthly',
    price: 9.99,
    period: 'month',
    features: [
      'Unlimited hearts',
      'No ads',
      'Offline lessons',
      'Advanced analytics',
      'Exclusive content',
      'Streak freeze'
    ]
  },
  {
    id: 'yearly',
    name: 'Premium Yearly',
    price: 59.99,
    period: 'year',
    features: [
      'Unlimited hearts',
      'No ads',
      'Offline lessons',
      'Advanced analytics',
      'Exclusive content',
      'Streak freeze',
      'Save 50% vs monthly'
    ]
  }
];

const initialState = {
  currentPlan: 'free' as SubscriptionPlan['id'],
  subscriptionExpiry: null,
  isTrialActive: false,
  trialExpiry: null,
  hasUnlimitedHearts: false,
  hasAdFree: false,
  hasOfflineAccess: false,
  hasAdvancedAnalytics: false,
  hasExclusiveContent: false,
  hasStreakFreeze: false,
  purchases: [],
  showAds: true,
  lastAdShown: null,
  adFrequency: 5, // Show ad every 5 minutes
};

export const useMonetizationStore = create<MonetizationState>()(
  persist(
    (set, get) => ({
      ...initialState,

      subscribeToPlan: (planId) => {
        const now = new Date();
        let expiry: Date;
        
        if (planId === 'monthly') {
          expiry = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days
        } else if (planId === 'yearly') {
          expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000); // 365 days
        } else {
          expiry = now;
        }

        const isPremium = planId !== 'free';

        set({
          currentPlan: planId,
          subscriptionExpiry: planId !== 'free' ? expiry : null,
          isTrialActive: false,
          hasUnlimitedHearts: isPremium,
          hasAdFree: isPremium,
          hasOfflineAccess: isPremium,
          hasAdvancedAnalytics: isPremium,
          hasExclusiveContent: isPremium,
          hasStreakFreeze: isPremium,
          showAds: !isPremium,
        });

        // Add purchase record
        if (planId !== 'free') {
          const plan = subscriptionPlans.find(p => p.id === planId);
          if (plan) {
            get().addPurchase({
              type: 'subscription',
              amount: plan.price,
              status: 'completed'
            });
          }
        }
      },

      cancelSubscription: () => {
        set({
          currentPlan: 'free',
          subscriptionExpiry: null,
          hasUnlimitedHearts: false,
          hasAdFree: false,
          hasOfflineAccess: false,
          hasAdvancedAnalytics: false,
          hasExclusiveContent: false,
          hasStreakFreeze: false,
          showAds: true,
        });
      },

      startTrial: () => {
        const now = new Date();
        const trialExpiry = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

        set({
          isTrialActive: true,
          trialExpiry,
          hasUnlimitedHearts: true,
          hasAdFree: true,
          hasOfflineAccess: true,
          hasAdvancedAnalytics: true,
          hasExclusiveContent: true,
          hasStreakFreeze: true,
          showAds: false,
        });
      },

      purchaseHearts: () => {
        get().addPurchase({
          type: 'hearts',
          amount: 0.99,
          status: 'completed'
        });
      },

      purchaseGems: (amount) => {
        const price = amount === 100 ? 0.99 : amount === 500 ? 4.99 : 9.99;
        get().addPurchase({
          type: 'gems',
          amount: price,
          status: 'completed'
        });
      },

      purchaseStreakFreeze: () => {
        get().addPurchase({
          type: 'streak_freeze',
          amount: 1.99,
          status: 'completed'
        });
      },

      addPurchase: (purchase) => {
        const newPurchase: PurchaseHistory = {
          ...purchase,
          id: `purchase_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          date: new Date(),
        };

        set((state) => ({
          purchases: [...state.purchases, newPurchase],
        }));
      },

      checkSubscriptionStatus: () => {
        const state = get();
        const now = new Date();

        // Check if trial expired
        if (state.isTrialActive && state.trialExpiry && now > state.trialExpiry) {
          set({
            isTrialActive: false,
            trialExpiry: null,
            hasUnlimitedHearts: false,
            hasAdFree: false,
            hasOfflineAccess: false,
            hasAdvancedAnalytics: false,
            hasExclusiveContent: false,
            hasStreakFreeze: false,
            showAds: true,
          });
        }

        // Check if subscription expired
        if (state.subscriptionExpiry && now > state.subscriptionExpiry && state.currentPlan !== 'free') {
          get().cancelSubscription();
        }
      },

      shouldShowAd: () => {
        const state = get();
        
        // Don't show ads if user has ad-free
        if (state.hasAdFree) return false;
        
        // Don't show ads if one was shown recently
        if (state.lastAdShown) {
          const timeSinceLastAd = Date.now() - state.lastAdShown.getTime();
          const minTimeBetweenAds = state.adFrequency * 60 * 1000; // Convert to milliseconds
          
          if (timeSinceLastAd < minTimeBetweenAds) return false;
        }
        
        return true;
      },

      markAdShown: () => {
        set({ lastAdShown: new Date() });
      },

      reset: () => set(initialState),
    }),
    {
      name: 'tuningo-monetization',
      version: 1,
    }
  )
);

export { subscriptionPlans };
