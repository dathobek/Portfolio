import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl';

export default class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                  <p>{this.props.startJob}-Present</p>
                </Cell>
                <Cell col={8}>
                   <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                   <p>{this.props.jobDes}</p>
                </Cell>   
            </Grid>
        )
    }
}