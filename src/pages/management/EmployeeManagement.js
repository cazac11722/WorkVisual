import React, { useEffect, useState } from 'react';
import Header from '../../components/Header.js';
import Sidebar from '../../components/Sidebar.js';
import IconWidget from '../../components/widget/icon_widget.js';
import ModalWidget from '../../components/widget/modal_widget.js';

const EmployeeManagement = () => {
    const [modalHidden, setModalHidden] = useState(true); // 모달 상태
    const [allUsers, setAllUsers] = useState([]); // 전체 사용자 데이터
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [loading, setLoading] = useState(false); // 로딩 상태

    const USERS_PER_PAGE = 5; // 한 페이지에 표시할 사용자 수

    // 전체 데이터에서 현재 페이지의 데이터 가져오기
    const getCurrentPageUsers = () => {
        const startIndex = (currentPage - 1) * USERS_PER_PAGE;
        const endIndex = startIndex + USERS_PER_PAGE;
        return allUsers.slice(startIndex, endIndex); // 현재 페이지의 데이터 반환
    };

    // API 호출로 모든 사용자 데이터 가져오기
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/api/accounts/users/`);
            if (response.ok) {
                const data = await response.json();

                // 각 사용자 데이터에 chk 값을 추가
                const updatedUsers = data.map(user => ({
                    ...user,
                    chk: true // 기본값으로 true 설정
                }));

                setAllUsers(updatedUsers); // 전체 사용자 데이터 설정
            } else {
                console.error('데이터를 가져오지 못했습니다.');
            }
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error);
        } finally {
            setLoading(false);
        }
    };

    // 컴포넌트 로드 시 데이터 가져오기
    useEffect(() => {
        fetchUsers();
    }, []);

    // 페이지 변경 핸들러
    const handlePageChange = (page) => {
        if (page > 0 && page <= Math.ceil(allUsers.length / USERS_PER_PAGE)) {
            setCurrentPage(page);
        }
    };

    const users = getCurrentPageUsers(); // 현재 페이지의 사용자 데이터 가져오기

    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <ModalWidget hidden={modalHidden} event={setModalHidden} loading={loading} users={allUsers} setUsers={setAllUsers} />
                <main>
                    <section className="row padding-3em bg-viwe">
                        <div className='box-bor '>
                            <div className='flex justify-content-between'>
                                <h3 className="title">
                                    <IconWidget icon="document" />
                                    <span className="margin-left">직원 관리</span>
                                </h3>
                                <button
                                    type='button'
                                    className='btn btn_modal padding-x-2em'
                                    onClick={() => setModalHidden(false)}
                                >
                                    <div className='icon'><IconWidget icon="userM" color="#fff" /></div>
                                    <span className='margin-left size1'>직원 선택</span>
                                </button>
                            </div>
                            <table className="table-data">
                                <thead>
                                    <tr>
                                        <th>순위</th>
                                        <th>이름</th>
                                        <th>직급</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="3" style={{ textAlign: 'center' }}>로딩 중...</td>
                                        </tr>
                                    ) : users.length > 0 ? (
                                        users
                                            .filter(user => user.chk) // chk가 true인 데이터만 필터링
                                            .map((user, index) => (
                                                <tr key={user.id}>
                                                    <td>{(currentPage - 1) * USERS_PER_PAGE + index + 1}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.is_staff ? '관리자' : '직원'}</td>
                                                </tr>
                                            ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" style={{ textAlign: 'center' }}>사용자가 없습니다.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <ul className="table-data-pageing">
                                <li
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className={currentPage === 1 ? 'disabled' : ''}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" className="arrow-left">
                                        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                                    </svg>
                                </li>
                                {[...Array(Math.ceil(allUsers.length / USERS_PER_PAGE))].map((_, pageIndex) => (
                                    <li
                                        key={pageIndex}
                                        className={pageIndex + 1 === currentPage ? 'active' : ''}
                                        onClick={() => handlePageChange(pageIndex + 1)}
                                    >
                                        {pageIndex + 1}
                                    </li>
                                ))}
                                <li
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    className={currentPage === Math.ceil(allUsers.length / USERS_PER_PAGE) ? 'disabled' : ''}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" className="arrow-right">
                                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default EmployeeManagement;
