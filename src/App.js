import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="Title" scroll>
              <Navigation>
                 <Link to="/">Link</Link>
                 <Link to="/">Link</Link>
                 <Link to="/">Link</Link>
                 <Link to="/">Link</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                 <Link to="/">Link</Link>
                 <Link to="/">Link</Link>
                 <Link to="/">Link</Link>
                 <Link to="/">Link</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
