import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
const Product_Cart=(props)=>{
  return (
     <div className="card">
           <img className="image" src={props.data.image} alt="image"/>
           <div className="prod_cont">
             <div className="desc">ProductName: {props.data.product_name}</div>
             <div className="pr">Price: {props.data.price}$</div>
             <div className="count">Count: {props.nb[props.data.id]}</div>
             <div className="total">Total: {props.data.price*props.nb[props.data.id]}$</div>
           </div>
           <div className="input-group plus-minus-input">
                  <div className="input-group-button">
                    <button type="button" data-value={props.data.id} onClick={props.func1} className="button hollow circle" data-quantity="minus" data-field="quantity">
                      <FontAwesomeIcon className="counter_icon" icon={faPlus}/>
                    </button>
                  </div>
                  <div className="input-group-button">
                    <button type="button" data-value={props.data.id} onClick={props.func2} className="button hollow circle" data-quantity="plus" data-field="quantity">
                      <FontAwesomeIcon className="counter_icon" icon={faMinus}/>
                    </button>
                  </div>
            </div>
     </div>
  )
}
export default Product_Cart;
