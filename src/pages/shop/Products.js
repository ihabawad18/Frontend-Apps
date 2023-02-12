import React from 'react';
import {PRODUCTS } from "../../product-items"
import Product from "../../components/Product"
import './Products.css'
const Products=(props)=>{
  return(
    <div className="Products">
    {
      props.data.map((product,i)=>{
        return <Product key={i} data={product} compute={props.compute} cart={props.cart}/>
      })
    }
    </div>
  )
}
export default Products;
