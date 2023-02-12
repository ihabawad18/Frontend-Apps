import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShirt,faShoppingCart,faCircle,faStore } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
const Navbar=(props)=>{
  const [visible,setVisible]=useState(false);
  const compute=()=>{
    var v=0;
    const objectLenght = Object.keys(props.data.nbofitems).length;
    for(var i=1;i<=objectLenght;i++){
      v+=props.data.nbofitems[i];
    }
    console.log(v);
    return v;
  }
  return (
    <div className="Navbar">
      <div className="logo"><FontAwesomeIcon icon={faStore} /></div>
      <div className="links">
        <Link className="link" to="/">Shop</Link>
        <Link className="link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> <p id="1" className={`${compute()<=0 ?"hidden":"para"}`}>{compute()}</p></Link>
      </div>
    </div>


  )
}
export default Navbar;
