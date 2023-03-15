import Main from "./component/Main";
import Gnb from "./component/Gnb";
import "./asset/common.css";
import "./asset/contents.css";
import "./asset/reset.css";
import "./asset/detail.css";
import Second from "./component/Second";
import Third from "./component/Third";
import Fourth from "./component/Fourth";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import Footer from "./component/Footer";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <div>
      {/* <Gnb /> */}
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
}

export default App;
