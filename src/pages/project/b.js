import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../styles/b.css";

const BPage = () => {
    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main>
                    <div className='Row'>
                        <h3 className='Display_inline'>메일쓰기</h3><a href="#">임시보관 메일</a>
                        <form className='Display_inline F_right'>
                            <input className='search' type="text" placeholder='메일 검색'>
                            </input>
                            <select className='search_select'>
                                <option value="상세">상세</option>
                            </select>
                        </form>
                    </div>
                    {/* <hr className='hr'></hr> */}
                    <div className='Row P10'>
                        <ul className='menu'>
                            <li className='send'>보내기</li>
                            <li>예약</li>
                            <li>임시저장</li>
                            <li>미리보기</li>
                            <li>템플릿</li>
                            <li>내게쓰기</li>
                        </ul>
                        <ul className='icon F_right'>
                            <li>icon1</li>
                            <li>icon2</li>
                            <li>icon3</li>
                        </ul>
                    </div>
                    <div className='Row Border_none P10'>
                        <div className='titleArea'>
                            <h4 className='Display_inline F_left FW_lighter'>받는 사람</h4>
                            <div className='titleSub'>
                                <input className='ML5 Border_none' type='checkbox'>
                                </input>
                                <p className='Display_inline'>개인별</p>
                                <button className='q_button'>?</button>
                            </div>
                        </div>
                        <div className='under_line'>
                            <select className='Select'>
                                <option></option>
                            </select>
                            <button className='F_right'>주소록</button>
                        </div>
                    </div>
                    <div className='Row Border_none P10'>
                        <div className='titleArea'>
                            <h4 className='Display_inline F_left FW_lighter'>참조</h4>
                            <div className='titleSub'>
                                <select className='Border_none'>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className='under_line W100'>
                            <select className='F_right Border_none'>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className='Row Border_none P10'>
                        <div className='titleArea'>
                            <h4 className='Display_inline F_left FW_lighter'>제목</h4>
                            <div className='titleSub'>

                                <input className='ML5 Border_none' type='checkbox'>
                                </input>
                            </div>
                        </div>
                        <div className='under_line W100'>

                        </div>
                    </div>
                    <div className='Row Border_none'>
                        <div className='titleArea'>
                            <h4 className='Display_inline F_left FW_lighter'>파일첨부</h4>
                            <div className='titleSub'>

                                <select className='Border_none'>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className='under_line2 W100'>
                            <button className='file_button'>내PC</button>
                            <button className='file_button'>MYBOX</button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default BPage;