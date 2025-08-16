import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Accessibility, 
  Type, 
  Eye, 
  Palette, 
  Volume2, 
  MousePointer,
  Minus,
  Plus,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  darkMode: boolean;
  reducedMotion: boolean;
  focusIndicators: boolean;
}

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    darkMode: false,
    reducedMotion: false,
    focusIndicators: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage and apply them
  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('accessibility-settings', JSON.stringify(updated));
    applySettings(updated);
  };

  // Apply settings to the document
  const applySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}%`;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('accessibility-high-contrast');
    } else {
      root.classList.remove('accessibility-high-contrast');
    }
    
    // Dark mode
    if (settings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('accessibility-reduced-motion');
    } else {
      root.classList.remove('accessibility-reduced-motion');
    }
    
    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('accessibility-enhanced-focus');
    } else {
      root.classList.remove('accessibility-enhanced-focus');
    }
  };

  // Reset all settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      highContrast: false,
      darkMode: false,
      reducedMotion: false,
      focusIndicators: false,
    };
    updateSettings(defaultSettings);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Widget Button */}
      <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group bg-background/90 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Open accessibility controls"
          title="Accessibility Controls"
        >
          <Accessibility 
            className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" 
            aria-hidden="true"
          />
        </button>
        
        {/* Dismiss button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-1 -right-1 bg-background border border-border rounded-full w-4 h-4 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
          aria-label="Hide accessibility widget"
          title="Hide accessibility widget"
        >
          <X className="h-2 w-2" />
        </button>
      </div>

      {/* Controls Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground flex items-center">
                <Accessibility className="h-5 w-5 mr-2 text-primary" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close accessibility controls"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Controls */}
            <div className="p-4 space-y-6">
              {/* Font Size */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Type className="h-4 w-4 mr-2 text-primary" />
                  Font Size: {settings.fontSize}%
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateSettings({ fontSize: Math.max(80, settings.fontSize - 10) })}
                    className="p-2 border border-border rounded hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Decrease font size"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${((settings.fontSize - 80) / 60) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => updateSettings({ fontSize: Math.min(140, settings.fontSize + 10) })}
                    className="p-2 border border-border rounded hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Increase font size"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Toggle Controls */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Eye className="h-4 w-4 mr-2 text-primary" />
                    High Contrast
                  </label>
                  <button
                    onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      settings.highContrast ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-pressed={settings.highContrast}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Dark Mode */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Palette className="h-4 w-4 mr-2 text-primary" />
                    Dark Mode
                  </label>
                  <button
                    onClick={() => updateSettings({ darkMode: !settings.darkMode })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      settings.darkMode ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-pressed={settings.darkMode}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                        settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Volume2 className="h-4 w-4 mr-2 text-primary" />
                    Reduce Motion
                  </label>
                  <button
                    onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      settings.reducedMotion ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-pressed={settings.reducedMotion}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Enhanced Focus */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <MousePointer className="h-4 w-4 mr-2 text-primary" />
                    Enhanced Focus
                  </label>
                  <button
                    onClick={() => updateSettings({ focusIndicators: !settings.focusIndicators })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      settings.focusIndicators ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-pressed={settings.focusIndicators}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-border space-y-2">
                <button
                  onClick={resetSettings}
                  className="w-full py-2 px-4 text-sm border border-border rounded hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Reset to Default
                </button>
                <Link
                  to="/accessibility"
                  className="block w-full py-2 px-4 text-sm text-center bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                >
                  View Full Statement
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;