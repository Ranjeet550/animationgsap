import { useEffect } from 'react';

const MouseWheelHandler = ({ isActive = true, sensitivity = 1 }) => {
  useEffect(() => {
    if (!isActive) return;

    const handleWheel = (e) => {
      // Check if we're in a horizontal scroll zone
      const horizontalScrollElement = document.querySelector('.enhanced-horizontal-scroll');
      if (!horizontalScrollElement) return;

      const rect = horizontalScrollElement.getBoundingClientRect();
      const isInHorizontalZone = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInHorizontalZone) {
        // Prevent default vertical scroll
        e.preventDefault();

        // Convert horizontal wheel movement to vertical scroll
        // This will trigger the horizontal scroll animation
        const scrollAmount = e.deltaY * sensitivity;
        window.scrollBy(0, scrollAmount);
      }
    };

    // Add wheel event listener with passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isActive, sensitivity]);

  // This component doesn't render anything
  return null;
};

export default MouseWheelHandler;
