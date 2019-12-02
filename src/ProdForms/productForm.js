import React, { Component } from 'react'

export class productForm extends Component {

   submit=(e)=>{
    e.preventDefault();
    var product={
        name:this.refs.name.value,
        price:parseInt(this.refs.price.value)
    }
    this.props.handleCreate(product);
    this.refs.name.value='';
    this.refs.name.price='';
    
   }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Product Name" ref="name"/>-
                    <input type="number" placeholder="Product Price" ref="price"/>
                    <br/><br/>
                    <button>Add</button>
                    <hr/>

                </form>
            </div>
        )
    }
}

export default productForm
