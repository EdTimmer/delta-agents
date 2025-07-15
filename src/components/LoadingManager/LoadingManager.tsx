import React from 'react';
import { useProgress } from '@react-three/drei';

// Create a shared context to track all loading instances
const loadingInstancesContext = {
  total: 0,
  loaded: 0
};

interface LoadingManagerProps {
  children: React.ReactNode;
  setIsLoaded: (loaded: boolean) => void;
  setProgress: (progress: number) => void;
}

const LoadingManager: React.FC<LoadingManagerProps> = ({ children, setIsLoaded, setProgress }) => {
  const { progress, loaded } = useProgress();
  const instanceRef = React.useRef<number | null>(null);
  
  React.useEffect(() => {
    // Register this instance when mounted
    if (instanceRef.current === null) {
      loadingInstancesContext.total += 1;
      instanceRef.current = loadingInstancesContext.total;
    }
    
    // Report progress
    setProgress(progress);
    
    if (loaded) {
      // Mark this instance as loaded
      loadingInstancesContext.loaded += 1;
      
      // Check if all registered instances are loaded
      if (loadingInstancesContext.loaded >= loadingInstancesContext.total) {
        // Add a slight delay to ensure everything is rendered properly
        const timer = setTimeout(() => {
          setIsLoaded(true);
          // Reset counters for potential re-renders
          loadingInstancesContext.total = 0;
          loadingInstancesContext.loaded = 0;
        }, 500);
        
        return () => clearTimeout(timer);
      }
    }
  }, [progress, loaded, setIsLoaded, setProgress]);

  return <>{children}</>;
};

export default LoadingManager;
