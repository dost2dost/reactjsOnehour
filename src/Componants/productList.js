import React, { Component } from 'react'
import Total from './total'
import Product from'./product';
import ProductForm from '../ProdForms/productForm'

export class productList extends Component {
    constructor(props){
        super(props);
        this.state= {
            total:0,
            productList:[
                {name:"Android" ,price:212},
                {name:"Apple" ,price:412},
                {name:"Nokia" ,price:612}
        ]
        }
    }
    showProduct=(name)=>{
        alert("You selected "+name)
    }
    
    calculateTotal=(price)=>{
        this.setState({
            total:this.state.total+price
           
        })
        alert("totall:  "+this.state.total)
    }

    createProduct=(prd)=>{
 this.setState({
     productList:this.state.productList.concat(prd)
 })
    }
    render() {
       
        var comp=this;
        var products=this.state.productList.map(function(product){
            return(
                <Product name={product.name} price={product.price}  showHandler={comp.showProduct} totalHandler={comp.calculateTotal}/>

            )
        })
        return (
            <div>
                <ProductForm handleCreate={this.createProduct}/>
                {products}
                <Total total={this.state.total}/>
                
                </div>
        )
    }
}

export default productList
