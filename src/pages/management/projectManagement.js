import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import IconWidget from '../../components/widget/icon_widget';
import { Link } from 'react-router-dom';

const ProjectManagement = () => {
    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main>
                    <section className="row padding-3em bg-viwe">
                        <div className='flex justify-content-between'>
                            <h3 className="title">
                                <IconWidget icon="document" />
                                <span className="margin-left">업무 관리</span>
                            </h3>
                            <div className='flex'>
                                <button type='button' className='btn btn_modal padding-x-2em margin-right-1em' >
                                    <div className='icon'><IconWidget icon="userM" color="#fff" /></div>
                                    <span className='margin-left size1'>직원 업무 등록</span>
                                </button>
                                <Link to="/WorkVisual/business-settings" >
                                    <button type='button' className='btn btn_modal padding-x-2em margin-right-1em' >
                                        <div className='icon'><IconWidget icon="userM" color="#fff" /></div>
                                        <span className='margin-left size1'>업무 설정</span>
                                    </button>
                                </Link>
                                <button type='button' className='btn btn_modal padding-x-2em' >
                                    <div className='icon'><IconWidget icon="userM" color="#fff" /></div>
                                    <span className='margin-left size1'>직원 선택</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ProjectManagement;