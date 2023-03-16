import React from "react";

import "../../asset/common.css";
import "../../asset/contents.css";
import "../../asset/reset.css";
import "../../asset/detail.css";

import Header from "../../Header/Header";
import Footer from "../../component/Footer";
import { useEffect, useRef, useState } from "react";

import Main from "../../component/Main";
import Second from "../../component/Second";
import Third from "../../component/Third";
import Fourth from "../../component/Fourth";
const Home = () => {
  return (
    <div>
      <Header />
      <div id="main" className="animate slow">
        <div
          className="fullpage fullpage-wrapper"
          style={{
            height: "100%",
            position: "relative",
            touchAction: "none",
            transform: "translate3d(0px, 0px, 0px)",
            transition: "all 700ms ease 0s",
          }}
        >
          <Main />
          <Second />
          <Third />
          <Fourth />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
