import React from 'react';
import { logo, arrow } from '../assets'
import { Container, Row, Col } from 'react-bootstrap';


export default class LandingPage extends React.Component {

  render() {

    return (
      <Container fluid className='landing'>
        <Row>
          <Col lg={1} />
          <Col lg={10}>
            <div className='title'>
              <h1 className='heading'>I am</h1>
              <img className='title-logo' src={logo} alt='logo' />
              <h1 className='heading'>a Software Developer based in India</h1>
              <div className="title-social">
                <a href={'https://github.com/avinashtadavarthy'} target='_blank' rel='noopener noreferrer'>github</a>
                <a href={'https://www.linkedin.com/in/avinash-tadavarthy/'} target='_blank' rel='noopener noreferrer'>linkedin</a>
                <a href={'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=avinash.tadavarthy@gmail.com'} target='_blank' rel='noopener noreferrer'>email</a>
              </div>
            </div>
          </Col>
          <Col lg={1} />
        </Row>
        <Row className='arrow-down'>
          <div />
          <img src={arrow} alt='arrow' />
        </Row>
      </Container>
    )
  }
}