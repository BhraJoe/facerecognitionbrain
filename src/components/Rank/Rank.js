import React from 'react';
// import './Rank.css';

export default function Rank({ onRouteChange }) {
  return (
    <div>
        <div className='white f3'>
            {'Joe, your current rank is...'}
        </div>
        <div className='white f1'>
            {'#5'}
        </div>
    </div>
  );
}