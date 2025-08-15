import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Cookie, Settings, ExternalLink, X } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieCategories } from '@/types/cookieConsent';

interface CookieCustomizeDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (categories: CookieCategories) => void;
  currentCategories: CookieCategories;
}

const CookieCustomizeDialog: React.FC<CookieCustomizeDialogProps> = ({
  isOpen,
  onOpenChange,
  onSave,
  currentCategories,
}) => {
  const [categories, setCategories] = useState<CookieCategories>(currentCategories);

  const handleSave = () => {
    onSave(categories);
    onOpenChange(false);
  };

  const categoryDescriptions = {
    essential: {
      title: "Essential Cookies",
      description: "Required for the website to function properly. These cannot be disabled.",
    },
    analytics: {
      title: "Analytics Cookies", 
      description: "Help us understand how visitors interact with our website by collecting anonymous information.",
    },
    marketing: {
      title: "Marketing Cookies",
      description: "Used to track visitors across websites for advertising and retargeting purposes.",
    },
    functional: {
      title: "Functional Cookies",
      description: "Enable enhanced functionality like chat widgets and personalized content.",
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Customize Cookie Preferences
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {Object.entries(categoryDescriptions).map(([key, info]) => {
            const isEssential = key === 'essential';
            return (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor={key} className="text-sm font-medium">
                    {info.title}
                  </Label>
                  <Switch
                    id={key}
                    checked={categories[key as keyof CookieCategories]}
                    onCheckedChange={(checked) => 
                      setCategories(prev => ({ ...prev, [key]: checked }))
                    }
                    disabled={isEssential}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {info.description}
                </p>
              </div>
            );
          })}
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} className="flex-1">
              Save Preferences
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CookieConsentBanner: React.FC = () => {
  const { hasConsent, isLoading, acceptAll, decline, updateCategories, consentData } = useCookieConsent();
  const [showCustomize, setShowCustomize] = useState(false);

  // Don't show banner if user has already provided consent or while loading
  if (hasConsent || isLoading) {
    return null;
  }

  const defaultCategories: CookieCategories = {
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  };

  const handleCustomize = (categories: CookieCategories) => {
    updateCategories(categories);
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 safe-area-bottom">
        <Card className="mx-auto max-w-4xl shadow-2xl border-border/50 bg-card/95 backdrop-blur-md">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <p className="text-sm leading-relaxed">
                    🍪 We use cookies to enhance your experience and analyze site traffic.{' '}
                    <Link 
                      to="/cookie-policy" 
                      className="text-primary hover:underline inline-flex items-center gap-1 touch-target"
                    >
                      Learn more
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex flex-col xs:flex-row gap-2">
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    className="order-1 bg-primary text-primary-foreground hover:bg-primary/90 min-h-[44px] touch-target"
                  >
                    Accept All
                  </Button>
                  
                  <Dialog open={showCustomize} onOpenChange={setShowCustomize}>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="order-2 min-h-[44px] touch-target"
                      >
                        <Settings className="h-4 w-4 mr-1" />
                        <span className="hidden xs:inline">Customize</span>
                        <span className="xs:hidden">Options</span>
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={decline}
                  className="order-3 min-h-[44px] touch-target"
                >
                  Decline Non-Essential
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <CookieCustomizeDialog
        isOpen={showCustomize}
        onOpenChange={setShowCustomize}
        onSave={handleCustomize}
        currentCategories={consentData?.cookie_categories || defaultCategories}
      />
    </>
  );
};

export default CookieConsentBanner;