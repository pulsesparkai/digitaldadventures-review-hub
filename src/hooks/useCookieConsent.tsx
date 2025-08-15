import { useState, useEffect, useCallback } from 'react';
import { CookieConsentData, CookieCategories, CookieConsentContext } from '@/types/cookieConsent';
import { CookieConsentService } from '@/services/cookieConsentService';
import { useToast } from '@/hooks/use-toast';

export const useCookieConsent = (): CookieConsentContext => {
  const [consentData, setConsentData] = useState<CookieConsentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const hasConsent = consentData !== null;

  // Load existing consent on mount
  useEffect(() => {
    const loadConsent = async () => {
      try {
        setIsLoading(true);
        const existingConsent = await CookieConsentService.getConsent();
        setConsentData(existingConsent);
      } catch (error) {
        console.error('Failed to load consent:', error);
        toast({
          title: "Error loading cookie preferences",
          description: "Using default settings. Your preferences may not be saved.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadConsent();
  }, [toast]);

  const acceptAll = useCallback(async () => {
    try {
      setIsLoading(true);
      const newConsent = await CookieConsentService.saveConsent(true);
      setConsentData(newConsent);
      
      toast({
        title: "Cookie preferences saved",
        description: "All cookies have been accepted.",
      });
    } catch (error) {
      console.error('Failed to save consent:', error);
      toast({
        title: "Error saving preferences", 
        description: "Your cookie preferences could not be saved.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const decline = useCallback(async () => {
    try {
      setIsLoading(true);
      const categories: CookieCategories = {
        essential: true,
        analytics: false,
        marketing: false,
        functional: false,
      };
      
      const newConsent = await CookieConsentService.saveConsent(false, categories);
      setConsentData(newConsent);
      
      toast({
        title: "Cookie preferences saved",
        description: "Only essential cookies will be used.",
      });
    } catch (error) {
      console.error('Failed to save consent:', error);
      toast({
        title: "Error saving preferences",
        description: "Your cookie preferences could not be saved.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const updateCategories = useCallback(async (categories: Partial<CookieCategories>) => {
    try {
      setIsLoading(true);
      
      if (!consentData) {
        // If no existing consent, create new one
        const hasAnyConsent = Object.values(categories).some(val => val === true);
        const newConsent = await CookieConsentService.saveConsent(hasAnyConsent, categories);
        setConsentData(newConsent);
      } else {
        // Update existing consent
        const updatedConsent = await CookieConsentService.updateConsent(categories);
        if (updatedConsent) {
          setConsentData(updatedConsent);
        }
      }
      
      toast({
        title: "Cookie preferences updated",
        description: "Your cookie settings have been saved.",
      });
    } catch (error) {
      console.error('Failed to update consent:', error);
      toast({
        title: "Error updating preferences",
        description: "Your cookie preferences could not be updated.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [consentData, toast]);

  const resetConsent = useCallback(async () => {
    try {
      setIsLoading(true);
      CookieConsentService.clearLocalData();
      setConsentData(null);
      
      toast({
        title: "Cookie preferences reset",
        description: "Your cookie consent has been cleared.",
      });
    } catch (error) {
      console.error('Failed to reset consent:', error);
      toast({
        title: "Error resetting preferences",
        description: "Could not reset your cookie preferences.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  return {
    hasConsent,
    consentData,
    isLoading,
    acceptAll,
    decline,
    updateCategories,
    resetConsent,
  };
};