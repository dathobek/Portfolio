import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Title" scroll>
              <Navigation>
                 <Link to="/aboutme">About Me</Link>
                 <Link to="/resume">Resume</Link>
                 <Link to="/projects">Projects</Link>
                 <Link to="/contact">Contacts</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
              <Link to="/aboutme">About Me</Link>
                 <Link to="/resume">Resume</Link>
                 <Link to="/projects">Projects</Link>
                 <Link to="/contact">Contacts</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;