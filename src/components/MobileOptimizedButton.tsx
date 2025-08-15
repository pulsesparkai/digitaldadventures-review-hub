import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileOptimizedButtonProps extends ButtonProps {
  mobileText?: string;
  desktopText?: string;
  children?: React.ReactNode;
}

const MobileOptimizedButton: React.FC<MobileOptimizedButtonProps> = ({
  mobileText,
  desktopText,
  children,
  className,
  ...props
}) => {
  const content = children || (
    <>
      {mobileText && <span className="sm:hidden">{mobileText}</span>}
      {desktopText && <span className="hidden sm:inline">{desktopText}</span>}
    </>
  );

  return (
    <Button
      className={cn(
        "min-h-[44px] touch-target",
        "text-sm sm:text-base",
        "px-4 sm:px-6",
        className
      )}
      {...props}
    >
      {content}
    </Button>
  );
};

export default MobileOptimizedButton;