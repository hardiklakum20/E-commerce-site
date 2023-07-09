import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { useCartContext } from "../../Contexts/cart_contex";

const Nav = () => {
  const [menuIcon, setmenuIcon] = useState();
  const { total_item } = useCartContext();
  return (
    <div className={menuIcon ? "navbar active" : "navbar"}>
      <ul className="navbar-lists me-5">
        <li>
          <NavLink
            to="/"
            className="navbar-link home-link"
            onClick={() => setmenuIcon(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="navbar-link "
            onClick={() => setmenuIcon(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="navbar-link "
            onClick={() => setmenuIcon(false)}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="navbar-link"
            onClick={() => setmenuIcon(false)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="navbar-link cart-trolley--link"
            onClick={() => setmenuIcon(false)}
          >
            <FiShoppingCart className="cart-trolley" />
            <span className="cart-total--item">{total_item}</span>
          </NavLink>
        </li>
      </ul>
      <div className="mobile-navbar-btn">
        <CgMenu
          name="menu-outline"
          className="mobile-nav-icon"
          onClick={() => setmenuIcon(true)}
        />
        <CgClose
          name="close-outline"
          className="mobile-nav-icon close-outline"
          onClick={() => setmenuIcon(false)}
        />
      </div>
    </div>
  );
};

export default Nav;
