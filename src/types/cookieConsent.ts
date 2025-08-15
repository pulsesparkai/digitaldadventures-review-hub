export interface CookieCategories {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentData {
  id?: string;
  visitor_id: string;
  consent_given: boolean;
  cookie_categories: CookieCategories;
  ip_address?: string;
  user_agent?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CookieConsentContext {
  hasConsent: boolean;
  consentData: CookieConsentData | null;
  isLoading: boolean;
  acceptAll: () => Promise<void>;
  decline: () => Promise<void>;
  updateCategories: (categories: Partial<CookieCategories>) => Promise<void>;
  resetConsent: () => Promise<void>;
}

export type ConsentStatus = 'pending' | 'accepted' | 'declined' | 'partial';