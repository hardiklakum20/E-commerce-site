import React from "react";
import "./Gridview.css";
import Product from "../../componets/FeatureProduct/Product";

const GridView = ({ products }) => {
  return (
    <>
      <div className="sec">
        <div className="container grid grid-three-column">
          {products.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default GridView;
