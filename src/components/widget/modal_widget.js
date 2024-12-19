import React, { useEffect, useState } from 'react';
import IconWidget from './icon_widget';

const ModalWidget = (props) => {
    const [isAllChecked, setIsAllChecked] = useState(false); // 전체 체크 상태

    // 개별 체크박스 상태 변경 핸들러
    const handleCheckboxChange = (userId) => {
        const updatedUsers = props.users.map((user) => {
            if (user.id === userId) {
                return { ...user, chk: !user.chk }; // chk 값 토글
            }
            return user;
        });
        props.setUsers(updatedUsers); // 부모 컴포넌트 상태 업데이트
    };

    // 전체 체크박스 상태 변경 핸들러
    const handleAllCheckboxChange = (isChecked) => {
        const updatedUsers = props.users.map((user) => ({
            ...user,
            chk: isChecked, // 모든 chk 값을 변경
        }));
        props.setUsers(updatedUsers); // 부모 컴포넌트 상태 업데이트
        setIsAllChecked(isChecked); // 전체 체크 상태 업데이트
    };

    // 모든 개별 체크박스가 체크되었는지 확인
    useEffect(() => {
        const allChecked = props.users.length > 0 && props.users.every((user) => user.chk);
        setIsAllChecked(allChecked); // 전체 체크박스 상태 업데이트
    }, [props.users]);

    return (
        <div className="modal" hidden={props.hidden}>
            <div className='modal-header'>
                <label htmlFor='all' className='modal-checkbox'>
                    <input
                        type='checkbox'
                        id='all'
                        className='modal_controller'
                        checked={isAllChecked} // 전체 체크박스 상태
                        onChange={(e) => handleAllCheckboxChange(e.target.checked)} // 전체 체크박스 핸들러
                    />
                </label>
                <h3>팀원 리스트</h3>
                <div
                    className='modal-close'
                    onClick={() => {
                        props.event(true);
                    }}
                >
                    <IconWidget icon="close" color="#fff" />
                </div>
            </div>
            <div className='modal-contents'>
                <ul className='modal-list'>
                    {props.loading ? (
                        <li>로딩 중...</li>
                    ) : props.users.length > 0 ? (
                        props.users.map((user, index) => (
                            <li key={user.id}>
                                <label htmlFor={'item' + user.id} className='modal-checkbox'>
                                    <input
                                        type='checkbox'
                                        id={'item' + user.id}
                                        className='modal_controller'
                                        checked={user.chk} // 개별 체크박스 상태
                                        onChange={() => handleCheckboxChange(user.id)} // 개별 체크박스 변경 핸들러
                                    />
                                </label>
                                <div className='text'>
                                    <IconWidget icon="userd" color="#000" />
                                    <span>{user.username}</span>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li style={{ textAlign: 'center' }}>사용자가 없습니다.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ModalWidget;
