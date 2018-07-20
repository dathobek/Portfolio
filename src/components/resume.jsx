import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education'


export default class Resume extends Component {
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img 
                          src="./assets/david1.jpg"
                          alt="avatar"
                          style={{height:'200px'}} 
                        />
                    </div>
                     <h2 style={{paddingTop:'2em'}}>David Athobe</h2>
                     <h4 style={{color:'gray'}}>Programmer,Analyst</h4>
                     <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                     <p>Always motivated and Love Challenging tasks and also a team player</p>
                     <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                     <h5>Address</h5>
                     <p>No 4 Makele Close,Orazi Road one,Port Harcourt,Rivers State</p>
                     <h5>Phone</h5>
                     <p>07032617660</p> 
                     <h5>Email</h5>
                     <p>dathobek@yahoo.com</p>
                     <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                   </Cell>

                   <Cell className="resume-right-col" col={8}>
                      <h2>Education</h2>
                      <Education />
                   
                   </Cell>
               </Grid>
            </div>
        )
    }
}