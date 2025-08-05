import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./components/Root/Root";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
