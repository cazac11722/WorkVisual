import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconWidget from '../../components/widget/icon_widget';

const SigninPage = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', password2: '' });
    const [errors, setErrors] = useState({ username: '', email: '', password: '', password2: '', form: '' });
    const navigate = useNavigate();

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '', form: '' }); // 입력 시 에러 초기화
    };

    // 이메일 형식 검증
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = formData;

        // 유효성 검사
        let valid = true;
        const newErrors = { username: '', email: '', password: '', password2: '', form: '' };

        if (!username) {
            newErrors.username = '이름을 입력해주세요.';
            valid = false;
        }
        if (!email) {
            newErrors.email = '이메일을 입력해주세요.';
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = '올바른 이메일 형식이 아닙니다.';
            valid = false;
        }
        if (!password) {
            newErrors.password = '비밀번호를 입력해주세요.';
            valid = false;
        }
        if (!password2) {
            newErrors.password2 = '비밀번호 확인을 입력해주세요.';
            valid = false;
        } else if (password !== password2) {
            newErrors.password2 = '비밀번호가 일치하지 않습니다.';
            valid = false;
        }

        if (!valid) {
            setErrors(newErrors);
            return;
        }

        // 회원가입 API 요청
        try {
            const response = await fetch('https://cazac11722.pythonanywhere.com/api/accounts/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password, password2 }),
            });

            if (response.ok) {
                alert('회원가입 성공! 로그인 페이지로 이동합니다.');
                navigate('/WorkVisual/login');
            } else {
                const data = await response.json();

                // 서버에서 받은 에러 메시지 처리
                const serverErrors = { username: '', email: '', password: '', password2: '', form: '' };


                if (data.password) {
                    serverErrors.password = data.password.join('\n'); // 비밀번호 에러를 여러 줄로 처리
                }
                if (data.email) {
                    serverErrors.email = data.email.join('\n');
                }
                if (data.username) {
                    serverErrors.username = data.username.join('\n');
                }
                
                serverErrors.form = '회원가입 실패. 입력한 정보를 다시 확인해주세요.';
                setErrors(serverErrors);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setErrors({ ...errors, form: '서버 오류가 발생했습니다. 다시 시도해주세요.' });
        }
    };

    return (
        <div className='rows'>
            <form onSubmit={handleSubmit} className='form padding-x-2em padding-y-4em border w30'>
                <div className='margin-bottom-4em flex align-items-center justify-content-center'>
                    <div className='icon icon-border'><IconWidget icon="edit" color="#fff" /></div>
                    <h3 className='margin-left size2'>회원가입</h3>
                </div>

                {/* 이름 입력 */}
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
                    {errors.username && <p className='form_error'>{errors.username}</p>}
                </div>

                {/* 이메일 입력 */}
                <div className='form_group'>
                    <label className={`form_controller ${errors.email ? 'error' : ''}`} htmlFor='email'>
                        <div className='icon'><IconWidget icon="userd" color="#B7B7B7" /></div>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='form_controller'
                            placeholder='이메일을 입력해주세요.'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.email && <p className='form_error'>{errors.email}</p>}
                </div>

                {/* 비밀번호 입력 */}
                <div className='form_group'>
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

                {/* 비밀번호 확인 */}
                <div className='form_group'>
                    <label className={`form_controller ${errors.password2 ? 'error' : ''}`} htmlFor='password2'>
                        <div className='icon'><IconWidget icon="password" color="#B7B7B7" /></div>
                        <input
                            type='password'
                            id='password2'
                            name='password2'
                            className='form_controller'
                            placeholder='비밀번호 확인'
                            value={formData.password2}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.password2 && <p className='form_error'>{errors.password2}</p>}
                </div>

                {/* 전체 에러 메시지 */}
                {errors.form && <p className='form_error margin-bottom-2em'>{errors.form}</p>}

                {/* 가입하기 버튼 */}
                <div className='margin-bottom-2em'>
                    <button type='submit' className='btn w100 h4em'>
                        <div className='icon'><IconWidget icon="editS" color="#fff" /></div>
                        <span className='size1 margin-left'>가입하기</span>
                    </button>
                </div>

                {/* 로그인 링크 */}
                <div className='form_group flex align-items-center justify-content-center'>
                    <Link to="/WorkVisual/login">로그인 하기</Link>
                </div>
            </form>
        </div>
    );
};

export default SigninPage;
