import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

export default function Logo({ title = 'Face Recognition Brain', subtitle = 'Detect faces in images', imgSrc }) {
    const src = imgSrc || brain;
    return (
        <div className="logo-wrapper">
            <Tilt className="Logo-Tilt">
                <div className="Logo-Inner" style={{ height: '200px' }}>
                    <img src={src} alt="brain logo" className="logo-image" />
                </div>
            </Tilt>
        </div>
    );
}