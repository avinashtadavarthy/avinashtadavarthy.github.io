import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function SkillElement({ icon, text }) {

  const renderTooltip = (text) => (
    <Tooltip>{text}</Tooltip>
  );

  return (
    <div className='skill-element'>
      <OverlayTrigger placement="top" overlay={renderTooltip(text)}>
        <img className='skill-element-icon' src={icon} alt="icon" />
      </OverlayTrigger>
    </div>
  );
}

export default SkillElement;