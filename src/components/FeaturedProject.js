import React from 'react';
import { github } from '../assets/';
import { Col, Row } from 'react-bootstrap';

function FeaturedProject({ isPicLeft, image, title, description, techStack, link }) {
  return (
    <div className={isPicLeft ? 'pic-left' : 'pic-right'}>
      <div className='f-project'>
        <Row>
          <Col
            sm={{ span: 5, order: isPicLeft ? 1 : 2 }}
            className='f-project-poster'
            style={{ backgroundImage: `url(${image})` }}>
          </Col>
          <Col sm={{ span: 7, order: isPicLeft ? 2 : 1 }} className='f-project-text'>
            <p className='f-project-text-subtitle'>Featured Project</p>
            <h4 className='f-project-text-title'>{title}</h4>
            <p className='f-project-text-description'>{description}</p>
            <p className='f-project-text-tech'>{techStack}</p>
            <a href={link} target='_blank' rel="noopener noreferrer">
              <img className='f-project-text-git' src={github} alt="github" />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FeaturedProject;

//ispicleft, image, title, description, techStack, link 