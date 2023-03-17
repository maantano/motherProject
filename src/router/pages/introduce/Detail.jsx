import React, { useEffect, useRef } from "react";
import Header from "../../../Header/Header";
import IntroduceVisual from "./IntroduceVisual";
import { Link } from "react-router-dom";
import Footer from "../../../component/Footer";
const { kakao } = window;

const Detail = () => {
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
    <>
      <Header />
      <IntroduceVisual />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li style={{ width: "50%" }}>
              <Link to="/introduce">인사말</Link>
            </li>
            <li style={{ width: "50%" }}>
              <Link to="/detail" className="on">
                센터 소개
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sec4">
        <h2 class="sub_title" style={{ marginTop: 40, paddingBottom: 80 }}>
          센터 소개
        </h2>
      </div>
      <div className="size">
        <div className="sub_wrap">
          <div class="sec1">
            <h3 class="sub_t">이용 안내</h3>
            <table class="table_form" style={{ marginTop: 40 }}>
              <colgroup>
                <col width="20%;" />
                <col width="*" />
              </colgroup>
              <colgroup></colgroup>
              <tbody>
                <tr>
                  <th>이용대상</th>
                  <td>
                    <p>
                      노인성질환을 가진 65세 이상으로 장기요양등급을 받은
                      3~5등급, 인지지원등급 어르신
                    </p>
                    <p>
                      60세 이상 심신허약 및 뇌졸중, 경증치매 어르신으로 낮 동안
                      보호가 필요한 어르신
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>이용정원</th>
                  <td>
                    <p>69명</p>
                  </td>
                </tr>
                <tr>
                  <th>운영시간</th>
                  <td>
                    <p>월~금(7:30~20:00)</p>
                    <p>토요일(08:00~18:00)</p>
                    <span class="last">시간 변동 가능</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sec9 sec" style={{ paddingTop: 80 }}>
            <h3 class="sub_t">센터 현황</h3>
            <div class="sec1" style={{ paddingTop: 40 }}>
              <table class="table_form">
                <colgroup>
                  <col width="24%;" />
                  <col width="*" />
                </colgroup>
                <colgroup></colgroup>
                <tbody>
                  <tr>
                    <th>설립년월일</th>
                    <td>
                      <p>2019.07.01</p>
                    </td>
                  </tr>
                  <tr>
                    <th>시설장</th>
                    <td>
                      <p>김현정</p>
                    </td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td>
                      <p>서울특별시 동작구 상도로47길 12T</p>
                    </td>
                  </tr>
                  <tr>
                    <th>대표전화</th>
                    <td>
                      <p>02-0000-0000</p>
                    </td>
                  </tr>
                  <tr>
                    <th>팩스</th>
                    <td>
                      <p>02-0000-0000</p>
                    </td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td>
                      <p>aaaa@naver.com</p>
                    </td>
                  </tr>
                  <tr>
                    <th>주서서비스</th>
                    <td>
                      <p>재가노인복지</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="info_fc" style={{ marginTop: 150 }}>
              <h3 class="sub_t">찾아오시는 길</h3>
              <div className="container" style={{ paddingTop: "3.5rem" }}>
                <div
                  id={"map"}
                  ref={container}
                  style={{
                    width: 1000,
                    borderRadius: 15,
                    height: 500,
                  }}
                ></div>
              </div>
              <div class="sec1" style={{ paddingTop: 40 }}>
                <div style={{ textAlign: "left" }}>
                  <p class="pro_info mark" style={{ textAlign: "left" }}>
                    지하철 : 7호선 상도역 도보 10분
                  </p>
                  <p class="pro_info mark" style={{ textAlign: "left" }}>
                    버스 : 751, 750 도보 10분, 01번, 08번
                  </p>
                  <p class="pro_info mark" style={{ textAlign: "left" }}>
                    자가용 이용시 주차 불가
                  </p>
                  <p class="pro_info point_color" style={{ textAlign: "left" }}>
                    <em class="mr">*</em>서울특별시 동작구 상도로47길 12T
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
