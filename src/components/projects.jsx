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
            <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
               <CardTitle style={{color: '#fff',fontWeight:'bold', height: '170px', background: 'url(https://cdn.logojoy.com/wp-content/uploads/2017/07/Java_logo_icon.png) center / cover'}}> Employee details Project</CardTitle>
               <CardText>
                  With mysql database,this application stores,update and delete employee records in an organization
                  java Swing was used to design the application.
                </CardText>
                <CardActions border>
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"/>     
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
            </Card>

                   {/* // Project 2 */}
            <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff',fontWeight:'bold', height: '170px', background: 'url(https://cdn.logojoy.com/wp-content/uploads/2017/07/Java_logo_icon.png) center / cover'}}> Employee details Project</CardTitle>
              <CardText>
                 With mysql database,this application stores,update and delete employee records in an organization
                 java Swing was used to design the application.
              </CardText>
              <CardActions border>
              <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
              </CardMenu>
            </Card>

                   {/* // Project 3 */}
            <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
               <CardTitle style={{color: '#fff',fontWeight:'bold', height: '170px', background: 'url(https://cdn.logojoy.com/wp-content/uploads/2017/07/Java_logo_icon.png) center / cover'}}> Employee details Project</CardTitle>
                <CardText>
                 With mysql database,this application stores,update and delete employee records in an organization
                 java Swing was used to design the application.
                </CardText>
               <CardActions border>
               <Button colored>Github</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
               <IconButton name="share" />
               </CardMenu>
            </Card>

            
              </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Angular Project</h1></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is React Project</h1></div>
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