import React from 'react';
import Products from './Products'
import SearchBox from './SearchBox'
import {PRODUCTS } from "../../product-items"
import Contact from "./Contact"
import './Contact.css';
import '../../components/Footer.css';
import Footer from '../../components/Footer';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
const Shop=(props)=>{
  return (
    <div className="Shop">
      <div className="Section-1">
          <h1 className="page-title">Ihab Shop</h1>
          <div className="searchfield_icon">
            <SearchBox data={props.data.change}/>
            <div onClick={props.data.Fil} onKeyPress={props.data.Fil} className="search_icon">
              <FontAwesomeIcon  className="search_icon" icon={faSearch}/>
            </div>
          </div>
      </div>
      <div className="Section-2">
            <h2 className="counter">The number of items is {props.data.number}!!</h2>
            <Products data={props.data.a} compute={props.data.addtocart} cart={props.data.nbofitems}/>
      </div>
      <hr className="line"/>
      <div className="Section-3">
          <Contact/>
      </div>
      <Footer/>
    </div>

  )
}
export default Shop;
