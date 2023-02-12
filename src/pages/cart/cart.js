import React from 'react';
import DisplayCards from './DisplayCards';
import DisplaySum from './DisplaySum';
import './Cart.css';
import Footer from '../../components/Footer';
import {useNavigate} from 'react-router-dom';
const Cart=(props)=>{
  const check=()=>{
    for(let i=1;i<=props.data.array.length;i++){
      if(props.data.nbofitems[i]>0){
        return true;
      }
    }
    return false;
  }
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');
  };
  const fun=()=>{
    if(check()){
      return(
      <div>
          <h2 className="cart_header">Here are the items in your cart</h2>
          <hr className="hr_cart"/>
          <DisplayCards data={props.data}/>
          <DisplaySum data={props.data}/>
      </div>
    )
    }
    else{
      return (
        <div class="ops">
          <h1>Ops, you have no items in your cart.</h1>
          <form onSubmit={handleSubmit}>
            <button className="btn_sum" type="submit">Go back to shop</button>
          </form>
        </div>
      )
    }

  }
  return (
    <div className="Cart">
      {fun()}
      <Footer/>
    </div>
  )
}
export default Cart;
