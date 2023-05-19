import React from 'react';
import containerCSS from '../css/container.module.css';
import aboutCSS from './css/about.module.css';

const About = () => {
  return (
    <div className={containerCSS.carRentalPageContainer}>
      <div className={aboutCSS.aboutContainer}>
        <h2>About</h2>
      </div>
    </div>

  )
}

export default About