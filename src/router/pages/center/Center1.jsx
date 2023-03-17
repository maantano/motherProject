import { Link } from "react-router-dom";
import React from "react";
import img1 from "../../../asset/img/main_bg1.jpeg";
import Header from "../../../Header/Header";
import CenterVisual from "./CenterVisual";
import Footer from "../../../component/Footer";
const Center1 = () => {
  return (
    <div className="visitingcare info_vn">
      <Header />
      <CenterVisual />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li>
              <Link to="/center" className="on">
                방문간호
              </Link>
            </li>
            <li>
              <Link to="/center2">방문요양</Link>
            </li>
            <li>
              <Link to="/center3">가족요양</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="size">
        <div className="sub_wrap">
          <h2
            className="sub_title"
            style={{ marginTop: 40, paddingBottom: 80 }}
          >
            방문간호 서비스란?
          </h2>
          <p className="pro_info">
            65세 이상 노인 또는 65세 미만 노인성 질환으로
            <br />
            노인 장기요양보험의 등급판정을 받은 대상자에 대/해
            <br />
            필요한 방문 간호 서비스를 제공해 드리는 제도입니다.
            <br />
            의사, 한의원 또는 치과의사의 방문간호 지시서에 따라
            <br />
            어르신의 가정 등을 방문하여
            <br />
            간호, 진료보조, 운동에 필요하신 어르신들의
            <br />
            운동 서비스를 제공해 드립니다. <br />
          </p>
          <div className="sec1">
            <img src={img1} />
            <div className="txt">
              <p>
                안심하세요. <br />
                <b>
                  <span>운동이 필요하신 어르신</span>의 운동과 건강관리
                </b>
                까지 <br />
                믿고 맡길 수 있는{" "}
                <b>
                  재활전문간호사가 <span>직접 방문</span>
                </b>
                합니다.
              </p>
            </div>
          </div>
          <div className="sec2">
            <h2 className="sub_title">
              어르신과 보호자분은{" "}
              <em className="mbr">어떤 모습을 원하시나요?</em>
            </h2>
            <img src={img1} />
          </div>
          <div className="sec3">
            <h2 className="sub_title">방문간호가 필요하신 어르신</h2>
            <ul className="clear" style={{ height: 460 }}>
              <li>
                <img src={img1} />
                <div className="info y_txt">
                  <div className="txt">
                    <div className="tb">
                      <div className="tbc">
                        <span>
                          뇌혈관 질환으로 몸이
                          <br />
                          불편하신 어르신
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="list">
                    <ul className="clear">
                      <li>일상생활 밀착형 운동처방</li>
                      <li>생활습관 개선</li>
                      <li>자립케어</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <img src={img1} />
                <div className="info y_txt">
                  <div className="txt">
                    <div className="tb">
                      <div className="tbc">
                        <span>
                          거동이 불편하신 <br />
                          치매 어르신
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="list">
                    <ul className="clear">
                      <li>관절 운동을 통한 움직임 개선</li>
                      <li>뇌기능개선 활동</li>
                      <li>욕창예방</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <img src={img1} />
                <div className="info y_txt">
                  <div className="txt">
                    <div className="tb">
                      <div className="tbc">
                        <span style={{ lineHeight: "45px !important" }}>
                          건강 매니지먼트
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="list">
                    <ul className="clear">
                      <li>어르신 건강관리 및 복약관리</li>
                      <li>어르신 진료보조</li>
                      <li>홈케어 서포트 및 가족 상담</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="sec4">
            <h2 class="sub_title">방문간호 이용안내</h2>
            <table class="table_form">
              <colgroup>
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <colgroup></colgroup>
              {/* <colgroup>
						<col width="20%;">
						<col width="*">
					</colgroup><colgroup>
                    </colgroup> */}
              <tbody>
                <tr>
                  <th>이용대상</th>
                  <td>
                    <p>장기요양등급 대상자</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sec5 sec">
            <div className="info_table">
              <p
                style={{
                  textAlign: "right",
                  paddingBottom: "10px",
                  fontSize: "16px",
                }}
              >
                (2023년 기준)
              </p>
              <ul className="clear" style={{ height: 300 }}>
                <li>
                  <span>이용료 안내 (단위 : 원)</span>
                  <div style={{ height: "260px" }}>
                    <table class="inner_table">
                      <colgroup>
                        <col width="20%" />
                        <col width="0.5%;" />
                        <col width="18%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col width="20%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>이용시간</th>
                          <th className="color_none"></th>
                          <th>23년 수가</th>
                          <th>
                            본인부담
                            <br />
                            일반(15%)
                          </th>
                          <th>
                            본인부담
                            <br />
                            9%감경
                          </th>
                          <th>
                            본인부담
                            <br />
                            6%감경
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>30분 미만</td>
                          <th></th>
                          <td>39,440</td>
                          <td>5,916</td>
                          <td>3,550</td>
                          <td>2,366</td>
                        </tr>
                        <tr>
                          <td>30분 이상~60분 미만</td>
                          <th></th>
                          <td>49,460</td>
                          <td>7,419</td>
                          <td>4,451</td>
                          <td>2,968</td>
                        </tr>
                        <tr>
                          <td>60분 이상</td>
                          <th></th>
                          <td>59,500</td>
                          <td>8,925</td>
                          <td>5,355</td>
                          <td>3,570</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  <span>등급별 재가급여 월 한도액 (단위 : 원)</span>
                  <div style={{ height: "260px" }}>
                    <table className="inner_table">
                      <colgroup>
                        <col width="10%" />
                        <col width="0.5%;" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>등급</th>
                          <th className="color_none"></th>
                          <th>1등급</th>
                          <th>2등급</th>
                          <th>3등급</th>
                          <th>4등급</th>
                          <th>5등급</th>
                          <th>
                            인지지원
                            <br />
                            등급
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <th></th>
                          <td>1,885,000</td>
                          <td>1,690,000</td>
                          <td>1,417,200</td>
                          <td>1,306,200</td>
                          <td>1,121,100</td>
                          <td>624,600</td>
                        </tr>
                        <tr className="txt">
                          <td colspan="100" rowspan="20" className="pb33">
                            <p>
                              월 이용한도액(공단부담 85% + 본인부담15%)은
                              장기요양등급별로 지급하는 금액이며, 한도액을
                              초과시 100% 본인 부담입니다.
                            </p>
                            <p>
                              위 금액은 법령(고시 등)에 따라 변경될 수 있습니다.{" "}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="sec6 sec">
            <h3 className="sub_t">이용절차</h3>
            <div className="step">
              <ul className="clear" style={{ height: "150px" }}>
                <li>
                  <div
                    className="con"
                    style={{ height: "144px", borderRadius: "144px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          이용
                          <br />
                          문의
                        </p>
                        <span className="num">01</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">전화/방문</p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "144px", borderRadius: "144px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          의료
                          <br />
                          기관
                        </p>
                        <span className="num">02</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">
                    방문간호 <br />
                    지시서 발급
                  </p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "144px", borderRadius: "144px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          이용
                          <br />
                          계약
                        </p>
                        <span className="num">03</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">
                    서비스
                    <br />
                    이용계약
                  </p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "144px", borderRadius: "144px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          컨퍼
                          <br />
                          런스
                        </p>
                        <span className="num">04</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">
                    간호 + 재활직종 <br />
                    케어매니지먼트 <br />, 월 평가 및 주간보고 진행
                  </p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "144px", borderRadius: "144px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          이용
                          <br />
                          계획
                        </p>
                        <span className="num">05</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">
                    케어플랜 및 <br />
                    운동계획 수립
                  </p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "144px", borderRadius: "144px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          서비스
                          <br />
                          이용
                        </p>
                        <span className="num">06</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">담당선생님 배정</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="sec8">
            <h2 className="sub_title">방문간호</h2>

            <h3 className="sub_t">방문간호 프로그램</h3>
            <div className="sec1 sec">
              <table className="table_form">
                <colgroup>
                  <col width="24%;" />
                  <col width="*" />
                </colgroup>
                <colgroup></colgroup>
                <tbody>
                  <tr>
                    <th>리스크 관리</th>
                    <td>
                      <p>
                        어르신 안전사고의 절반 이상을 차지하는 낙상사고를
                        예방하기 위한 집안 환경 조성 및 생활체력 증진 운동을
                        통해 낙상으로 인한 골절, 수술 후 오랜 침상생활, 이차적
                        합병증이 발생하지 않도록 도와드립니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>욕창관리</th>
                    <td>
                      <p>
                        욕창은 치료기간이 장기간이므로 미리 예방하는 것이
                        무엇보다 중요합니다. 거동이 불편하신 어르신의 경우
                        피부변화 체크 및 체위변경을 통해 관리해 드리며 고위험군
                        어르신(근감소증, 급속한 체중변화, 당뇨, 와상 등) 의 경우
                        초기의 빠른 대처로 욕창을 예방할 수 있도록 도와드립니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>고혈압, 당뇨 관리</th>
                    <td>
                      <p>
                        어르신의 건강한 생활 습관으로 만성질환을 관리하기 위해
                        혈압, 혈당을 확인하여 약물복용, 합병증 발생 유무,
                        생활습관 개선에 대한 체계적인 질환관리를 도와드립니다
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="sec9 sec">
            <h3 className="sub_t">방문간호재활 프로그램</h3>
            <div className="sec1">
              <table className="table_form">
                <colgroup>
                  <col width="24%;" />
                  <col width="*" />
                </colgroup>
                <colgroup></colgroup>
                <tbody>
                  <tr>
                    <th>건강상태 관찰</th>
                    <td>
                      <p>
                        방문간호 시 어르신의 건강평가를 통해 주기적인 건강상태를
                        파악하고 건강이상 신호를 체크하여 빠르게 조치할 수
                        있도록 도와드립니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>관절운동</th>
                    <td>
                      <p>
                        관절운동은 움직임의 제한으로 인해 뻣뻣한 관절을 부드럽게
                        만들어 주어 어르신이 편안하게 생활하고 움직일 수 있도록
                        도와주는 운동입니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>근육이완</th>
                    <td>
                      <p>
                        근육이완은 스트레칭을 통해 순환을 증진시켜 근경련 완화,
                        통증 완화, 체온증가로 인한 면역력 증가에 도움이 되는
                        운동입니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>생활체력 증진</th>
                    <td>
                      <p>
                        일상생활 밀착형 운동으로 어르신이 쉽고 간단한 운동을
                        반복적으로 진행하여 근력 향상 및 체력을 유지할 수 있도록
                        도와주는 운동입니다.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Center1;
