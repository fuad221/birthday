import React, { useState} from "react";
import Navbar from "./Interface/Page/Navbar";
import Home from "./Interface/Page/Home";
import Idea from "./Interface/Page/Idea";
import Event from "./Interface/Page/Event";
import { Route } from "react-router-dom";
import Interface from "./Interface/FormAndData/Interface";
import Login from './Interface/Page/Login'
import ImgRul from './Interface/Img'
import './App.css'

function App() {
  const [img, setImg]= useState(ImgRul);
  console.log(img);
  return (
    <div>
      <Navbar />
      <Route path="/home" exact>      <Home />            </Route>
      <Route path="/Idea" exact>      <Idea />            </Route>
      <Route path="/Event" exact>     <Event />           </Route>
      <Route path="/Interface" exact> <Interface />  {img.map( (photo) => 
           <Interface imges = {photo.img} price = {photo.price}/> 
    )}     </Route>
      <Route path="/Login" exact>     <Login />           </Route>

    
      


  
    </div>
  );
}

export default App;
