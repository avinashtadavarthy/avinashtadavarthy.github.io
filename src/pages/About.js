import React from 'react';
import { school, avinash } from '../assets'
import { Container, Col, Row } from 'react-bootstrap';


export default class About extends React.Component {

  render() {

    return (
      <Container fluid className='about'>
        <Row>
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1, offset: 1 }} className='about-text'>
            <div className='about-text-container'>
              <h1 className='heading'>About Me</h1>
              <h4 className='subheading'><span>Full-stack developer</span> with a passion for thoughtful UI design.</h4>
              <br></br>
              <p className='normaltext'>I’m a developer who loves to create things that live on phones or the internet, whether that be mobile applications, websites, or anything else. Being a UI/UX fanatic, I enjoy my obsessive attention to visual detail in anything I make. I love working on collaborative projects as that helps me learn more, impart my knowledge and also interact with a diverse group of individuals.
              <br></br>
              <br></br>
              When I’m not coding, you’ll find me dancing, enjoying a snack or catching up on Netflix shows.</p>
              <hr></hr>
              <div className='school-info'>
                <div className='school-info-container'>
                  <img className='school-logo' src={school} alt='school' height='40px' />
                  <h4 className='subheading'>National Institute of Technology, Tiruchirappalli</h4>
                </div>
              </div>
              <hr></hr>
            </div>
          </Col>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 3, order: 1 }} className='about-img'>
            <img className="about-img-container" src={avinash} alt='avinash' />
          </Col>
        </Row>
      </Container>
    )
  }
}