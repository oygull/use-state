import React from "react";

function MainHeader(){
  return(
    <div className="main-header">
      <div className="container">
        <div className="main-inner">

          <div className="search-form">
            <span className="search-icon"><i className='bx bx-search' ></i></span>
            <input className="search-input main-input" type="text" placeholder="Type to search"/>
            <input className="search-input" type="select" placeholder="All Categories"/>
          </div>
          <ul className="header-list">
            <li className="header-item"><i className='bx bx-check-square' ></i> Orders</li>
            <li className="header-item"><i className='bx bxs-cart' ></i> Cart</li>
            <li className="header-item"><i className='bx bx-user' ></i> Profile</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainHeader;