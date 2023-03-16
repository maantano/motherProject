import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../component/Footer";
import Header from "../../../Header/Header";
import CenterVisual from "./CenterVisual";

const Center3 = () => {
  return (
    <div className="visitingcare info_fc">
      <Header />
      <CenterVisual />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li>
              <Link to="/center">방문간호</Link>
            </li>
            <li>
              <Link to="/center2">방문요양</Link>
            </li>
            <li>
              <Link to="/center3" className="on">
                {" "}
                가족요양
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="size">
        <div className="sub_wrap">
          <div className="sec">
            <h2
              className="sub_title"
              style={{ marginTop: 40, paddingBottom: 80 }}
            >
              가족요양
            </h2>
            <p class="pro_info mark">
              가족인 요양보호사가 어르신의 신체활동 지원 등에 대한 행위에 대해
              서비스 비용을 대행 <em class="fs">(고용/산재보험 가입가능)</em>
            </p>
            <table class="table_form">
              <colgroup>
                <col width="33.333%" />
                <col width="*" />
                <col width="*" />
              </colgroup>
              <thead>
                <tr>
                  <th>시간(일일)</th>
                  <th>60분</th>
                  <th>90분</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="first" style={{ textAlign: "center" }}>
                    시급
                  </td>
                  <td style={{ textAlign: "center" }}>18,000원</td>
                  <td style={{ textAlign: "center" }}>25,500원</td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: "left" }}>
              <p class="pro_info mark" style={{ textAlign: "left" }}>
                일일 60분 이상, 월 20일 이용 가능(일반방문요양 서비스 받은 날의
                경우, 이용 불가)
              </p>
              <p class="pro_info mark" style={{ textAlign: "left" }}>
                90분 이상, 31일 이용이 가능한 경우:{" "}
              </p>
              <p class="pro_info mark_sub" style={{ textAlign: "left" }}>
                65세 이상인 요양보호사가 배우자를 돌보는 경우{" "}
              </p>
              <p class="pro_info mark_sub" style={{ textAlign: "left" }}>
                어르신께서 폭력성향, 피해망상, 부적절한 성적 행동과 같은 문제
                행동을 보이는 경우
              </p>
              <p class="pro_info point_color" style={{ textAlign: "left" }}>
                <em class="mr">*</em>가족의 범위: 배우자, 직계혈족 및 형제자매,
                직계혈족의 배우자, 배우자의 직계혈족 및 배우자의 형제자매
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Center3;
