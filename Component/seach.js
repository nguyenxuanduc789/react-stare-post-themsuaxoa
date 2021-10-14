import React, { Component } from 'react';


class Seach extends Component {
    constructor(props) {
        super(props)
          this.state={
           dulieu:'',
           id:'',
           name:'',
           age:''
          }
      }
    timkiem=(even) => {
        // console.log(even.target.value)
        this.setState({
        dulieu:even.target.value    
    })
    this.props.onchecks(this.state.dulieu)
}
add= (event) =>{
    const name=event.target.name
    const value=event.target.value
    this.setState({
        [name]:value
    })
}

    render() { 
        return (
            <div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(even)=>this.timkiem(even)}/>
                <button onClick={() =>this.props.onchecks(this.state.dulieu)}>Timkiem</button>
            </div>
                <div className="input-group mb-3">
                    <input type="text"   name="ten" className="form-control"  name="name"  onChange={(event)=>this.add(event)} />
                </div>
                    <div className="input-group input-group-lg">
                    <input type="text" name="age" className="form-control" name="age"  onChange={(event)=>this.add(event)} />
                <button  onClick={()=>this.props.adds(this.state.id,this.state.name, this.state.age)}>them</button>
                </div>
            </div>
        ); 
    } 
}
export default Seach;
