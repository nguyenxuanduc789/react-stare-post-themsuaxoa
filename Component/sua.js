import React, { Component } from 'react';


class Sua extends Component {
  constructor(props) {
    super(props)
      this.state={
      name:this.props.hienthi.name,
      age:this.props.hienthi.age
      }
     
  }

hienthi=()=>{
 if (this.props.show===true)
 {
    return (
        <div>
            <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">NAME</span>
            <input type="text" name="name"  onChange={(event)=>this.ischange(event)} defaultValue={this.props.hienthi.name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">AGE</span>
            <input type="text" name="age" onChange={(event)=>this.ischange(event)} defaultValue={this.props.hienthi.age} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
          </div>
     )
 }
}
ischange=(event)=>{
  const name=event.target.name
  const value=event.target.value
  this.setState({
    [name]:value
  })
  
}
    render() {
 
        return (
            <div>
          {this.hienthi()}
          {/* <button type="button"  onClick={(id,name,age)=>this.props.sua(this.state.name,this.state.age)} class="btn btn-primary">luu</button> */}
          <button type="button"  onClick={()=>this.props.thaydois()} class="btn btn-primary">mo</button>
          </div>
        );
    }
}

export default Sua;