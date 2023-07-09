import React from "react";
import FormatePrice from "./../FeatureProduct/FormatePrice";
import CartAmountToggle from "./../AddToCart/CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../Contexts/cart_contex";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();
  // const setDecrease = () => {
  // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <img src={image} alt={id} />
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatePrice price={price} />
        </p>
      </div>

      {/* Quentity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      {/* Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatePrice price={price * amount} />
        </p>
      </div>

      {/* remove */}
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
