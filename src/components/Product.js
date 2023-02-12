import React from 'react';
const Product=(props)=>{

  return (
     <div className="product">
        <div className="layout">
           <img className="image" src={props.data.image} alt="image"/>
           <div className="product_content">
             <h3 className="description">{props.data.product_name}</h3>
             <div className="price">{props.data.price}$</div>
           </div>
           <button type="button" data-value={props.data.id} onClick={props.compute} className="btn" >Add to Cart {props.cart[props.data.id]>0?<span>({props.cart[props.data.id]})</span>:<span></span>}</button>
        </div>
     </div>
  )
}
export default Product;
