import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./components/commonComponent/Root";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
