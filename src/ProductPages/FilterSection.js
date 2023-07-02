import React from "react";
import { useFilterContex } from "../Contexts/Filter_contex";
import "./FilterSection.css";
import { FaCheck } from "react-icons/fa";
import FormatePrice from "./../componets/FeatureProduct/FormatePrice";

const FilterSection = () => {
  const {
    filters: { text, category, color, maxPrice, price, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContex();

  // To Get The Unique Data Of Each Fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
  };

  // We Need Unique Data
  const categoryOnlyData = getUniqueData(all_products, "category");
  // const companyData = getUniqueData(all_products, "company");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  console.log(colorsData);

  return (
    <>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="SEARCH"
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="company-company--select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "All") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }

            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatePrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          max={maxPrice}
          min={minPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <button className="btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default FilterSection;
