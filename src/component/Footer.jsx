import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="top">
        <div
          className="size "
          style={{ borderTop: "1px solid #e4e4e4", paddingTop: 15 }}
        >
          <div
            className="inner clear"
            style={{ borderBottom: "1px solid #e4e4e4" }}
          >
            <strong className="footerTitle">청솔재가노인센터</strong>
            <div className="left" style={{ paddingTop: 20 }}>
              <p className="clear" style={{ height: "25px" }}>
                <b style={{ paddingRight: 10 }}>대표번호</b>
                <span className="num" style={{ paddingRight: 20 }}>
                  1234-5678
                </span>
                <b style={{ paddingRight: 10 }}>상담가능시간</b>
                <span style={{ paddingRight: 20 }}>
                  월요일 ~ 토요일 &nbsp;&nbsp;09 : 00 ~ 18 : 00 ( 이후 유선 상담
                  )
                </span>
                <span>일요일 &nbsp;&nbsp;유선상담 가능</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info" style={{ paddingTop: 10 }}>
        <div className="size">
          <div className="inner">
            <p>
              <span style={{ paddingRight: 20 }}>
                서울특별시 동작구 상도로47길 12
              </span>
              <em className="mbr">
                <span style={{ paddingRight: 20 }}>T. 1234-5678</span>
              </em>
              <em className="mbr">
                <span style={{ paddingRight: 20 }}>
                  사업자번호 :000-00-000000
                </span>
                <span style={{ paddingRight: 20 }}>대표자 : 김현정</span>
              </em>
            </p>
            <span className="copy" style={{ paddingBottom: 20 }}>
              Copyright(c) 2023 Chungsol. All Rights reserved.
            </span>

            {/* <div className="util clear">
              <a href="/member/agree.php">이용약관</a>
              <a href="/member/policy.php">개인정보취급방침</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
