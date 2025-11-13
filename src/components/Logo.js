import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

export default function Logo({ title = 'Face Recognition Brain', subtitle = 'Detect faces in images', imgSrc }) {
    return (
        <div className="logo-wrapper">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={false}>
                <div className="logo">
                    <div className="logo__image">
                        {imgSrc ? (
                            <img src={imgSrc} alt="logo" />
                        ) : (
                            <svg viewBox="0 0 100 100" className="logo__svg" aria-hidden>
                                <circle cx="50" cy="50" r="48" fill="#ffffff33" />
                                <text x="50%" y="56%" textAnchor="middle" fontSize="48" fill="#fff" fontFamily="sans-serif">👀</text>
                            </svg>
                        )}
                    </div>
                   
                </div>
            </Tilt>
        </div>
    );
}