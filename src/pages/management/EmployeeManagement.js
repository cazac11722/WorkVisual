import React from 'react';
import Header from '../../components/Header.js';
import Sidebar from '../../components/Sidebar.js';
import IconWidget from '../../components/widget/icon_widget.js';

const EmployeeManagement = () => {
    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main>
                    <section className="row padding-3em bg-viwe ">
                        <div className='box-bor'>
                            <div className='flex justify-content-between'>
                                <h3 className="title">
                                    <IconWidget icon="document" />
                                    <span className="margin-left-1em">직원 관리</span>
                                </h3>
                                <button>직원 선택</button>
                            </div>
                            <table className="table-data">
                                <thead>
                                    <tr>
                                        <th>순위</th>
                                        <th>이름</th>
                                        <th>총 업무 개수</th>
                                        <th>평균 완료 업무 시간</th>
                                        <th>진행도(%)</th>
                                        <th>직급</th>
                                        <th>기능</th>
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
                                        <td>
                                            <button type='button'></button>
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
                        </div>
                    </section>


                </main>
            </div>
        </div>
    );
}

export default EmployeeManagement;