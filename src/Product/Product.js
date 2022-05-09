import React from "react";
import './Product.css';
import productImg from '../images/product.png';
import Price from "./Price";

function Product(){
  return(
    <div className="product">
      <div className="container">
        <div className="product-inner">
        <div className="img-box">
          <img className="product-img" src={productImg}/>
        </div>
        <div className="product-desc">
            <p className="subheading">MOTT'S</p>
            <h3 className="title">Mott's Unsweetened Applesauce</h3>
            <p className="size"> Pack size: <span> 24/16.90</span></p>
            <p className="par">Chef Maxwell Applesauce is a delicious classicand a part of healthy diet low in saturated fat with 40% itamin C</p>
            <a className="product-link" href="#"> Download Spec Sheet</a>
            <Price/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Product;