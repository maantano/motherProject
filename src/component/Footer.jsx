import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="top">
        <div className="size ">
          <div className="inner clear">
            <div className="left">
              <p className="clear">
                <b>대표번호</b>
                <span className="num">1566-6597</span>
              </p>
            </div>
            <div className="left time">
              <p>
                <b>상담가능시간</b>
                <span>
                  월요일 ~ 토요일 &nbsp;&nbsp;09 : 00 ~ 18 : 00 ( 이후 유선 상담
                  )
                </span>
                <span>일요일 &nbsp;&nbsp;유선상담 가능</span>
              </p>
            </div>

            <div className="sns clear">
              {/* <a href="javascript:;"></a>
              <a href="https://blog.naver.com/alpacochae" target="_blank"></a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="size">
          <div className="inner">
            <b>웰더스 시니어 케어</b>
            <p>
              <span>경기도 성남시 분당구 장안로 39, 한일빌딩 5층 (분당동)</span>
              <em className="mbr">
                <span>T. 1566-6597</span>
              </em>
              <em className="mbr">
                <span>사업자번호 :239-88-01492</span>
                <span>대표자 : 박미례</span>
              </em>
            </p>
            <span className="copy">
              Copyright(c) 2019 WELDERS. All Rights reserved.
            </span>

            <div className="util clear">
              <a href="/member/agree.php">이용약관</a>
              <a href="/member/policy.php">개인정보취급방침</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
