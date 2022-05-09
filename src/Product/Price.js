import React, { Component } from "react";

class Price extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      price: 32
    };
  }
  render(){
    return(
      <div className="price">
        <div className="price-inner">
          <p className="main-price">${this.state.price} </p>
          <p className="subprice">($0.21/oz)</p>
          <p className="sum">$720 /Pit</p>
        </div>
        <p className="price-desc">Approx. Lead Time: <span> 12 days</span></p>
        <p className="pricePar">Information about product s provided by manufacturer</p>
        <div className="price-btns">
        <button className="minus" onClick={() => this.setState({ count: this.state.count - 1 , price: this.state.price-32})}>-</button>
          <p className="count-input" >{this.state.count} </p>
          <button className="plus" onClick={() => this.setState({ count: this.state.count + 1 , price: this.state.price+32})}>+</button>
          <button  className="add-btn"><i class='bx bx-basket'></i> Add to Cart</button>
          <button className="custom-btn"><i class='bx bx-cog' ></i> Custom Pallet</button>
        </div>
      </div>
    )
  }
}

export default Price;
