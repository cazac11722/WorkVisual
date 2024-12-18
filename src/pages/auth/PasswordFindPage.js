import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconWidget from '../../components/widget/icon_widget';

const PasswordFindPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const response = await fetch('http://localhost:8000/api/accounts/password-reset/', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email }),
        //     });

        //     if (response.ok) {
        //         setMessage('비밀번호 재설정 이메일이 전송되었습니다. 이메일을 확인해주세요.');
        //     } else {
        //         setMessage('이메일 전송에 실패했습니다. 다시 시도해주세요.');
        //     }
        // } catch (error) {
        //     console.error('Error sending password reset email:', error);
        //     setMessage('서버 오류가 발생했습니다.');
        // }
    };

    return (
        <div className='rows'>
            <form onSubmit={handleSubmit} className='form padding-x-2em padding-y-4em border w30'>
                <div className='margin-bottom-4em flex align-items-center justify-content-center'>
                    <div className='icon icon-border'><IconWidget icon="edit" color="#fff" /></div>
                    <h3 className='margin-left size2em'>비밀번호 찾기</h3>
                </div>
                <div className='form_group'>
                    <label className='form_controller' htmlFor='email'>
                        <div className='icon'><IconWidget icon="userd" color="#B7B7B7" /></div>
                        <input
                            type='email'
                            id='email'
                            className='form_controller'
                            placeholder='이메일을 입력해주세요.'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='margin-bottom-2em'>
                    <button type='submit' className='btn w100'>
                        <div className='icon'><IconWidget icon="editS" color="#fff" /></div>
                        <span className='size1em margin-left'>비밀번호 재설정</span>
                    </button>
                </div>
                {message && <p>{message}</p>}
                <div className='from_group flex align-items-center justify-content-center'>
                    <Link to="/WorkVisual/login">로그인 하기</Link>
                </div>
            </form>
        </div>
    );
};

export default PasswordFindPage;
