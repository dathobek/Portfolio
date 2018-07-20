import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell} from 'react-mdl';
import {Card,CardActions,CardMenu,CardText,CardTitle,IconButton,Button} from 'react-mdl';


export default class Projects extends Component {
    constructor(props){
        super(props)
        this.state= {activeTab: 0}
    }
    

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
            <div className="projects">
                   {/* // Project 1 */}
            <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
               <CardTitle style={{color: '#fff',fontWeight:'bold', height: '170px', background: 'url(https://cdn.logojoy.com/wp-content/uploads/2017/07/Java_logo_icon.png) center / cover'}}> Employee details Project</CardTitle>
               <CardText>
                  With mysql database,this application stores,update and delete employee records in an organization
                  java Swing was used to design the application.
                </CardText>
                <CardActions border>
                  <a href="https://github.com/dathobek/Employee_Desktop_Application" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"/>     
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
            </Card>

                   {/* // Project 2 */}
            <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff',fontWeight:'bold', height: '170px', background: 'url(https://cdn.logojoy.com/wp-content/uploads/2017/07/Java_logo_icon.png) center / cover'}}>JavaFx Library Assitant</CardTitle>
              <CardText>
              This is a library management software developed using JavaFX programming language.
              </CardText>
              <CardActions border>
                 <a href="https://github.com/dathobek/JavaFX-Library-Project" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"/>     
                  </a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
            </Card>

                   {/* // Project 3 */}
            <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
               <CardTitle style={{color: '#fff',fontWeight:'bold', height: '170px', background: 'url(https://cdn.logojoy.com/wp-content/uploads/2017/07/Java_logo_icon.png) center / cover'}}>Audio Steganography</CardTitle>
                <CardText>
                A final year project application,this application hides infomation in an audio file,used Least Significant bit(LSB) and .au audio file to 
                achieve that.was built using JAVA technologies.         
                </CardText>
               <CardActions border>
               <Button colored >CLICK ME</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
               </CardMenu>
            </Card>

            
              </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
        <div>
            <div className="projects">
                   {/* // Project 1 */}
              <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
                  <CardTitle style={{color: 'blue',fontWeight:'bold', height: '170px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAR9auWPsZvql-EnS_ytxFKig3E2nnSF5s6oxGxnIt1wVQFsh) center / cover'}}>FireBase_Authentication</CardTitle>
                  <CardText>
                   Integration of Firebase and Angular to allow user login with Facebook,google and Email,
                   Project Still under construction!
                   </CardText>
                  <CardActions border>
                      <a href="https://github.com/dathobek/AuthLogin" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>     
                      </a>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                   </CardMenu>
               </Card>

                   {/* // Project 2 */}
               <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
                  <CardTitle style={{color: 'blue',fontWeight:'bold', height: '170px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAR9auWPsZvql-EnS_ytxFKig3E2nnSF5s6oxGxnIt1wVQFsh) center / cover'}}>Church_Program_Reg</CardTitle>
                  <CardText>
                    This project registers people attending a church program,and always marking of attendance for a 
                   four days period,Firebase was used as backend for this project and it was deploy to Firebase. 
                  </CardText>
                  <CardActions border >
                     <a href="https://github.com/dathobek/vbc" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-github-square" aria-hidden="true"/>     
                     </a>
                     <a href="http://vbc-reg.firebaseapp.com" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-eye" aria-hidden="true"/>     
                     </a>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                   </CardMenu>
                </Card>

                   {/* // Project 3 */}
                <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
                  <CardTitle style={{color: 'blue',fontWeight:'bold', height: '170px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAR9auWPsZvql-EnS_ytxFKig3E2nnSF5s6oxGxnIt1wVQFsh) center / cover'}}></CardTitle>
                  <CardText>
                   
                   </CardText>
                   <CardActions border>
                    <a href="" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-github-square" aria-hidden="true"/>     
                    </a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                  </CardMenu>
                </Card>
              </div>
              <div className="projects">
                  
              </div>
                    
        </div>

               
             
            )
        }
        else if(this.state.activeTab === 2){
            return(
                // For react projects
                <div>
                    <div className="projects">
                   {/* // Project 1 */}
              <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
                  <CardTitle style={{color: 'blue',fontWeight:'bold', height: '170px', background: 'url(https://r2m.se/app/uploads/2017/09/logo_og-1.png) center / cover'}}>HELLO-BOOKS</CardTitle>
                  <CardText>
                  Hello-Books is a simple application that helps manage a library and its processes like stocking, tracking and renting books. 
                  With this application users are able to find and rent books
                   </CardText>
                  <CardActions border>
                      <a href="https://github.com/dathobek/HelloBooks" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>     
                      </a>
                      <a href="http://hellobooks-foodman.herokuapp.com" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-eye" aria-hidden="true"/>     
                     </a>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                   </CardMenu>
               </Card>

                   {/* // Project 2 */}
               <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
                  <CardTitle style={{color: 'blue',fontWeight:'bold', height: '170px', background: 'url(https://r2m.se/app/uploads/2017/09/logo_og-1.png) center / cover'}}>Family-Biography</CardTitle>
                  <CardText>
                    A simple react application showing the members of Athobe family and some spoken words!
                  </CardText>
                  <CardActions border >
                     <a href="https://github.com/dathobek/My-family-bio" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-github-square" aria-hidden="true"/>     
                     </a>
                     
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                   </CardMenu>
                </Card>

                   {/* // Project 3 */}
                <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
                  <CardTitle style={{color: 'blue',fontWeight:'bold', height: '170px', background: 'url(https://r2m.se/app/uploads/2017/09/logo_og-1.png) center / cover'}}></CardTitle>
                  <CardText>
                          
                   </CardText>
                   <CardActions border>
                    <a href="" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-github-square" aria-hidden="true"/>     
                    </a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                  </CardMenu>
                </Card>
              </div> 
                    

                </div>
            )
        }
    }

    render(){
        return(
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JAVA</Tab>
                    <Tab>ANGULARjs</Tab>
                    <Tab>REACT</Tab>
                </Tabs>
                <section className="projects-grid">
                  <Grid className="project-grid">
                    <Cell col={12}>
                       <div> {this.toggleCategories()}</div>
                    </Cell>
                  </Grid>  
                </section>
            </div>    
        )
    }
}