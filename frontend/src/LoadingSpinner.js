import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="LoadingSpinner">
        <h1 className="spinning-text" role="img" aria-label="hourglass">⌛</h1>
        Fetching results...
    </div>
  );
};

export default LoadingSpinner;
