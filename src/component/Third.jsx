import React, { useEffect } from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";
const Third = () => {
  useEffect(() => {
    const opacityImage = document.querySelector(".scroll-opacity3");

    const callback = ([entry], observer) => {
      entry.target.style.opacity = entry.intersectionRatio;
    };

    const observer = new IntersectionObserver(callback, {
      threshold: [...new Array(101)].map((_, i) => i / 100),
    });

    observer.observe(opacityImage);
  }, []);
  return (
    <div className="scroll-opacity3">
      <div
        className="section sec2 sc fp-section fp-table active fp-completely"
        id="section2"
        style={{ height: "944px" }}
      >
        <div className="fp-tableCell" style={{ height: "944px" }}>
          <div className="size">
            <div className="wrap">
              <div className="txt">
                <h3>데이케어센터</h3>
                <span>맞춤형 재활운동센터</span>
              </div>
              <div className="con_bt">
                <div className="size">
                  <ul className="clear">
                    <li>
                      <a href="/daycare/">
                        <div
                          className="tb"
                          style={{ height: "215px", borderRadius: "215px" }}
                        >
                          <div className="tbc">
                            <img src="/img/main_sec2_img1.png" alt="센터소개" />
                            <p>센터소개</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/daycare/use.php">
                        <div
                          className="tb"
                          style={{ height: "215px", borderRadius: "215px" }}
                        >
                          <div className="tbc">
                            <img src="/img/main_sec2_img2.png" alt="이용안내" />
                            <p>이용안내</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/daycare/intro.php">
                        <div
                          className="tb"
                          style={{ height: "215px", borderRadius: "215px" }}
                        >
                          <div className="tbc">
                            <img
                              src="/img/main_sec2_img3.png"
                              alt="전문인 소개"
                            />
                            <p>전문인 소개</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/daycare/program/">
                        <div
                          className="tb"
                          style={{ height: "215px", borderRadius: "215px" }}
                        >
                          <div className="tbc">
                            <img src="/img/main_sec2_img4.png" alt="프로그램" />
                            <p>프로그램</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="down_bt vertical-i">
            {/* <a href="javascript:;">SCROLL</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
