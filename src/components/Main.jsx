import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from './home';
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route path="/aboutme" component= {AboutMe}/>
      <Route path="/contact" component= {Contact}/>
      <Route path="/projects" component= {Projects}/>
      <Route path="/resume" component= {Resume}/>

    </Switch>
)

export default Main;