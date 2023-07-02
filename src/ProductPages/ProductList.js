import React from "react";
import { useFilterContex } from "../Contexts/Filter_contex";
import GridView from "./Grid View/GridView";
import ListView from './List View/ListView';

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContex();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
