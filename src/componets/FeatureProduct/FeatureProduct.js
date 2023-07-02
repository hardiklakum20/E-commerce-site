import React from 'react';
import './Feature.css';
import { useProductContex } from "../../Contexts/Productcontex";
import Product from "./Product";
// import Product from './Product';

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContex();
    // console.log(featureProducts);
  
    if (isLoading) {
      return <div>Loading....</div>;
    }
  return (
    <>
      <div className="secton">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
      </div>
    </>
  )
}

export default FeatureProduct