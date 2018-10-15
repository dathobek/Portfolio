import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import {Image} from 'react-bootstrap';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


export default class Resume extends Component {
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <Image 
                          src="./assets/davo.jpg"
                          alt="avatar"
                          circle
                          style={{height:'400px',paddingTop:'4em'}} 
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


                      <Education
                         startYear={2000}
                         endYear={2007}
                         schoolName='St Francis Catholic Secondary School (WASSCE)'
                         schoolDes='St. Francis Catholic Secondary School, is located in Idimu, Lagos, Nigeria. It is run by the North-West Africa Province of the Society of Jesus. The school was founded in 1990 by Francis Cusimano. '
                         />

                      <Education
                         startYear={2011}
                         endYear={2015}
                         schoolName='Federal University Of Petroleum Resource Eﬀurun (Second Class Lower.BSc)'
                         schoolDes='The Federal University of Petroleum Resources Effurun (FUPRE) in Delta State, Nigeria was established and approved by the Federal Executive Council meeting of 14 March 2007 and admitted its first set of undergraduates in 2008. '
                         />   
                       
                       <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>

                       <h2>Work Experience</h2>

                       <Experience 
                         startJob={2017}
                         jobName='ELECHI AMADI Polytechnic Rumuola'
                         jobDes='Personal Assistant to Mr Saghanen Thompson(08035504215,08092504207
                         ) a Lecturer in Computer Science department. '
                       />

                       <Experience 
                         startJob={2017}
                         jobName='PWAN HOMES'
                         jobDes='PWAN HOMES LTD is a property marketing and information company located in Lekki, 
                         Lagos. We are into making home ownership dream a reality for all.'
                       
                       />

                       <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                       <h2>Skills</h2>

                      
                       <Skills 
                         skilll='HTML/CSS'
                         prog={82}
                       />
                       <Skills 
                         skilll='Database'
                         prog={70}
                       />
                       <Skills 
                         skilll='Javascript'
                         prog={79}
                       />
                       <Skills 
                         skilll='Angular'
                         prog={75}
                       />
                       <Skills 
                         skilll='React'
                         prog={83}
                       />
                        <Skills 
                         skilll='Java'
                         prog={85}
                       />
                       <Skills 
                         skilll="NodeJs"
                         prog={79}
                       />
                       
                   
                   </Cell>
               </Grid>
            </div>
        )
    }
}