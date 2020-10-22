import React from 'react';
import { resume, logowhite, resumePdf } from '../assets'
import { Container, Col, Row } from 'react-bootstrap';


export default class Contact extends React.Component {

  render() {

    return (
      <Container fluid className='contact'>
        <Row>
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1, offset: 1 }} className='contact-text'>
            <div className='contact-text-container'>
              <h1 className='heading'>Contact</h1>
              <h4 className='subheading'>Get in touch! My inbox is always open.</h4>
              <br></br>
              <p className='normaltext'>
                If you like my work and have some cool project to work on, just send me an email or contact me through the social sites listed below.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <div className="title-social">
              <a href={'https://github.com/avinashtadavarthy'} target='_blank' rel='noopener noreferrer'>github</a>
              <a href={'https://www.linkedin.com/in/avinash-tadavarthy/'} target='_blank' rel='noopener noreferrer'>linkedin</a>
              <a href={'mailto:avinash.tadavarthy@gmail.com'} target='_blank' rel='noopener noreferrer'>email</a>
              <a href={'https://www.youtube.com/channel/UC5YXkIS7e0COTrLz19leHEw'} target='_blank' rel='noopener noreferrer'>youtube</a>
              <a href={'https://www.instagram.com/avinash.tadavarthy/'} target='_blank' rel='noopener noreferrer'>instagram</a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <div className="resume-btn">
              <a href={resumePdf} target='_blank' rel='noopener noreferrer'>
                <div className="resume-btn-container">
                  <img src={resume} alt="resume" />
                  <p>resume</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="footer">
          <Col xs={12}>
            <div className="footer-dev">
              <p>Designed & Built by</p>
              <img src={logowhite} alt="" />
              <p>in India</p>
            </div>
            <p className="footer-year">
              2020
            </p>
            <p className="footer-desc">
              This website was built with great tools like Figma, Illustrator, VS Code & Github. Fonts used are Arvo, Raleway and Open Sans. All fonts are served up via Google Fonts.
              <br />
              The icons are made by Freepik from <a href="https://www.flaticon.com">www.flaticon.com</a>.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}
