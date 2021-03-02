import React from "react";
import '../../App.css'

const Interface = ({imges, price}) => { 
  
  return (
    <div className="cardCon">
      <img src={imges} alt =" "  className="imgSize" />
      <p className="fontSize">{`${price}$ get your discount 10%`}</p>

      <button className="btnBooking">add to shopping</button>
    </div>  
    )
};


export default Interface;
