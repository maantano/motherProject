import React, { useCallback, useEffect, useRef, useState } from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";

const Main = () => {
  useEffect(() => {
    const opacityImage = document.querySelector(".scroll-opacity");

    const callback = ([entry], observer) => {
      entry.target.style.opacity = entry.intersectionRatio;
    };

    const observer = new IntersectionObserver(callback, {
      threshold: [...new Array(101)].map((_, i) => i / 100),
    });

    observer.observe(opacityImage);
  }, []);

  return (
    // <div
    //   className={scrollPosition > 600 ? "scrolled-opacity" : "scroll-opacity"}
    // >
    <div className="scroll-opacity">
      <div>
        <div
          className="section sec1 fp-section fp-table active fp-completely"
          id="section1"
          //   style="height: 944px;"
          style={{ height: 944 }}
        >
          <div className="size">
            <div className="fp-tableCell" style={{ height: 944 }}>
              <div className="wrap">
                <div className="txt">
                  <h2>
                    생애 주기별 <em className="mbr">맞춤 케어 솔루션</em>
                  </h2>
                  <p>
                    질환과 노화로 인해 발생되는 신체기능 저하를<br></br>각
                    건강전문가의 <b>‘케어 매니지먼트’</b>와 <b>‘재활 운동’</b>
                    으로 회복시키는 <br></br>
                    헬스케어 전문 브랜드 <b>‘웰더스’</b>입니다.
                  </p>
                </div>
                <div className="txt">
                  <a className="total_service-link" href="/company/service.php">
                    웰더스 통합 재가 서비스
                  </a>
                </div>
                <div className="select_bt clear">
                  <a href="/daycare/" className="main_daycare">
                    <p>
                      <b>데이케어 센터</b>
                      <span>
                        재활형 <em className="mbr">주야간보호센터</em>
                      </span>
                    </p>
                  </a>
                  <a
                    href="/visitingcare/info_vn.php"
                    className="main_visitingcare"
                  >
                    <p>
                      <b>방문 재가서비스</b>
                      <span>
                        방문재활간호 <em className="mbr">방문요양</em>
                      </span>
                    </p>
                  </a>
                  <a
                    href="/visitingtraining/info_tct.php"
                    className="main_visitingtraining"
                  >
                    <p>
                      <b>1:1 재활운동</b>
                      <span>
                        재활운동센터 &amp; <em className="mbr">방문운동</em>
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down_bt vertical-i">
          <p className="arrP">Scroll down</p>
          <img
            alt=""
            src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png"
            className="arrImg"
          />
          {/* <a href="javascript:;">
            Scroll down
            <img
              alt=""
              src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png"
              className="arrImg"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
