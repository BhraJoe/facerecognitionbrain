import React from 'react';
import './ImageLinkForm.css';


export default function ImageLinkForm({ title = 'Face Recognition Brain', subtitle = 'Detect faces in images', imgSrc }) {
   
    return (
        <div className=''>
            <p className="f3">
            {'This Magic Brain will detect faces in your pictures. Git it try'}
            </p>

            <div className='center'>
                <div className='center pa4 br3 shadow-5'>
                     <input className='f4 pa2 w-70 center' type='tex'/>
                    <button className='w-30 grow link ph3 pv2 white bg-light-purple'>Detect</button>
                </div>
            </div>
               
           
        </div>
    );
}