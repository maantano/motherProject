import React, { useEffect, useRef } from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";
const { kakao } = window;

const Fourth = () => {
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(37.49983363813386, 126.95181827518353),
    level: 1,
  };
  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    const location = [[37.49983363813386, 126.95181827518353]];
    location.map((e) => {
      const markerPosition = new kakao.maps.LatLng(e[0], e[1]);
      new kakao.maps.Marker({ map, position: markerPosition });
    });
  }, []);

  return (
    <div style={{ height: 400 }}>
      <div className="firstDiv">
        <div className="secondDiv">
          <div className="lf-firstDiv">
            <h1 className="lf-firstH1">부담.</h1>
            <div className="lf-secondDiv">
              {/* 좋아하는 카드를 발급하는 가장 좋은 방법 */}
              덜어낼수 있는 가장 빠른 방법 <br />
              가족처럼 도와드리겠습니다.
            </div>
            <div
              className="lf-secondDiv"
              style={{ display: "block", marginTop: 15 }}
            >
              센터장 : 010-1234-5678
            </div>
          </div>

          <div className="rg-upside-firstDiv">
            {/* <div className="rg_firtDiv">
              <h3 className="rg_firstText">
                내게 맞는 카드상품, 비교하기 힘드시죠?
                <strong>쉽고 정확하게 비교합니다.</strong>
              </h3>
            </div>
            <div className="rg_btnDiv">
              <button className="rg_cssBtn">카드 검색</button>
            </div> */}
            <div
              className="container"
              style={{ marginLeft: "80%", paddingTop: "3.5rem" }}
            >
              <div
                id={"map"}
                ref={container}
                style={{
                  width: 500,
                  borderRadius: 15,
                  height: 300,
                  right: "-145px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
