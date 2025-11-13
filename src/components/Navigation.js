import React from 'react';
import './Navigation.css';

export default function Navigation({ onRouteChange }) {
  return (
    <nav className="navigation">
      <p
        className="nav-link"
        onClick={() => onRouteChange && onRouteChange('signin')}
      >
        Sign Out
      </p>
    
    </nav>
  );
}
