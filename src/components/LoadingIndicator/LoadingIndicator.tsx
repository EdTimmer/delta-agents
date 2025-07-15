import React from 'react';
import { LoadingOverlay, Spinner, LoadingText } from './LoadingIndicator.styles';

interface LoadingIndicatorProps {
  progress?: number;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ progress }) => {
  return (
    <LoadingOverlay>
      <Spinner />
      <LoadingText>
        {progress !== undefined ? `Loading assets... ${Math.round(progress)}%` : 'Loading assets...'}
      </LoadingText>
    </LoadingOverlay>
  );
};

export default LoadingIndicator;
