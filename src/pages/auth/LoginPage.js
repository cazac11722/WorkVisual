import React from 'react';
import { Link } from 'react-router-dom';
import IconWidget from '../../components/widget/icon_widget';

const LoginPage = () => {
    return (
        <div className='rows'>
            <form method='post' className='form padding-x-2em padding-y-4em border w30' >
                <div className='margin-bottom-4em flex align-items-center justify-content-center'>
                    <div className='icon icon-border'><IconWidget icon="edit" color="#fff" /></div>
                    <h3 className='margin-left size2em'>로그인</h3>
                </div>
                <div className='form_group'>
                    <label className='form_controller' htmlFor='userid'>
                        <div className='icon'><IconWidget icon="user" color="#B7B7B7" /></div>
                        <input type='text' id='userid' className='form_controller' placeholder='아이디을 입력해주세요.' />
                    </label>
                </div>
                <div className='margin-bottom-4em'>
                    <label className='form_controller' htmlFor='password'>
                        <div className='icon'><IconWidget icon="password" color="#B7B7B7" /></div>
                        <input type='password' id='password' className='form_controller' placeholder='비밀번호를 입력해주세요.' />
                    </label>
                </div>
                <div className='margin-bottom-2em'>
                    <button type='button' className='btn w100'>
                        <div className='icon'><IconWidget icon="login" color="#fff"  /></div>
                        <span className='size1em margin-left'>로그인</span>
                    </button>
                </div>
                <div className='from_group flex align-items-center justify-content-center'>
                    <Link to="/password-find" >비밀번호 찾기</Link>
                    <span className='padding-x-1em'>|</span>
                    <Link to="/signin" >회원가입 하기</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;