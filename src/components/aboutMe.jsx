import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import {Image} from 'react-bootstrap';


export default class AbouTMe extends Component {
    render(){
        return(
            <div>
                <Grid className="aboutMe">
                    <Cell style={{border:'0.1em solid blue'}} col={4}>
                       <Image 
                         src="./assets/post.jpg"
                         alt="avatar"
                         circle
                         style={{height:'350px',paddingTop:'3em',paddingLeft:'2em'}} 
                       />
                       <h2>INTERESTS</h2>
                       <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                       <div>
                       <List>
                           <ListItem>
                           <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                            <i className="fa fa-birthday-cake" aria-hidden="true"/>
                             Offensive Chess Player
                           </ListItemContent>
                           </ListItem>

                       </List>
                       </div>
                       
                    </Cell>
                    <Cell style={{border:'0.1em solid blue'}} col={4}>
                      <h3 style={{paddingLeft:'2em'}}> Appearance On Earth</h3>
                      <div>
                      <List>
                           <ListItem>
                           <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                            <i className="fa fa-birthday-cake" aria-hidden="true"/>
                             23rd May 1990
                           </ListItemContent>
                           </ListItem>

                            <ListItem>
                           <ListItemContent>
                            <p style={{fontSize:'30px',fontFamily:'Anton'}}>Nationality -----> Nigerian</p>
                           </ListItemContent>
                           </ListItem>

                            <ListItem>
                           <ListItemContent>
                            <p style={{fontSize:'30px',fontFamily:'Anton'}}>Marital Status -----> Single</p>
                           </ListItemContent>
                           </ListItem>

                            <ListItem>
                           <ListItemContent>
                            <p style={{fontSize:'30px',fontFamily:'Anton'}}>State Of Origin -----> Delta State</p>
                           </ListItemContent>
                           </ListItem>

                            <ListItem>
                           <ListItemContent>
                            <p style={{fontSize:'30px',fontFamily:'Anton'}}>L.G.A -----> Isoko South(Olomoro)</p>
                           </ListItemContent>
                           </ListItem>

                       </List>
                      </div>
                    </Cell>
                    <Cell style={{border:'0.1em solid blue'}} col={4}>
                       <Image 
                         src="./assets/post.jpg"
                         alt="avatar"
                         circle
                         style={{height:'350px',paddingTop:'3em',paddingLeft:'2em'}} 
                       />
                    </Cell>
                </Grid>
            </div>
        )
    }
}