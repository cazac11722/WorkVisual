import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconWidget from '../../components/widget/icon_widget';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // AuthContext에서 login 함수 사용
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/accounts/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                login(data.token, { username }); // 토큰 저장
                navigate('/WorkVisual/'); // 로그인 후 대시보드로 이동
            } else {
                alert('로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='rows'>
            <form onSubmit={handleSubmit} className='form padding-x-2em padding-y-4em border w30'>
                <div className='margin-bottom-4em flex align-items-center justify-content-center'>
                    <div className='icon icon-border'><IconWidget icon="edit" color="#fff" /></div>
                    <h3 className='margin-left size2em'>로그인</h3>
                </div>
                <div className='form_group'>
                    <label className='form_controller' htmlFor='userid'>
                        <div className='icon'><IconWidget icon="user" color="#B7B7B7" /></div>
                        <input
                            type='text'
                            id='userid'
                            className='form_controller'
                            placeholder='아이디를 입력해주세요.'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div className='margin-bottom-4em'>
                    <label className='form_controller' htmlFor='password'>
                        <div className='icon'><IconWidget icon="password" color="#B7B7B7" /></div>
                        <input
                            type='password'
                            id='password'
                            className='form_controller'
                            placeholder='비밀번호를 입력해주세요.'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className='margin-bottom-2em'>
                    <button type='submit' className='btn w100'>
                        <div className='icon'><IconWidget icon="login" color="#fff" /></div>
                        <span className='size1em margin-left'>로그인</span>
                    </button>
                </div>
                <div className='from_group flex align-items-center justify-content-center'>
                    <Link to="/WorkVisual/password-find">비밀번호 찾기</Link>
                    <span className='padding-x-1em'>|</span>
                    <Link to="/WorkVisual/signin">회원가입 하기</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
