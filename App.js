import React, { Component } from 'react';
import Seach from './Component/seach';
import From from './Component/from';
import Data from './Component/data.json';
import Sua from './Component/sua';
class App extends Component {
  constructor(props) {
    super(props)
      this.state={
        data: Data,
        dulieu1:'',
       trangthai: true,
       dulieu: ''
      }
  }
 oncheck=(dl)=>{
   this.setState({
     dulieu1:dl
   })
 }
 thaydoi=()=>{
  this.setState({
    trangthai: !this.state.trangthai
  })
 } 
  themmoi=(id,name,age)=>{
      console.log("nguyen xuan duc hello !")
                    let item=[]
                    item.id=id
                    item.name=name
                    item.age=age
                    var items=this.state.data
                    items.push(item)
                    console.log(items)
                        this.setState({
                          data: items
                        })             
}
user=(dt)=>{
  console.log(dt)
  this.setState({
    dulieu: dt
  })
}
sua1=(id,name,age)=>{
  let item1=[]
  item1.id=id
  item1.name=name
  item1.age=age
  var item2=this.state.data
  item2.push(item1)
  console.log(item2)
      this.setState({
        data: item2
      })             
}
deleter=(users)=>{
  console.log(users)
  var item=this.state.data
  item=item.filter(giatri =>giatri.id !==users)
  this.setState({
    data:item
  })
}
  render() {
    var ketqua=[];
        this.state.data.forEach((item)=>{
        if(item.name.indexOf(this.state.dulieu1) !== -1){
          ketqua.push(item)
        }
    })
    console.log(this.state)
    return (
    <div className="App">
       <Seach  onchecks={(dl)=>this.oncheck(dl)} 
        adds={(id,name,age)=>this.themmoi(id,name,age)} />
      <From 
      nguoi1={(users)=>this.deleter(users)}
      nguoi={(dt)=>this.user(dt)} 
      tieude={ketqua}/>
      <Sua 
       thaydois={()=>this.thaydoi()} 
      sua={(id,name,age)=>this.sua1(id,name,age)}
       show={this.state.trangthai} 
       hienthi={this.state.dulieu}
       />
    </div>
    );
  }
}
export default App;