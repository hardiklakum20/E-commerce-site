import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { About } from "./About";
import { Cart } from "./Cart";
import { Contact } from "./componets/Contact/Contact";
import { ErrorPage } from "./ErrorPage";
import  Home  from "./Home";
import { Products } from "./Products";
import { Singleproduct } from "./Singleproduct";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";



const App = () =>{

  return(
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </Router>
  )};

export default App;