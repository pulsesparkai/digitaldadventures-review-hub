// Mobile optimization utilities
export const checkMobileViewport = (): boolean => {
  return window.innerWidth <= 768;
};

export const checkTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const optimizeForMobile = () => {
  // Add mobile-specific optimizations on load
  if (checkMobileViewport()) {
    // Ensure proper touch behavior
    document.body.style.touchAction = 'manipulation';
    
    // Prevent zoom on input focus
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (input instanceof HTMLElement) {
        const fontSize = window.getComputedStyle(input).fontSize;
        if (parseInt(fontSize) < 16) {
          (input as HTMLElement).style.fontSize = '16px';
        }
      }
    });
  }
};

export const addTouchTargetClass = (element: HTMLElement): void => {
  if (checkTouchDevice()) {
    element.classList.add('touch-target');
  }
};

// Initialize mobile optimizations
if (typeof window !== 'undefined') {
  window.addEventListener('load', optimizeForMobile);
  window.addEventListener('resize', optimizeForMobile);
}