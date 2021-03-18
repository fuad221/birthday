import React, { useState} from "react";
import '../../App.css'


const Interface = ({images, price, yourGift}) => { 
  const [img, setImg ] = useState(null)
  useEffect(() => { 
    
  })

  return (
    <div className="cardCon">
      <img src={images.indexOf("http") > -1 ? images : require("../../../public" + images)} alt =" "  className="imgSize" />
      
      <p className="fontSize"> {`${price}$ get your discount 10%  ${yourGift}`}  </p>

      <button className="btnBooking">add to the cart</button>
    </div>  
    )
};


export default Interface;

