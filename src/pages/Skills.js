import React from 'react';
import { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23 } from '../assets'
import { Container, Col, Row } from 'react-bootstrap';
import SkillElement from '../components/SkillElement';
import SkillChart from '../components/SkillChart';


export default class Skills extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      frontEnd: [
        { icon: s1, text: 'Android' },
        { icon: s2, text: 'React' },
        { icon: s3, text: 'Flutter' },
        { icon: s4, text: 'HTML5' },
        { icon: s5, text: 'CSS3' },
        { icon: s6, text: 'JavaScript' },
        { icon: s7, text: 'BootStrap' }
      ],
      backEnd: [
        { icon: s8, text: 'Node JS' },
        { icon: s9, text: 'MySQL' },
        { icon: s10, text: 'Mongo DB' },
        { icon: s11, text: 'Flask' }
      ],
      languages: [
        { icon: s12, text: 'C++' },
        { icon: s13, text: 'Java' },
        { icon: s14, text: 'Python' }
      ],
      tools: [
        { icon: s15, text: 'VS Code' },
        { icon: s16, text: 'Sublime Text' },
        { icon: s17, text: 'Ubuntu' },
        { icon: s18, text: 'Git' },
        { icon: s19, text: 'Trello' },
        { icon: s20, text: 'Photoshop' },
        { icon: s21, text: 'Illustrator' },
        { icon: s22, text: 'Figma' },
        { icon: s23, text: 'Postman' }
      ]
    }
  }

  render() {

    // render skill icons
    const renderRow = (arr) => {
      let res = []
      arr.forEach(item => {
        res.push(<SkillElement icon={item.icon} text={item.text} />);
      });

      return res;
    }

    return (
      <Container fluid className='skills'>
        <Row>
          <Col xs={12} md={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
            <h1 className='heading'>My Skills</h1>
            <h4 className='subheading'>Cross-platform developer specialised in mobile and web front-end.</h4>
          </Col>
        </Row>
        <div className='skills-list'>
          <Row className='skill-row'>
            <Col xs={12} md={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
              <div className='skill-row-wrap'>
                {renderRow(this.state.frontEnd)}
              </div>
            </Col>
          </Row>
          <Row className='skill-row'>
            <Col xs={12} md={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
              <div className='skill-row-wrap'>
                {renderRow(this.state.backEnd)}
              </div>
            </Col>
          </Row>
          <Row className='skill-row'>
            <Col xs={12} md={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
              <div className='skill-row-wrap'>
                {renderRow(this.state.languages)}
              </div>
            </Col>
          </Row>
          <Row className='skill-row'>
            <Col xs={12} md={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
              <div className='skill-row-wrap'>
                {renderRow(this.state.tools)}
              </div>
            </Col>
          </Row>
          <Row className='skill-chart-container'>
            <SkillChart />
          </Row>
        </div>
      </Container>
    )
  }
}