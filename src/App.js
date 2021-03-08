import React, { useState } from "react";
import Navbar from "./Interface/Page/Navbar";
import FoodFetch from "./Interface/Page/FoodFetch";
import Idea from "./Interface/Page/Idea";
import Event from "./Interface/Page/Event";
import Contact from './Interface/Page/Contact'
import { Route } from "react-router-dom";
import Interface from "./Interface/FormAndData/Interface";
import Login from './Interface/Page/LoginForm/Login'
// import Login from './Interface/Page/Login'
import LoginForm from './Interface/Page/LoginForm/LoginForm'
import ourProduct from './Interface/FormAndData/AllData'
import './App.css'

function App() {
  const [product]= useState(ourProduct);

  console.log(product[0].img);
 


  return (
    <div>
      <Navbar /> 
      <Route path="/FoodFetch" exact>      <FoodFetch />            </Route>

      <Route path="/Interface" exact>
           {product.map( (item) => 
            <Interface 
              images = {item.img} 
              priceA = {item.price}  
              yourGift ={item.yourGift}
              
            /> 
            )}     
      </Route>

      <Route path="/Idea" exact>      <Idea />            </Route>
      <Route path="/Event" exact>     <Event />           </Route>
      <Route path="/Contact" exact>
         <img src="https://mediagen.captureone.com/media/30dlkax1/capture-one-raw-photo-editor-raw-edited-a-b.png?width=1500&upscale=false"/>
           <Contact />         </Route>

      <Route path="/Login" exact>     <Login />           </Route>
      <Route path="/LoginForm" exact> <LoginForm />       </Route>

    
  
    </div>
  );
}

export default App;
