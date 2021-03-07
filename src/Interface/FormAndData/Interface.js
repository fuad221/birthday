import React from "react";
import '../../App.css'


const Interface = ({images, price, yourGift}) => { 
  
  return (
    <div className="cardCon">
      <img src={images} alt =" "  className="imgSize" />
      <p className="fontSize"> {`${price}$ get your discount 10%  ${yourGift}`}  </p>

      <button className="btnBooking">add to the cart</button>
    </div>  
    )
};


export default Interface;

