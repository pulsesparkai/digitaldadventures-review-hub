import { supabase } from "@/integrations/supabase/client";
import { CookieConsentData, CookieCategories } from "@/types/cookieConsent";

export class CookieConsentService {
  private static VISITOR_ID_KEY = 'cookie_consent_visitor_id';
  private static CONSENT_STATUS_KEY = 'cookie_consent_status';

  static generateVisitorId(): string {
    return crypto.randomUUID();
  }

  static getVisitorId(): string {
    let visitorId = localStorage.getItem(this.VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = this.generateVisitorId();
      localStorage.setItem(this.VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
  }

  static getLocalConsentStatus(): CookieConsentData | null {
    try {
      const stored = localStorage.getItem(this.CONSENT_STATUS_KEY);
      if (!stored) {
        // For new visitors from search engines or external links, ensure banner shows
        return null;
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse local consent data:', error);
      // Return null to show banner for any storage errors
      return null;
    }
  }

  static setLocalConsentStatus(data: CookieConsentData): void {
    try {
      localStorage.setItem(this.CONSENT_STATUS_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to store consent data locally:', error);
    }
  }

  static clearLocalData(): void {
    localStorage.removeItem(this.VISITOR_ID_KEY);
    localStorage.removeItem(this.CONSENT_STATUS_KEY);
  }

  static async saveConsent(
    consentGiven: boolean,
    categories?: Partial<CookieCategories>
  ): Promise<CookieConsentData> {
    const visitorId = this.getVisitorId();
    
    const defaultCategories: CookieCategories = {
      essential: true,
      analytics: consentGiven,
      marketing: consentGiven,
      functional: consentGiven,
    };

    const finalCategories = categories ? { ...defaultCategories, ...categories } : defaultCategories;

    const consentData = {
      visitor_id: visitorId,
      consent_given: consentGiven,
      cookie_categories: finalCategories as any, // Cast to Json type for Supabase
      ip_address: await this.getClientIP(),
      user_agent: navigator.userAgent,
    };

    try {
      // Try to save to Supabase
      const { data, error } = await supabase
        .from('cookie_consents')
        .insert(consentData)
        .select()
        .single();

      if (error) {
        console.error('Failed to save consent to Supabase:', error);
        // Fall back to local storage only
        const fallbackData: CookieConsentData = {
          ...consentData,
          cookie_categories: finalCategories,
          id: crypto.randomUUID(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        this.setLocalConsentStatus(fallbackData);
        return fallbackData;
      }

      // Save to local storage for quick access
      const formattedData: CookieConsentData = {
        ...data,
        cookie_categories: data.cookie_categories as unknown as CookieCategories,
      };
      this.setLocalConsentStatus(formattedData);
      return formattedData;
    } catch (error) {
      console.error('Network error saving consent:', error);
      // Fall back to local storage
      const fallbackData: CookieConsentData = {
        ...consentData,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      this.setLocalConsentStatus(fallbackData);
      return fallbackData;
    }
  }

  static async getConsent(): Promise<CookieConsentData | null> {
    // First check local storage for quick access
    const localData = this.getLocalConsentStatus();
    if (localData) {
      return localData;
    }

    // If not in local storage, check Supabase
    const visitorId = this.getVisitorId();
    try {
      const { data, error } = await supabase
        .from('cookie_consents')
        .select('*')
        .eq('visitor_id', visitorId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Failed to fetch consent from Supabase:', error);
        return null;
      }

      if (data) {
        // Cache in local storage
        const formattedData: CookieConsentData = {
          ...data,
          cookie_categories: data.cookie_categories as unknown as CookieCategories,
        };
        this.setLocalConsentStatus(formattedData);
        return formattedData;
      }

      return null;
    } catch (error) {
      console.error('Network error fetching consent:', error);
      return null;
    }
  }

  static async updateConsent(
    categories: Partial<CookieCategories>
  ): Promise<CookieConsentData | null> {
    const visitorId = this.getVisitorId();
    
    try {
      const { data, error } = await supabase
        .from('cookie_consents')
        .update({
          cookie_categories: categories as any, // Cast to Json type for Supabase
          updated_at: new Date().toISOString(),
        })
        .eq('visitor_id', visitorId)
        .select()
        .single();

      if (error) {
        console.error('Failed to update consent in Supabase:', error);
        return null;
      }

      // Update local storage
      const formattedData: CookieConsentData = {
        ...data,
        cookie_categories: data.cookie_categories as unknown as CookieCategories,
      };
      this.setLocalConsentStatus(formattedData);
      return formattedData;
    } catch (error) {
      console.error('Network error updating consent:', error);
      return null;
    }
  }

  private static async getClientIP(): Promise<string | undefined> {
    try {
      // In a real app, you might want to use a service to get the IP
      // For now, we'll return undefined and let the backend handle it
      return undefined;
    } catch {
      return undefined;
    }
  }

  static hasEssentialConsent(): boolean {
    const consent = this.getLocalConsentStatus();
    return consent?.cookie_categories.essential ?? false;
  }

  static hasAnalyticsConsent(): boolean {
    const consent = this.getLocalConsentStatus();
    return consent?.cookie_categories.analytics ?? false;
  }

  static hasMarketingConsent(): boolean {
    const consent = this.getLocalConsentStatus();
    return consent?.cookie_categories.marketing ?? false;
  }

  static hasFunctionalConsent(): boolean {
    const consent = this.getLocalConsentStatus();
    return consent?.cookie_categories.functional ?? false;
  }
}