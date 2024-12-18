import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import '../../assets/styles/a.css';

const APage = () => {
  return (
    <div className="wrap_inner border-top--main flex">
      <Sidebar />
      <div className="row w100">
        <Header />
        <main>
          <div className="M-top-bottom_1 L-H">
            <span className="M-left-right_1 font-bold font-size_1">
              메일쓰기
            </span>
            <span className="font-col_gray font-size_1M">임시보관 메일4</span>
            <span className="M-right_1 float-right B-radius_2 BG-col-gray-op_50 W_20 H_2">
              <span className="M-left_1 op_2M">
                <input
                  className="B_none M-top_1 BG-col-gray-op_50 "
                  type="text"
                  placeholder="메일 검색"
                ></input>
              </span>
              <span className="float-right M-right_1 font-col_gray">상세▼</span>
              <img className="float-right" src="#" art="#" />
            </span>
          </div>
          <hr className="line"></hr>
          <div className="M-top-bottom_0M">
            <span className="M-left_1">
              <span className="M-left-right_1 font-size_1 SM B-radius_03 font-bold">
                보내기
              </span>
              <span className=" font-col_st font-size_1 BTN B-radius_03">
                예약
              </span>
              <span className=" font-col_st font-size_1 BTN B-radius_03">
                임시저장
              </span>
              <span className=" font-col_st font-size_1 BTN B-radius_03">
                미리보기
              </span>
              <span className=" font-col_st font-size_1 BTN B-radius_03">
                템플릿
              </span>
              <span className="  font-size_1 font-bold">
                <img src="#"></img>내게쓰기
              </span>
            </span>
            <span className="float-right M-right_1">
              <img src="#"></img>
              <img src="#"></img>
              <img src="#"></img>
            </span>
          </div>
          <hr className="line2"></hr>
          <div>
            <div className="flex flex_AC">
              <span>
                <span className="M-left_1 M-right_2 font-bold">받는사람</span>
                <input className="M-right_0M" type="checkbox"></input>
                <span className="M-right_02">개인별</span>
                <button>?</button>
              </span>
              <span className="flex flex_9 flex_AC B_bottom M-top_1 M-right_1">
                <input
                  className="W_100P H_2 B_none P-left_1"
                  type="text"
                ></input>
                <span className="float-right M-right_1">&or;</span>
                <button className="float-right M-right_1 W_5">주소록</button>
              </span>
            </div>

            <div className="flex flex_AC">
              <span>
                <span className="M-left_1 M-right_2 font-bold">참조</span>
                <span className="M-left_1C M-right_4">&or;</span>
              </span>
              <span className="flex flex_9 flex_AC B_bottom M-top_1 M-right_1">
                <input
                  className="W_100P H_2 B_none P-left_1"
                  type="text"
                ></input>
                <span className="float-right M-right_1">&or;</span>
              </span>
            </div>

            <div className="flex flex_AC">
              <span>
                <span className="M-left_1 M-right_2 font-bold">제목</span>
                <input className="M-left_2C M-right_0M" type="checkbox"></input>
                <span className="M-right_02">중요</span>
                <span className="M-right_1M">!</span>
              </span>
              <span className="flex flex_9 flex_AC B_bottom M-top_1 M-right_1">
                <input
                  className="W_100P H_2 B_none P-left_1"
                  type="text"
                ></input>
              </span>
            </div>

            <div className="flex flex_AC">
              <span>
                <span className="M-left_1 M-right_2 font-bold">파일첨부</span>
                <span className="M-right_4C">&or;</span>
              </span>
              <span className="flex flex_9 flex_AC M-top_1 M-right_1">
                <span className="BTN2 B-radius_03 M-right_0M">내 PC</span>
                <span className="BTN2 B-radius_03">MYBOX</span>
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default APage;
