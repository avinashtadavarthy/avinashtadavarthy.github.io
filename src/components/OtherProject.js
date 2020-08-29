import React from 'react';
import { github } from '../assets/';

function OtherProject({ icon, link, title, description }) {
  return (
    <div className='o-project'>
      <img className='o-project-icon' src={icon} alt="icon" />
      <a href={link} target='_blank' rel="noopener noreferrer">
        <img className='o-project-git' src={github} alt="github" />
      </a>
      <h5 className='o-project-title'>{title}</h5>
      <p className='o-project-description'>{description}</p>
    </div>
  );
}

export default OtherProject;

//icon, link, title, description