import React, { Component } from 'react';
import Froms from './froms';

class From extends Component {
 
run=()=>(
    this.props.tieude.map((value,idex) =>{
        return (
        <Froms
        nguoi1={(users)=>this.props.nguoi1(idex)}
        dt={(dt)=>this.props.nguoi(value)}
        stt={value.id}
        ten={value.name}
        tuoi={value.age}
        />)
      
    })
)
    render() {
        return (
            <div>
                {this.run()}
                
            </div>
        );
    }
}

export default From;