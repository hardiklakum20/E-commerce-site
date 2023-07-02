import React, { useState } from "react";
import "./MyImage.css";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, SetMainImage] = useState(imgs[0]);

  return (
    <>
      <div className="myimage">
        <div className="grid grid-four-column">
          {imgs.map((curElm, index) => {
            return (
              <figure>
                <img
                  src={curElm.url}
                  alt={curElm.filename}
                  className="box-image--style"
                  key={index}
                  onClick={() => SetMainImage(curElm)}
                />
                {/* <h2>Hardik</h2> */}
              </figure>
            );
          })}
        </div>

        {/* 2nd column */}
        <div className="main-screen">
          <img src={mainImage.url} alt={mainImage.filename} />
        </div>
      </div>
    </>
  );
};

export default MyImage;
