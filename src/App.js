import React, { useState } from "react";
import Navbar from "./Interface/Page/Navbar";
import Home from "./Interface/Page/Home";
import Idea from "./Interface/Page/Idea";
import Event from "./Interface/Page/Event";
import { Route } from "react-router-dom";
import Interface from "./Interface/FormAndData/Interface";
import Login from './Interface/Page/Login'
import ourProduct from './Interface/FormAndData/AllData'
import './App.css'

function App() {
  const [product]= useState(ourProduct);



  return (
    <div>
      <Navbar /> 
      <Route path="/home" exact>      <Home />            </Route>
      <Route path="/Interface" exact>
           {product.map( (item) => 
           <Interface images = {item.img} priceA = {item.price}  yourGift ={item.yourGift} /> 
    )}     </Route>

      <Route path="/Idea" exact>      <Idea />            </Route>
      <Route path="/Event" exact>     <Event />           </Route>
      <Route path="/Login" exact>     <Login />           </Route>

    
  
    </div>
  );
}

export default App;
