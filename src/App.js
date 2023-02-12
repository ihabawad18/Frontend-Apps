import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import './pages/shop/shop.css';
import { useState } from "react";

import {PRODUCTS } from "./product-items"
function App() {
  const init=()=>{
    const obj={};
    for(var i=1;i<=PRODUCTS.length;i++){
      obj[i]=0;
    }
    return obj;
  }
  const array=PRODUCTS;
  const [a,setA]=useState(PRODUCTS);
  const [searchfield,setSearch]=useState("");
  const [number,setNumber]=useState(array.length);
  const [nbofitems,setItems]=useState(init());
  if(a.length!==number){
    setNumber(a.length);
  }
  const change=(ev)=>{
    if(ev.type=="keypress"&&ev.key=='Enter'){
      Fil(ev);
    }
    setSearch(ev.target.value);
  }
  const Fil=()=>{
    setA(array.filter(
      (element)=>{
        return element.product_name.toLowerCase().includes(searchfield.toLowerCase());
      })
    )
  }
  const removefromcart=(e)=>{
    const x=e.currentTarget.getAttribute("data-value");
    setItems({...nbofitems,[x]:(nbofitems[x]-1)});
  }
  const addtocart=(e)=>{
    const x=e.currentTarget.getAttribute("data-value");
    setItems({...nbofitems,[x]:(nbofitems[x]+1)});
  }
  const obj={
    change:change,
    Fil:Fil,
    addtocart:addtocart,
    removefromcart:removefromcart,
    a:a,
    nbofitems:nbofitems,
    number:number,
    array:array
  };


  return (
    <div className="App">
      <Router>
        <Navbar data={obj}/>
        <Routes>
          <Route path="/" element={<Shop data={obj}/>} />
          <Route path="/cart" element={<Cart data={obj}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
