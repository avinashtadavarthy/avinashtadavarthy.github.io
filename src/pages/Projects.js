import React from 'react';
import { sampleimg, bingo, compress, robot, nodeCode, name, ticket } from '../assets';
import { Container, Col, Row } from 'react-bootstrap';
import FeaturedProject from '../components/FeaturedProject';
import OtherProject from '../components/OtherProject';


export default class Projects extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      featuredProjects: [
        {
          image: sampleimg,
          title: 'QuickSort Mobile',
          description: 'Mobile app built in Flutter for QuickSort, a student-run initiative from IGDTUW, Delhi to educate their students about the recruitment process for placements and to help in preparation via mock interviews and tests.',
          techStack: 'Flutter / Git',
          link: 'https://github.com/avinashtadavarthy/Quick-Sort-Mobile'
        },
        {
          image: sampleimg,
          title: 'iOS Themed Calculator',
          description: 'Basic Calculator app built in React Native to handle simple functionalities using JavaScript’s eval() function. It is inspired by the Calculator app on iOS and supports switching between light and dark modes.',
          techStack: 'React Native / Git',
          link: 'https://github.com/avinashtadavarthy/React-Native-Calculator'
        },
        {
          image: sampleimg,
          title: 'Python Color Identifier',
          description: 'OpenCV based Command Line Tool written in Python to help in identifying colours in any given image based on pre-defined HSV color ranges. Generates a colour map by mapping all the pixels to their nearest neighbour in its range.',
          techStack: 'Python / OpenCV',
          link: 'https://github.com/avinashtadavarthy/Python-Color-Identifier'
        }
      ],
      otherProjects: [
        {
          icon: bingo,
          link: 'https://github.com/avinashtadavarthy/Python-Bingo-Generator',
          title: 'Bingo Card Generator',
          description: 'A command-line tool written in Python to generate unlimited printable bingo tickets as images. It is based on the Pillow (PIL) Imaging Library.'
        },
        {
          icon: compress,
          link: 'https://github.com/avinashtadavarthy/Python-Image-Compress',
          title: 'Image Compressor',
          description: 'A command-line tool written in Python to resize and compress a folder full of JPG and PNG images. It uses functionality from the OpenCV library.'
        },
        {
          icon: robot,
          link: 'https://github.com/avinashtadavarthy/Chore-Bot-Game',
          title: 'Chore Bot Game',
          description: <>A simple luck-based game written in HTML. It was done as a fun project while learning web development via an online course on <span>codecademy.com</span>.</>
        },
        {
          icon: name,
          link: 'https://github.com/avinashtadavarthy/Startup-Namer',
          title: 'Startup Namer',
          description: 'A Flutter app that can randomly generate funny, innovative names for startups. It was done as a fun project while learning Flutter.'
        },
        {
          icon: nodeCode,
          link: 'https://github.com/avinashtadavarthy/Nodejs-Server-Template',
          title: 'NodeJS Boilerplate',
          description: 'A boilerplate for a NodeJS server which can return values on simple get or post commands and make changes to a MongoDB instance.'
        },
        {
          icon: ticket,
          link: 'https://github.com/avinashtadavarthy/BookTheShowv2',
          title: 'Book The Show',
          description: 'Prototype of a ticket booking application inspired by the Book My Show app. It is coded in native Android and uses no libraries. My first app!'
        }
      ]
    }
  }

  render() {

    // render featured projects
    const renderFeatured = (arr) => {
      let res = []
      let i = 0

      arr.forEach(item => {
        res.push(<FeaturedProject
          isPicLeft={i % 2 === 0 ? true : false}
          image={item.image}
          title={item.title}
          description={item.description}
          techStack={item.techStack}
          link={item.link}
        />);
        i++;
      });

      return res;
    }

    // render other projects
    const renderOther = (arr) => {
      let res = []

      arr.forEach(item => {
        res.push(<OtherProject
          icon={item.icon}
          link={item.link}
          title={item.title}
          description={item.description}
        />);
      });

      return res;
    }

    return (
      <Container fluid className='projects'>
        <Row className='projects-text'>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <h1 className='heading'>Personal Projects</h1>
            <h4 className='subheading'>Some things I’ve built on the side using varied tech stacks.</h4>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            {renderFeatured(this.state.featuredProjects)}
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <h4 className='subtopic'>Other Noteworthy Projects</h4>
            <div className='other-projects'>
              {renderOther(this.state.otherProjects)}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}