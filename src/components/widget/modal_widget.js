import React from 'react';
import IconWidget from './icon_widget';

const ModalWidget = (props) => {
    return (
        <div className="modal" hidden={props.hidden}>
            <div className='modal-header'>
                <label htmlFor='all' className='modal-checkbox'><input type='checkbox' id='all' className='modal_controller' /></label>
                <h3>팀원 리스트</h3>
                <div className='modal-close' onClick={() => {
                    props.event(true);
                }} ><IconWidget icon="close" color="#fff" /></div>
            </div>
            <div className='modal-contents'>
                <ul className='modal-list'>
                    {
                        props.loading ? (
                            <li>로디중...</li>
                        ) : props.users.length > 0 ? (
                            props.users.map((user, index) => (
                                <li key={user.id}>
                                    <label htmlFor='item1' className='modal-checkbox'><input type='checkbox' id='item1' className='modal_controller' /></label>
                                    <div className='text'><IconWidget icon="userd" color="#000" /><span>{user.username}</span></div>
                                </li>
                            ))
                        ) : (
                            <li style={{ textAlign: 'center' }}>사용자가 없습니다.</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default ModalWidget;