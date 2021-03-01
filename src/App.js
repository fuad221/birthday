import React from 'react'
import Navbar from './Interface/Page/Navbar'
import { Route } from "react-router-dom";
import Home from './Interface/Page/Home'



function App() {
  return (
    <div>
      < Navbar />
      <Route path="/home" exact> <Home /> </Route>


      <h1> test</h1>
    </div>
  );
}

export default App;
