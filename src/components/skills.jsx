import React,{Component } from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl';


export default class Skills extends Component {
    render(){
        return(
            <Grid>
                <Cell col={12}>
                  <div style={{display:'flex'}}>{this.props.skilll}
                     <ProgressBar style={{margin:'auto',width:'75%'}} progress={this.props.prog} />
                  </div>
                </Cell>
            </Grid>
        )
    }
}