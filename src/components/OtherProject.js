import React from 'react';
import { github } from '../assets/';

function OtherProject({ icon, link, title, description }) {
  return (
    <div className='o-project'>
      <div className='o-project-top'>
        <img className='o-project-top-icon' src={icon} alt="icon" />
        <a href={link} target='_blank' rel="noopener noreferrer">
          <img className='o-project-top-git' src={github} alt="github" />
        </a>
      </div>
      <h5 className='o-project-title'>{title}</h5>
      <p className='o-project-description'>{description}</p>
    </div>
  );
}

export default OtherProject;

//icon, link, title, description