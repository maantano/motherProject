import React, { useEffect } from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";
const Second = () => {
  useEffect(() => {
    const opacityImage = document.querySelector(".scroll-opacity2");

    const callback = ([entry], observer) => {
      entry.target.style.opacity = entry.intersectionRatio;
    };

    const observer = new IntersectionObserver(callback, {
      threshold: [...new Array(101)].map((_, i) => i / 100),
    });

    observer.observe(opacityImage);
  }, []);
  return (
    <div className="scroll-opacity2" id="secondDiv">
      <div
        className="section sec3 sc fp-section fp-table active fp-completely"
        id="section3"
        style={{ height: "944px" }}
      >
        <div className="fp-tableCell" style={{ height: "944px" }}>
          {/* <div className="fp-tableCell" style={{ height: "887px" }}> */}
          <div className="size">
            <div className="wrap">
              <div className="txt">
                <h3>방문재가 서비스</h3>
                <span>맞춤형 장기요양서비스</span>
              </div>
              <div className="con_bt -con_bt_type01">
                <div className="size">
                  <ul className="clear">
                    <li>
                      <a href="/visitingcare/info_vn.php">
                        <div
                          className="tb"
                          style={{ height: "215px", borderRadius: "215px" }}
                        >
                          <div className="tbc">
                            {/* <img
                            src="/img/main_sec2_img2_210915.png"
                            alt="방문간호"
                          /> */}
                            <p>방문간호</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/visitingcare/info_vhc.php">
                        <div
                          className="tb"
                          style={{ height: "215px", borderRadius: "215px" }}
                        >
                          <div className="tbc">
                            {/* <img
                            src="/img/main_sec2_img3_210915.png"
                            alt="방문 요양"
                          /> */}
                            <p>방문 요양</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/visitingcare/info_fc.php">
                        <div
                          className="tb"
                          style={{ height: "215px", borderRadius: "215px" }}
                        >
                          <div className="tbc">
                            {/* <img
                            src="/img/main_sec2_img4_210915.png"
                            alt="가족요양/간호"
                          /> */}
                            <p>
                              가족요양/
                              <br />
                              간호
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="down_bt vertical-i">
          <a href="javascript:;">SCROLL</a>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Second;
