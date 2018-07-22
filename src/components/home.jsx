import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import {Image} from 'react-bootstrap';


export default class Home extends Component {
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
               <Grid className="home-grid">
                   <Cell col={12}>
                     <Image
                       src="./assets/david1.jpeg"
                       alt="image"
                       circle
                       className="my-img" 
                    />
                    <div className="banner-text">
                      <h1>Full Stack Developer</h1>

                      <hr/>

                      <p>HTML5/CSS3 | Bootstrap | JavaScript | React | Angular6 | FireBase | JavaSE | JavaEE | MySql | Oracle 11g</p>

                      <div className="social-link">
                        {/* Linkedin */}
                       <a href="https://www.linkedin.com/in/david-athobe-356968143/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>     
                       </a>

                       {/* GitHub */}
                       <a href="https://github.com/dathobek?tab=repositories" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"/>     
                       </a>

                      </div>
                    </div>

                   
                   </Cell>
               </Grid>
                 
            </div>
        )
    }
}