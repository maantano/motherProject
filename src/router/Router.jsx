import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import Center1 from "./pages/center/Center1";
import Goods from "./Goods";
import Home from "./pages/Home";
import Center2 from "./pages/center/Center2";
import Center3 from "./pages/center/Center3";
import Introduce from "./pages/introduce/Introduce";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/center" element={<Center1 />} />
          <Route path="/center2" element={<Center2 />} />
          <Route path="/center3" element={<Center3 />} />
          <Route path="/goods" element={<Goods />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
