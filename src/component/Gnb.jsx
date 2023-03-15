import React from "react";
import "../asset/common.css";
import "../asset/contents.css";
const Gnb = () => {
  return (
    <div id="header" className="main">
      <div className="inner">
        <div className="top">
          <div className="size">
            <h1 className="logo">
              {/* <a href="/">
                <img src="/img/logo.png" alt="웰더스 로고" />
              </a> */}
              청솔 재가노인복지센터
            </h1>
            <div className="left">
              {/* <a href="/" className="mo_all mo">
                로고
              </a> */}
              청솔 재가노인복지센터 /
              {/* <a href="tel:1566-6597">
                <img src="/img/phone_icon.png" alt="전화" />
                
              </a> */}
              02-816-5200
            </div>

            {/* <div className="right">
              <div className="util clear">
                <a href="/member/login.php">
                  <img src="/img/login_icon.png" alt="로그인" />
                  로그인
                </a>
                <a href="/member/write.php">
                  <img src="/img/join_icon.png" alt="회원가입" />
                  회원가입
                </a>

                <a href="tel:1566-6597" classNameName="mo call">
                  1234
                </a>
              </div>
            </div> */}
          </div>
        </div>

        <div className="gnb menu_tab" style={{ height: 50 }}>
          <div className="size">
            <ul className="clear item_list depth1">
              <li>
                <a href="/company/">
                  <span>회사소개</span>
                </a>
                <ul
                  className="clear depth2"
                  style={{
                    display: "none",
                    height: "360px",
                    paddingTop: "20px",
                    marginTop: "0px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <li>
                    <a className="sub_tab" href="/company/">
                      인사말
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/company/intro.php">
                      웰더스 기업이념
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/company/value.php">
                      웰더스 가치 및 사람
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/company/positioning.php">
                      웰더스 자리매김
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/company/brand.php">
                      브랜드 소개
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/company/service.php">
                      통합재가 서비스
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="">
                <a href="/daycare/" className="">
                  <span>데이케어</span>
                </a>
                <ul
                  className="clear depth2"
                  style={{
                    display: "none",
                    height: "360px",
                    paddingTop: "20px",
                    marginTop: "0px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <li>
                    <a className="sub_tab" href="/daycare/">
                      데이케어 소개
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/daycare/special.php">
                      차별화 서비스
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/daycare/use.php">
                      이용안내
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/daycare/intro.php">
                      전문인 소개
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/daycare/program/type1.php">
                      서비스 프로그램
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/daycare/facility.php">
                      내부 시설안내
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/daycare/life/index.php">
                      생활안내
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/daycare/address.php">
                      찾아오시는 길
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="">
                <a href="/visitingcare/info_vn.php" className="">
                  <span>방문재가</span>
                </a>
                {/* <ul className="clear depth2" style="display: none; height: 360px; padding-top: 20px; margin-top: 0px; padding-bottom: 20px; margin-bottom: 0px;"> */}
                <ul
                  className="clear depth2"
                  style={{
                    display: "none",
                    height: "360px",
                    paddingTop: "20px",
                    marginTop: "0px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <li>
                    <a className="sub_tab" href="/visitingcare/info_vn.php">
                      방문간호
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/visitingcare/info_vhc.php">
                      방문요양
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/visitingcare/info_fc.php">
                      가족요양
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="">
                <a href="/visitingtraining/" className="">
                  <span>1:1 재활운동</span>
                </a>
                <ul
                  className="clear depth2"
                  style={{
                    display: "none",
                    height: "360px",
                    paddingTop: "20px",
                    marginTop: "0px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <li>
                    <a
                      className="sub_tab"
                      href="/visitingtraining/info_tct.php"
                    >
                      재활운동센터
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/visitingtraining/info_vt.php">
                      방문재활운동
                    </a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href="/welfaretool/intro/">
                  <span>복지용구</span>
                </a>
                <ul
                  className="clear depth2"
                  style={{
                    display: "none",
                    height: "360px",
                    paddingTop: "20px",
                    marginTop: "0px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <li>
                    <a className="sub_tab" href="/welfaretool/intro/">
                      복지용구 소개
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/welfaretool/rental/list.php">
                      대여품목
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub_tab"
                      href="/welfaretool/purchase/list.php"
                    >
                      구입품목
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub_tab"
                      href="/welfaretool/rentalpurchase/list.php"
                    >
                      대여·구입품목
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a href="/review/daycare/index_preparing.php" className="">
                  <span>이용사례</span>
                </a>
                {/* <ul className="clear depth2" style="display: none; height: 360px; padding-top: 20px; margin-top: 0px; padding-bottom: 20px; margin-bottom: 0px;"> */}
                <ul
                  className="clear depth2"
                  style={{
                    display: "none",
                    height: "360px",
                    paddingTop: "20px",
                    marginTop: "0px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <li>
                    <a
                      className="sub_tab"
                      href="/review/daycare/index_preparing.php"
                    >
                      데이케어 이용사례
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub_tab"
                      href="/review/visitingcare/index_preparing.php"
                    >
                      방문케어 이용사례
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub_tab"
                      href="/review/visiting/index_preparing.php"
                    >
                      방문운동 이용사례
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a href="/cscenter/notice/" className="">
                  <span>고객센터</span>
                </a>
                {/* <ul className="clear depth2" style="display: none; height: 360px; padding-top: 20px; margin-top: 0px; padding-bottom: 20px; margin-bottom: 0px;"> */}
                <ul
                  className="clear depth2"
                  style={{
                    display: "none",
                    height: "360px",
                    paddingTop: "20px",
                    marginTop: "0px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <li>
                    <a className="sub_tab" href="/cscenter/notice/">
                      공지사항
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/cscenter/faq/">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="sub_tab" href="/cscenter/consulting/">
                      1:1 상담
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="header_bg"
          style={{ height: "0px", borderBottom: "0px" }}
        ></div>
      </div>
    </div>
  );
};

export default Gnb;
