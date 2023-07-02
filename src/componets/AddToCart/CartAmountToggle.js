import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./AddToCart.css";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()} className="cart-btn">
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()} className="cart-btn">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
