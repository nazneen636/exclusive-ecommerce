import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./components/Root/Root";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import WishList from "./pages/WishList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
