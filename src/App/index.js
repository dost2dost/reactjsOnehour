import React, { Component } from 'react'


export class App extends Component {
 
  constructor(props) {  
    super(props);  
    this.state = {  
        qty: 0  
    };  
} 

buy=()=> {  
  this.setState({  
      qty: this.state.qty+1  
  });  
}  
  render() {
    
    
    return (
      <div className="container">
        <p>Android - $ 99</p>
        <button onClick={this.buy}>Buy</button>
        <h3>Total Ammount $ :{this.state.qty*99} </h3>
      </div>
    )
  }
}

export default App
