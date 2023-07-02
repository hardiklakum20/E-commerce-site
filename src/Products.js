import React from "react";
import "./Product.css";
import FilterSection from "./ProductPages/FilterSection";
import ProductList from "./ProductPages/ProductList";
import Sort from "./ProductPages/Sort";
import { useFilterContex } from "./Contexts/Filter_contex";

export const Products = () => {
  const { filter_products } = useFilterContex();
  console.log(filter_products);
  return (
    <>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </>
  );
};
