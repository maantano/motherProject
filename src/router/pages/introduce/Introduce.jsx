import React from "react";
import Header from "../../../Header/Header";
import IntroduceVisual from "./IntroduceVisual";
import { Link } from "react-router-dom";
import img3 from "../../../asset/img/main_bg1.jpeg";
import Footer from "../../../component/Footer";

const Introduce = () => {
  return (
    <>
      <Header />
      <IntroduceVisual />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li style={{ width: "50%" }}>
              <Link to="/introduce" className="on">
                인사말
              </Link>
            </li>
            <li style={{ width: "50%" }}>
              <Link to="/detail">센터 소개</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub_wrap welcome">
        <h2 className="sub_title" style={{ marginTop: 40 }}>
          인사말
        </h2>
        <div className="intro">
          <ul className="clear">
            <li>
              <div style={{ height: "476px" }}>
                <img
                  src={img3}
                  style={{ width: "810px", paddingLeft: "20px" }}
                />
              </div>
              {/* <p style={{ backgroundImage: { img3 }, height: "476px" }}>
                <img src={img3} />
              </p> */}
            </li>
            <li className="txt">
              <p>
                안녕하세요. <br />
                <b>
                  저희 웰더스 홈페이지에 <br />
                  오신 것을 환영합니다.
                </b>
              </p>
              <p>
                어떻게 하면 건강하게 <b className="fw900">나다운 삶</b>을
                지켜가며
                <br />
                여생을 보낼 수 있을까에 대한 근본적인 고민을 하며, <br />
                시대적 변화와 소구에 대한 대안을 찾기 위해
                <br />
                전문가들이 모인 집단이 바로 웰더스 스마트 케어입니다.
              </p>
            </li>
          </ul>
        </div>
        <div className="size">
          <div
            className="info_table"
            style={{ marginBottom: "40px", height: 900, paddingTop: 100 }}
          >
            <ul className="clear" style={{ paddingTop: 100 }}>
              <li>
                <span>
                  과거의 수명과{" "}
                  <span className="txt_yellow">미래의 기대수명</span>
                </span>
                <div>
                  <img src={img3} style={{ width: 400 }} />
                </div>
              </li>
              <li>
                <span>
                  <span className="txt_yellow">65세 이상</span>의 고령인구의
                  비중
                </span>
                <div>
                  <img src={img3} style={{ width: 400 }} />
                </div>
              </li>
            </ul>
          </div>
          <div className="txt">
            <p>
              대한민국의 1970년 기대수명은 62세 였습니다. 2030년에는 기대수명이
              85세에 이르게 됩니다. 더불어 전체 인구 중 65세 이상의 고령인구의
              비중 역시도 5명중 1명 꼴인 20%이상에 이르게 되어 초고령화 시대에
              진입하게 됩니다. 하지만 우리에게 필요한 것은 단순히 65세 이상
              인구의 비중에 신경을 쓸 것이 아니라 우리의 생활과 삶의 방식에 대한
              변화에 초점을 더욱 맞춰야 한다는 것입니다.
            </p>
            <p>
              더 오래, 더 건강하게 살며 더욱 다양한 욕구를 가진 시대로 진입하게
              됨을 우리는 꼭 주목해야 합니다.
            </p>
            <p>
              어떻게 하면 건강하게 나다운 삶을 지켜가며 여생을 보낼 수 있을까에
              대한 근본적인 고민을하며, 시대적 변화와 소구에 대한 고민과 이에
              대한 대안을 찾기 위해 젊은
              전문가(운동,물리치료,간호,사회복지,영양)들이 모인 집단이 바로
              웰더스 스마트 케어입니다.
            </p>
            <p>
              “웰더스 스마트 케어”는 “건강하게 나이들기” 라는 대명제를 가지고
              현재의 고령층 뿐만 아니라 장년층, 청년층에게도 소구할 수 있는
              건강한 콘텐츠를 단계적으로 준비하고자 합니다. 몸과 마음에 대한
              기본적인 니즈를 고민하게 이를 둘러 싸고 있는 기본단위인 가족을
              아우르며 나아가 지역에서의 지원과 고령층의 새로운 자리매김을 통해
              건강한 사회 만들기를 희망합니다.
            </p>
            <div className="ceo_sign clear">- 웰더스 임직원 일동 -</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Introduce;
