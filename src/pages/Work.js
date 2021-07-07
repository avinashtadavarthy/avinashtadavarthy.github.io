import React from 'react';
import { bhelliomTech, fidelityInv, matchEzy, needl, needlShirt, needlWireframes, vasavi, zoho } from '../assets/'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';


export default class Work extends React.Component {

  render() {

    return (
      <Container fluid className='work'>
        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <h1 className='heading'>Work Experience</h1>
            <h4 className='subheading'>Worked in varied environments and on a diverse set of projects.</h4>
          </Col>
        </Row>

        <Row style={{ paddingTop: '3rem' }}>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <Tab.Container defaultActiveKey="fidelity">
              <Row>
                <Col sm={2}>
                  <Nav variant="pills" className="flex-sm-column flex-nowrap">
                    <Nav.Item>
                      <Nav.Link eventKey="fidelity">Fidelity Investments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="vasavi">Vasavi Club</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="needl">needl</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="zoho">Zoho Corp</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="planezy">PLANezy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="bhelliom">Bhelliom Tech</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <Tab.Content>
                    <Tab.Pane eventKey="fidelity">
                      <Row>
                        <Col sm={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }} className='workex'>
                          <h4 className='workex-title'>Software Developer <span>@ Fidelity Investments</span></h4>
                          <p className='workex-dates'>Aug 2020 - Present</p>
                          <hr />
                          <p className='workex-description'>
                            Currently working as a full-time software engineer at <span><a href='https://www.fidelity.com/' target='_blank' rel="noopener noreferrer">Fidelity Investments</a></span>.
                            <br /><br /> Working extensively with Spring, Kafka and AWS to build a cloud-based Mutual Fund Processing system for Fidelity.
                            <br /><br /> Parallelly working on cross-organization stretch assignments to create products catering to research analysts using Angular and Flask.
                          </p>
                        </Col>
                        <Col sm={{ span: 5, order: 2 }} xs={{ span: 12, order: 1 }} className='workex-image'>
                          <img src={fidelityInv} alt="fidelity" />
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="vasavi">
                      <Row>
                        <Col sm={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }} className='workex'>
                          <h4 className='workex-title'>Website Developer <span>@ Vasavi Club Elite Chennai</span></h4>
                          <p className='workex-dates'>May 2020 - Aug 2020</p>
                          <hr />
                          <p className='workex-description'>
                            Took up my first project as a web developer to architect a formal website for <span><a href='https://www.vasaviclubelitechennai.in/' target='_blank' rel="noopener noreferrer">Vasavi Club 2* Elite Chennai</a></span>.
                            <br /><br /> Worked with Bootstrap for optimising the website for mobile browsers and hosted it on Netlify.
                            <br /><br /> <span><a href='https://www.vasaviclubs.org/' target='_blank' rel="noopener noreferrer">Vasavi Clubs International</a></span> is a community based gathering of a subset of the Telugu people across the globe. One of its successful subordinate club known as Vasavi Club 2* Elite is operating in Chennai.
                          </p>
                        </Col>
                        <Col sm={{ span: 5, order: 2 }} xs={{ span: 12, order: 1 }} className='workex-image'>
                          <img src={vasavi} alt="vasavi" />
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="needl">
                      <Row>
                        <Col sm={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }} className='workex'>
                          <h4 className='workex-title'>Product Development Lead <span>@ needl</span></h4>
                          <p className='workex-dates'>Dec 2019 - Mar 2020</p>
                          <hr />
                          <p className='workex-description'>
                            Being a part of the founding team of <span><a href='https://www.facebook.com/enactus.nittrichy/' target='_blank' rel="noopener noreferrer">Enactus NIT Trichy</a></span>, I worked on needl, a social entrepreneurship project based on the tailoring industry, where consumers can order custom fit shirts via an online mobile platform.
                            <br /><br />
                            Worked closely with the designers, developers and the management team to develop, document and manage an ecosystem of four mobile applications using Flutter.
                            <br /><br />
                            Catered to multiple stakeholders involved in the chain such as tailors, consumers, fabric manufacturers and delivery associates by establishing an effective database architecture and a back-end to handle the operations of the service.
                          </p>
                        </Col>
                        <Col sm={{ span: 5, order: 2 }} xs={{ span: 12, order: 1 }} className='workex-image'>
                          <img src={needl} alt="needl" />
                          <div className='needl-imgs'>
                            <img src={needlWireframes} alt="needl-wireframes" style={{ width: '50%', margin: '5%', objectFit: 'contain' }} />
                            <img src={needlShirt} alt="needl-shirt" style={{ width: '40%', margin: '5%' }} />
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="zoho">
                      <Row>
                        <Col sm={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }} className='workex'>
                          <h4 className='workex-title'>Software Dev Intern <span>@ Zoho Corp</span></h4>
                          <p className='workex-dates'>May 2019 - Jul 2019</p>
                          <hr />
                          <p className='workex-description'>
                            Engineered a data visualisation application for the 'Web Master' team, optimised for Android and iOS, for their in-house Analytics platform known as Zoho Payments.
                            <br /><br />
                            Retrieved raw, unformatted data from their servers, processed it, categorised it and displayed information in the form of interactive charts using the JS based React Native framework.
                            <br /><br />
                            Developed a layer over the <span><a href='https://github.com/JesperLekland/react-native-svg-charts' target='_blank' rel="noopener noreferrer">react-native-svg-charts</a></span> library to stack and overlay multiple types of SVG charts at once and made them interactive with customizable tooltips. Additionally provided features such as dynamic application of filters on charts and favouriting of frequently viewed charts.
                          </p>
                        </Col>
                        <Col sm={{ span: 5, order: 2 }} xs={{ span: 12, order: 1 }} className='workex-image'>
                          <img src={zoho} alt="zoho" />
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="planezy">
                      <Row>
                        <Col sm={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }} className='workex'>
                          <h4 className='workex-title'>Full-Stack Dev Intern <span>@ PLANezy</span></h4>
                          <p className='workex-dates'>May 2018 - Jul 2018</p>
                          <hr />
                          <p className='workex-description'>
                            Worked from the ground up on their new venture, MatchEzy, which serves to bridge the gap between traditional Indian matchmaking and modern dating.
                            <br /><br />
                            Collaborated with a small team of student designers and developers to spearhead the development of the application’s frontend and backend using native Android, NodeJS and MongoDB.
                            <br /><br />
                            Interfaced with UI / UX designers and other developers to ensure thoughtful and coherent user experiences across the app. Check it out over <span><a href='https://play.google.com/store/apps/details?id=com.einheit.matchezy' target='_blank' rel="noopener noreferrer">here</a></span>.
                          </p>
                        </Col>
                        <Col sm={{ span: 5, order: 2 }} xs={{ span: 12, order: 1 }} className='workex-image'>
                          <img src={matchEzy} alt="matchEzy" />
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="bhelliom">
                      <Row>
                        <Col sm={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }} className='workex'>
                          <h4 className='workex-title'>Android Dev Intern <span>@ Bhelliom Tech</span></h4>
                          <p className='workex-dates'>Aug 2017 - Jan 2018</p>
                          <hr />
                          <p className='workex-description'>
                            Contributed extensively to multiple facets of their introductory product known as 24 Crafts. Architected the initial designs for the prototype and implemented them in an Android app.
                            <br /><br />
                            Made a functional application where film industry recruiters can connect with interested candidates, post auditions or recruitment requests and where aspirants can post about their work profile and publicize their work on a suitable platform.
                            <br /><br />
                            Being my first practical experience, I spent a lot of time learning about the basics of full-stack development and gaining insights about its various aspects over the course of a semester.
                          </p>
                        </Col>
                        <Col sm={{ span: 5, order: 2 }} xs={{ span: 12, order: 1 }} className='workex-image'>
                          <img src={bhelliomTech} alt="bhelliom-tech" />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>

      </Container>
    )
  }
}