import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNavigation.css";

const PageNavigation = ({ title }) => {
  return (
    <>
      <div className="pagenavi">
        <NavLink to="/">Home</NavLink>/{title}
      </div>
    </>
  );
};

export default PageNavigation;
