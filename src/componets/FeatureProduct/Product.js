import React from "react";
import "./Feature.css";
import { NavLink } from "react-router-dom";
import FormatePrice from "./FormatePrice";

const Product = (curlElem) => {
  const { id, name, image, price, category } = curlElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatePrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
