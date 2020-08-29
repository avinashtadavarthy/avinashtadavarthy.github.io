import React from 'react';
import './styles/main.scss';

//imported components
import Landing from './pages/Landing';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Dance from './pages/Dance';
import Contact from './pages/Contact';

import UnderDevelopment from './pages/UnderDevelopment';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="main-app">
          <Landing />
          <About />
          <Skills />
          <Work />
          <Projects />
          <Dance />
          <Contact />
        </div>
        <div className="under-development">
          <UnderDevelopment />
        </div>
      </div>
    )
  };
}
