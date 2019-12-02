import React, { Component } from 'react'

export class product extends Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            qty: 0  
        };  
    } 
    buy=()=>{
        this.setState({
            qty:this.state.qty+1
        });
        this.props.totalHandler(this.props.price)
    }
    show=()=>{
        this.props.showHandler(this.props.name)
    }
    render() {

        return (
            <div>
                <p>{this.props.name} -$ {this.props.price}</p>
                <button onClick={this.buy}>Buy</button>
                <button onClick={this.show}>Show</button>
                <h3>Qty : {this.state.qty}</h3>
                <hr/>
            </div>
            
        )
    }
}

export default product
