import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MobileResponsiveCardProps extends React.ComponentProps<typeof Card> {
  mobileMinHeight?: string;
  tabletMinHeight?: string;
  desktopMinHeight?: string;
  enableTouchTarget?: boolean;
}

const MobileResponsiveCard: React.FC<MobileResponsiveCardProps> = ({
  children,
  className,
  mobileMinHeight = "min-h-[100px]",
  tabletMinHeight = "sm:min-h-[120px]",
  desktopMinHeight = "md:min-h-[140px]",
  enableTouchTarget = false,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-shadow cursor-pointer h-full",
        mobileMinHeight,
        tabletMinHeight,
        desktopMinHeight,
        enableTouchTarget && "touch-target",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};

export default MobileResponsiveCard;