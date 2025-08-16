import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accessibility } from 'lucide-react';

const AccessibilityWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <Link
        to="/accessibility"
        className="group bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block"
        aria-label="View accessibility statement and features"
        title="Accessibility Statement"
      >
        <Accessibility 
          className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" 
          aria-hidden="true"
        />
      </Link>
      
      {/* Dismiss button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-1 -right-1 bg-background border border-border rounded-full w-5 h-5 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
        aria-label="Hide accessibility widget"
        title="Hide accessibility widget"
      >
        ×
      </button>
    </div>
  );
};

export default AccessibilityWidget;