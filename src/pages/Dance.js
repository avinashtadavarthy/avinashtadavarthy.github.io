import React from 'react';
import { dance1, dance2 } from '../assets'
import { Container, Col, Row } from 'react-bootstrap';


export default class Dance extends React.Component {

  render() {

    return (
      <Container fluid className='dance'>
        <Row>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1, offset: 1 }} className='dance-text'>
            <div className='dance-text-container'>
              <h1 className='heading'>I love dancing too!</h1>
              <h4 className='subheading'>Check out my Youtube Channel</h4>
              <br></br>
              <p className='normaltext'>
                Having an interest in both western and contemporary dance forms from a young age, I used to be an active participant in all annual dance events and competitions in my school and university.
                <br /><br />
                Check out my youtube channel <a href='https://www.youtube.com/channel/UC5YXkIS7e0COTrLz19leHEw' target='_blank' rel="noopener noreferrer">here</a>.
              </p>
            </div>
          </Col>
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 4, order: 1 }} className='dance-video'>
            <div className='dance-video-container'>
              <a href='https://www.youtube.com/watch?v=I7S6hDV5IqI' target='_blank' rel="noopener noreferrer">
                <img className='dance-video-container-img' src={dance1} alt="dance1" />
              </a>
              <a href='https://www.youtube.com/watch?v=MFW6MK0fxXc' target='_blank' rel="noopener noreferrer">
                <img className='dance-video-container-img' src={dance2} alt="dance2" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
