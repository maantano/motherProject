import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../../component/Footer";
import Header from "../../../Header/Header";
import CenterVisual from "./CenterVisual";
import img2 from "../../../asset/img/main_bg1.jpeg";
const Center2 = () => {
  return (
    <div className="visitingcare info_vhc">
      <Header />
      <CenterVisual />
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li>
              <Link to="/center">방문간호</Link>
            </li>
            <li>
              <Link to="/center2" className="on">
                방문요양
              </Link>
            </li>
            <li>
              {/* <a href="/visitingcare/info_fc.php">가족요양</a> */}
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
            방문요양이란?
          </h2>
          <p className="pro_info">
            방문요양서비스는 재가급여 중 하나로 노인장기요양보험 등급을 받은
            어르신께 <br />
            웰더스의 전문 교육을 받은 요양보호사가 어르신 댁을 방문하여
            <br />
            신체활동지원, 인지활동지원, 인지관리지원, 정서지원,
            <br />
            가사 및 일상생활지원 등을 수급자의 기능상태 및 욕구 등을 반영하여
            제공하는 서비스입니다. <br />
            <br />
            웰더스 방문요양은 각 서비스와 영역별로 전문가들이 함께
            <br /> 어르신의 상태를 파악하고 케어의 방향을 제시하며 서비스를
            진행합니다.
          </p>
          <div className="sec1">
            <img src={img2} />
            <div className="txt">
              <p>
                안심하세요. <br />
                <b>
                  <span>돌봄이 필요하신 어르신</span>
                </b>
                에게 <b>1:1 맞춤서비스</b>로 <br />
                신체적, 정신적 도움을 제공하는 <b>전문요양보호사</b>가{" "}
                <b>
                  <span>직접 방문</span>
                </b>
                합니다.
              </p>
            </div>
          </div>
          <div className="sec2">
            <h2 className="sub_title">방문요양 이용안내</h2>
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
              <ul className="clear" style={{ height: 600 }}>
                <li>
                  <span>이용금액(단위 : 원)</span>
                  <div>
                    <table className="inner_table">
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
                          <td>30분 이상</td>
                          <th></th>
                          <td>16,190</td>
                          <td>2,420</td>
                          <td>1,450</td>
                          <td>970</td>
                        </tr>
                        <tr>
                          <td>60분 이상</td>
                          <th></th>
                          <td>23,480</td>
                          <td>3,520</td>
                          <td>2,110</td>
                          <td>1,400</td>
                        </tr>
                        <tr>
                          <td>90분 이상</td>
                          <th></th>
                          <td>31,650</td>
                          <td>4,740</td>
                          <td>2,840</td>
                          <td>1,890</td>
                        </tr>
                        <tr>
                          <td>120분 이상</td>
                          <th></th>
                          <td>40,280</td>
                          <td>6,040</td>
                          <td>3,620</td>
                          <td>2,410</td>
                        </tr>
                        <tr>
                          <td>150분 이상</td>
                          <th></th>
                          <td>46,970</td>
                          <td>7,040</td>
                          <td>4,220</td>
                          <td>2,810</td>
                        </tr>
                        <tr>
                          <td>
                            180분 이상
                            <br />
                            (3시간)
                          </td>
                          <th></th>
                          <td>52,880</td>
                          <td>7,930</td>
                          <td>4,750</td>
                          <td>3,170</td>
                        </tr>
                        <tr>
                          <td>210분 이상</td>
                          <th></th>
                          <td>58,930</td>
                          <td>8,830</td>
                          <td>5,300</td>
                          <td>3,530</td>
                        </tr>
                        <tr>
                          <td>
                            240분 이상
                            <br />
                            (4시간)
                          </td>
                          <th></th>
                          <td>65,000</td>
                          <td>9,750</td>
                          <td>5,850</td>
                          <td>3,900</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  <span>등급별 재가급여 월 한도액 (단위 : 원)</span>
                  <div>
                    <table className="inner_table">
                      <colgroup>
                        <col width="10%" />
                        <col width="0.5%;" />
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
                        </tr>
                        <tr className="txt">
                          <td colspan="100" rowspan="20" className="pd240">
                            <p>
                              월 이용한도액(공단부담 85% + 본인부담15%)은
                              장기요양등급별로 지급하는 금액이며, 한도액을
                              초과시 100% 본인 부담입니다.
                            </p>
                            <p>
                              위 금액은 법령(고시 등)에 따라 변경될 수 있습니다.
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
          <div className="sec3 sec" style={{ height: 400 }}>
            <h3 className="sub_t">이용절차</h3>
            <div className="step training">
              <ul className="clear">
                <li>
                  <div
                    className="con"
                    style={{ height: "166px", borderRadius: "166px" }}
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
                    style={{ height: "166px", borderRadius: "166px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          이용
                          <br />
                          계약
                        </p>
                        <span className="num">02</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">
                    서비스 이용
                    <br />
                    계약
                  </p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "166px", borderRadius: "166px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          컨퍼
                          <br />
                          런스
                        </p>
                        <span className="num">03</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">
                    어르신 건강
                    <br />
                    상태 확인
                    <br />
                    케어 컨퍼런스 진행
                  </p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "166px", borderRadius: "166px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          이용
                          <br />
                          계획
                        </p>
                        <span className="num">04</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">
                    케어플랜 및 <br />
                    서비스 계획 수립
                  </p>
                </li>
                <li>
                  <div
                    className="con"
                    style={{ height: "166px", borderRadius: "166px" }}
                  >
                    <div className="tb">
                      <div className="tbc">
                        <p>
                          서비스
                          <br />
                          이용
                        </p>
                        <span className="num">05</span>
                      </div>
                    </div>
                  </div>
                  <p className="detail_first">담당선생님 배정</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="sec5">
            <h2 className="sub_title">방문요양</h2>
            <h3 className="sub_t">방문요양 프로그램</h3>
            <p className="pro_info pro_info2">
              WRC 교육 과정에 맞혀 일상생활 체력 증진을 위한 자립생활 동작 훈련,
              보행훈련 등을 지원합니다.
            </p>
            <table className="table_form">
              <colgroup>
                <col width="24%;" />
                <col width="*" />
              </colgroup>
              <colgroup></colgroup>
              <tbody>
                <tr>
                  <th>신체활동지원</th>
                  <td>
                    <p>
                      세면도움, 구강청결도움, 식사도움, 몸단장, 옷갈아입기 도움,
                      머리감기 도움, 몸 씻기 도움, 화장실이용하기, 이동도움,
                      체위변경, 신체기능의 유지 및 증진
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>인지활동지원</th>
                  <td>
                    <p>
                      인지활동형 방문요양으로 인지자극활동, 일상생활 함께하기
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>인지관리지원</th>
                  <td>
                    <p>
                      인지행동변화 관리 등을 말하며 행동변화 감소도움 및 대처,
                      수급자 및 수발자 안전관리 도움 정서적 안정과 생활의욕
                      향상도움, 인지기능향상을 위한 인지활동 지원
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>정서지원</th>
                  <td>
                    <p>
                      의사소통 도움, 말벗, 격려, 위로 등 정서적 지원, 사회적
                      지지체계 연계와 관계망 연결, 비상연락망 준비 등 안부확인을
                      위한 방문 및 생활상의 문제 상담, 대화/편지/전화 등의
                      방법으로 수급자의 욕구 파악 및 의사 전달 대행
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>가사 및 일상생활지원</th>
                  <td>
                    <p>
                      외출시 동행, 장보기, 산책, 은행, 관공서, 병원 등 방문 시
                      부축 또는 동행(차량 이용 포함)하고 책임 귀가가 있으며,
                      수급자를 위한 음식물 조리, 설거지, 주방정리, 청소 및
                      주변정리 정돈, 의복세탁 및 관리
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Center2;
