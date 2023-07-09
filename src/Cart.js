import React from "react";
import "./Cart.css";
import { useCartContext } from "./Contexts/cart_contex";
import CartItem from "./componets/cartitem/CartItem";
import { NavLink } from "react-router-dom";
import FormatePrice from "./componets/FeatureProduct/FormatePrice";

export const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  // console.log(cart);

  if (cart.length === 0) {
    return (
      <div>
        <h3>No Cart in Item</h3>
      </div>
    );
  }

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
        <hr />
        <div className="cart-two-button">
          <NavLink to="/products">
            <button className="btn btn-continue_shopping">
              continue Shopping
            </button>
          </NavLink>
          <button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </button>
        </div>

        {/* ORDER total amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatePrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatePrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatePrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
