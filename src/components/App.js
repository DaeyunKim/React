import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      name:''
    };
  }
    render(){
      return (
        <div>
          <button onClick={()=>{this.setState({name:"DaeyunKim"});}}>Click Me</button>
          <h1>Hi@@@!##$$$# {this.state.name}</h1>
        </div>
      );
    }
}


export default App;
// module.export =App;
