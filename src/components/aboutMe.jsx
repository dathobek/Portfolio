import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import {Image} from 'react-bootstrap';


export default class AbouTMe extends Component {
    render(){
        return(
            <div>
                <Grid className="aboutMe">
                    <Cell style={{border:'0.1em solid black'}} col={4}>
                       <Image 
                         src="./assets/post.jpg"
                         alt="avatar"
                         circle
                         style={{height:'350px',paddingTop:'3em',paddingLeft:'2em'}} 
                       />
                       <h4>INTERESTS</h4>
                       <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                       <div>
                       <List>
                           <ListItem>
                           <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                            -- Playing Chess! e4 e5,Nf3 d6
                           </ListItemContent>
                           </ListItem>

                           <ListItem>
                           <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                            -- Learning new things( Reading )
                           </ListItemContent>
                           </ListItem>

                           <ListItem>
                           <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                            -- Coding
                           </ListItemContent>
                           </ListItem>

                       </List>
                       </div>
                       
                    </Cell>
                    <Cell col={4}>
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
                    <Cell style={{border:'0.01em solid black'}} col={4}>
                    <h3 style={{paddingLeft:'2em'}}> Some Quotes I Love</h3>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>A computer once beat me at chess, but it was no match for me at kick boxing.</p>

                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>"Chess is life"....</p>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>“You always have a choice.”....</p>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>“I don’t have dreams, I have goals.”....</p>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>"Talk is cheap,Show me the code!"....</p>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>"One of the best programming skills you can have is knowing when to walk away for awhile."....</p>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>"Loyalty is a two-way street,If am asking for it from you,then you are getting it from me"....</p>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>....</p>
                    <p style={{fontSize:'15px',fontFamily:'oxygen',color:'blue'}}>....</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}