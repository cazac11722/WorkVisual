import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconWidget from '../../components/widget/icon_widget';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '', form: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '', form: '' }); // 입력 시 에러 메시지 초기화
    };

    // 이메일 형식 검사 함수
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // 로그인 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        // 입력값 검증
        let valid = true;
        const newErrors = { username: '', password: '', form: '' };

        if (!username) {
            newErrors.username = '이름을 입력해주세요.';
            valid = false;
        } 

        if (!password) {
            newErrors.password = '비밀번호를 입력해주세요.';
            valid = false;
        }

        if (!valid) {
            setErrors(newErrors);
            return;
        }

        // 로그인 요청
        try {
            const response = await fetch('https://cazac11722.pythonanywhere.com/api/accounts/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.token, { username });
                navigate('/WorkVisual/'); // 로그인 성공 후 리다이렉트
            } else {
                setErrors({ ...errors, form: '로그인 실패: 아이디 또는 비밀번호를 확인해주세요.' });
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrors({ ...errors, form: '서버 오류가 발생했습니다. 다시 시도해주세요.' });
        }
    };

    return (
        <div className='rows'>
            <form onSubmit={handleSubmit} className='form padding-x-2em padding-y-4em border w30'>
                <div className='margin-bottom-4em flex align-items-center justify-content-center'>
                    <div className='icon icon-border'><IconWidget icon="edit" color="#fff" /></div>
                    <h3 className='margin-left size2'>로그인</h3>
                </div>

                {/* 이메일 입력 */}
                <div className='form_group'>
                    <label className={`form_controller ${errors.username ? 'error' : ''}`} htmlFor='username'>
                        <div className='icon'><IconWidget icon="user" color="#B7B7B7" /></div>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            className='form_controller'
                            placeholder='이름을 입력해주세요.'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.username && <p className='form_error '>{errors.username}</p>}
                </div>

                {/* 비밀번호 입력 */}
                <div className='margin-bottom-2em'>
                    <label className={`form_controller ${errors.password ? 'error' : ''}`} htmlFor='password'>
                        <div className='icon'><IconWidget icon="password" color="#B7B7B7" /></div>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='form_controller'
                            placeholder='비밀번호를 입력해주세요.'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.password && <p className='form_error'>{errors.password}</p>}
                </div>

                {/* 전체 에러 메시지 */}
                {errors.form && <p className='form_error margin-bottom-2em'>{errors.form}</p>}

                {/* 로그인 버튼 */}
                <div className='margin-bottom-2em'>
                    <button type='submit' className='btn w100'>
                        <div className='icon'><IconWidget icon="login" color="#fff" /></div>
                        <span className='size1 margin-left'>로그인</span>
                    </button>
                </div>

                {/* 회원가입 링크 */}
                <div className='form_group flex align-items-center justify-content-center'>
                    <Link to="/WorkVisual/signin">회원가입 하기</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
