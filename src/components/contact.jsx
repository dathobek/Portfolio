import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';


export default class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                 <Grid className="contact-grid">
                   <Cell col={4}>
                     <h2>David Athobe</h2>
                     <img 
                       src="./assets/img.jpg"
                       alt="avatar"
                       circle
                       style={{height:'250',width:'85%'}}
                     />
                     <p style={{margin:'auto',width:'75%',paddingTop:'1em'}}>
                     You just practice and find out which way works best for you... <br/>
                     In your world you have total and absolute power... <br/>
                     Let your heart take you to wherever you want to be... <br/>
                     It's amazing what you can do with a little love in your heart...
                     </p>
                   
                   </Cell> 
                   

                   <Cell col={8}>
                      <h2>Contact Me</h2>
                      <hr/>
                    <div className="contact-list">
                    <List>
                      <ListItem>
                      <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                          0703 261 7660
                      </ListItemContent>
                      </ListItem>

                      <ListItem>
                      <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                        Dathobek@yahoo.com
                      </ListItemContent>
                      </ListItem>

                      <ListItem>
                      <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                        <i className="fa fa-home" aria-hidden="true"/>
                          No 4 Makele Close 
                          orazi road 1,Port Harcourt,
                          Rivers State,Nigeria.    
                      </ListItemContent>
                      </ListItem>

                      <ListItem>
                      <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                        <i className="fa fa-github-square" aria-hidden="true"/>
                        github.com/Dathobek
                      </ListItemContent>
                      </ListItem>

                       <ListItem>
                      <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        dathobek
                      </ListItemContent>
                      </ListItem>
                      
                    </List>
                    </div>
                   </Cell>  
                   
                 </Grid>
            </div>
        )
    }
}