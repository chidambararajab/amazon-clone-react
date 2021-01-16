import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_navOption">
          <span className="header_optionLine_one">Hello Guest</span>
          <span className="header_optionLine_two">Sign In</span>
        </div>
        <div className="header_navOption">
          <span className="header_optionLine_one">Return</span>
          <span className="header_optionLine_two">Order</span>
        </div>
        <div className="header_navOption">
          <span className="header_optionLine_one">Your</span>
          <span className="header_optionLine_two">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header_basket">
          <ShoppingCartIcon />
          <span className="header_optionLine_two header_basketCount">0</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
