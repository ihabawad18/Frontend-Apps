import React from 'react';
import Product_Cart from '../../components/Product_Cart';
import './Cart.css'
const DisplayCards=(props)=>{
  const filtered_cards=props.data.array.filter(
    (element)=>{
      return props.data.nbofitems[element.id]>0;
    }
  )
  return (
    <div className="Cards">
      {
          filtered_cards.map((product,i)=>{
            return <Product_Cart key={i} data={product} nb={props.data.nbofitems} func1={props.data.addtocart} func2={props.data.removefromcart}/>
          })
      }
    </div>


  )


}
export default DisplayCards;
