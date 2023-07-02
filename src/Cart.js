import React from "react";
import "./Cart.css";
import { useCartContext } from "./Contexts/cart_contex";
import CartItem from "./componets/cartitem/CartItem";

export const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};
