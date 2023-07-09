import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContex } from "./Contexts/Productcontex";
import PageNavigation from "./componets/PageNavigation";
import MyImage from "./componets/MyImage/MyImage";
import FormatePrice from "./componets/FeatureProduct/FormatePrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import "./Singleproduct.css";
import Stars from "./componets/Stars/Stars";
import AddToCart from "./componets/AddToCart/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

export const Singleproduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContex();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    // category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className=" page_loading">Loading...</div>;
  }
  return (
    <>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* product image */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatePrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatePrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Shopping Delivered</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available :
                <span>{stock > 0 ? "In Stock" : "Out Of Stock"}</span>
              </p>
              <p>
                ID : <span>{alias}</span>
              </p>
              <p>
                Brand : <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  );
};
