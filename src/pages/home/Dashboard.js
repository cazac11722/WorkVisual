import React from 'react';
import Header from '../../components/Header.js';
import Sidebar from '../../components/Sidebar.js';


const Dashboard = () => {
  return (
    <div className='wrap_inner border-top--main flex'>
      <Sidebar />
      <div className="row w100">
        <Header />
        <main>
          <section className="row padding-3em bg-viwe">
            <ul className="main_tab_head flex">
              <li>
                <label htmlFor="main_tab1" className="btn_tab active">프로젝트 처리 차트 </label>
              </li>
              <li>
                <label htmlFor="main_tab2" className="btn_tab">평균 업무 진행도</label>
              </li>
              <li>
                <label htmlFor="main_tab3" className="btn_tab">평균 작업 프로젝트</label>
              </li>
              <li>
                <label htmlFor="main_tab4" className="btn_tab">평균 업무시간</label>
              </li>
              <li>
                <label htmlFor="main_tab5" className="btn_tab">편균 최퇴근시간</label>
              </li>
            </ul>
            <ul className="main_tab_body bg-fff padding-x-1em padding-y-2em">
              <li><canvas id="myChart" width="300" height="100"></canvas></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

          </section>

          <section className="padding-3em">
            <h3 className="title">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="undefined">
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
              </svg>
              <span className="margin-left-1em">모든 프로젝트 내용</span>
            </h3>
            <table className="table-data">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>진행 날짜</th>
                  <th>시간</th>
                  <th>진행도(%)</th>
                  <th>종료날짜</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>새프로젝트 추가합니다.</td>
                  <td>2024.11.12</td>
                  <td>02:01:40</td>
                  <td>
                    <div className="flex">
                      <div></div>
                      <span>90%</span>
                    </div>
                  </td>
                  <td>2024.11.12</td>
                  <td>
                    <span className="betil betil-green">진행중</span>
                  </td>
                </tr>
                <tr>
                  <td>새프로젝트 추가합니다.</td>
                  <td>2024.11.12</td>
                  <td>02:01:40</td>
                  <td>
                    <div className="flex">
                      <div></div>
                      <span>90%</span>
                    </div>
                  </td>
                  <td>2024.11.12</td>
                  <td>
                    <span className="betil betil-green">진행중</span>
                  </td>
                </tr>
                <tr>
                  <td>새프로젝트 추가합니다.</td>
                  <td>2024.11.12</td>
                  <td>02:01:40</td>
                  <td>
                    <div className="flex">
                      <div></div>
                      <span>90%</span>
                    </div>
                  </td>
                  <td>2024.11.12</td>
                  <td>
                    <span className="betil betil-green">진행중</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="table-data-pageing">
              <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" className="arrow-left"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" className="arrow-right"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></li>
            </ul>
          </section>
        </main>
      </div>
    </div>

  );
};

export default Dashboard;
