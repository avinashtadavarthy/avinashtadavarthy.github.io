import React from 'react';

function SkillElement({ icon, text }) {
  return (
    <div className='skill-element'>
      <img className='skill-element-icon' src={icon} alt="icon"/>
      <p className='skill-element-text'>{text}</p>
    </div>
  );
}

export default SkillElement;