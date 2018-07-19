import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';


export default class Home extends Component {
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
               <Grid className="home-grid">
                   <Cell col={12}>
                     <img 
                       src="./assets/david1.jpg"
                       alt="image"
                       className="my-img" 
                    />
                    <div className="banner-text">
                      <h1>Full Stack Developer</h1>

                      <hr/>

                      <p>HTML5/CSS3 | Bootstrap | JavaScript | React | Angular6 | JavaSE | MySql | Oracle 11g</p>
                    </div>

                   
                   </Cell>
               </Grid>
                 
            </div>
        )
    }
}