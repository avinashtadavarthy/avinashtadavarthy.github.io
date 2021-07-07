import React from 'react';
import { github, websiteicon } from '../assets';
import { Row } from 'react-bootstrap';

function FeaturedProjectMobile({ isPicLeft, image, title, description, techStack, link }) {
  return (
    <div className="f-project">
      <Row xs={12}>
        <img src={image} className='f-project-poster' alt="projects" />
      </Row>
      <Row className='f-project-text'>
        <h4 className='f-project-text-title'>{title}</h4>
        <p className='f-project-text-description'>{description}</p>
        <div className='f-project-text-tech'>
          <p className='f-project-text-tech-stack'>
            {techStack}
          </p>
          <a href={link} target='_blank' rel="noopener noreferrer">
            {
              title === 'SVAC Foundation Website' ?
                <img className='f-project-text-git' src={websiteicon} alt="github" /> :
                <img className='f-project-text-git' src={github} alt="github" />
            }
          </a>
        </div>
      </Row>
    </div>
  );
}

export default FeaturedProjectMobile;

//ispicleft, image, title, description, techStack, link 