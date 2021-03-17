import React, { useState, useEffect } from "react";
import '../../App.css'


const Interface = ({images, price, yourGift}) => { 
  const [img, setImg ] = useState(null)
  useEffect(() => { 
    if(images.indexOf("http") > -1){
      setImg(images)
    }else {
      import("../../../public" + images)
      .then(loaded => setImg(loaded.default))
    }
  }, [])

  return (
    <div className="cardCon">
      <img src={img} alt =" "  className="imgSize" />
      
      <p className="fontSize"> {`${price}$ get your discount 10%  ${yourGift}`}  </p>

      <button className="btnBooking">add to the cart</button>
    </div>  
    )
};


export default Interface;

