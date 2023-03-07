import React from 'react';
import './About.css';
import picture from '../../assets/logo/le-bg.png';

const About = () => {
    return (
        <div>
            <h1>A propos de l'appli :</h1>
            <img src={picture} alt='Super !' className='img'/>
            <div className="m-1 author">
                <span className='key'>Auteur :</span>
                <span className='value'>Anthony di Persio</span>
            </div>
        </div>
    );
};

export default About;