import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconWidget from '../../components/widget/icon_widget';

const SigninPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/accounts/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password, password2 }),
                credentials: 'include',
            });

            if (response.ok) {
                alert('회원가입 성공! 로그인 페이지로 이동합니다.');
                navigate('/WorkVisual/login');
            } else {
                const data = await response.json();
                alert(`회원가입 실패: ${JSON.stringify(data)}`);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className='rows'>
            <form onSubmit={handleSubmit} className='form padding-x-2em padding-y-4em border w30'>
                <div className='margin-bottom-4em flex align-items-center justify-content-center'>
                    <div className='icon icon-border'><IconWidget icon="edit" color="#fff" /></div>
                    <h3 className='margin-left size2em'>회원가입</h3>
                </div>
                <div className='form_group'>
                    <label className='form_controller' htmlFor='name'>
                        <div className='icon'><IconWidget icon="user" color="#B7B7B7" /></div>
                        <input
                            type='text'
                            id='name'
                            className='form_controller'
                            placeholder='이름을 입력해주세요.'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form_group'>
                    <label className='form_controller' htmlFor='email'>
                        <div className='icon'><IconWidget icon="email" color="#B7B7B7" /></div>
                        <input
                            type='email'
                            id='email'
                            className='form_controller'
                            placeholder='이메일을 입력해주세요.'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form_group'>
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
                <div className='form_group'>
                    <label className='form_controller' htmlFor='password2'>
                        <div className='icon'><IconWidget icon="password" color="#B7B7B7" /></div>
                        <input
                            type='password'
                            id='password2'
                            className='form_controller'
                            placeholder='비밀번호 확인'
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </label>
                </div>
                <div className='margin-bottom-2em'>
                    <button type='submit' className='btn w100'>
                        <div className='icon'><IconWidget icon="editS" color="#fff" /></div>
                        <span className='size1em margin-left'>가입하기</span>
                    </button>
                </div>
                <div className='from_group flex align-items-center justify-content-center'>
                    <Link to="/WorkVisual/password-find">비밀번호 찾기</Link>
                    <span className='padding-x-1em'>|</span>
                    <Link to="/WorkVisual/login">로그인 하기</Link>
                </div>
            </form>
        </div>
    );
};

export default SigninPage;
