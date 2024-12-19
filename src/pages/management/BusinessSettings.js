import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import IconWidget from '../../components/widget/icon_widget';

const BusinessSettings = () => {
    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main className='bg-viwe'>
                    <section className="row padding-3em ">
                        <div className='flex justify-content-between'>
                            <h3 className="title">
                                <IconWidget icon="document" />
                                <span className="margin-left">업무 설정</span>
                            </h3>
                            <button type='button' className='btn btn_modal padding-x-2em' >
                                <div className='icon'><IconWidget icon="arrow_back" color="#fff" /></div>
                                <span className='margin-left size1'>뒤로가기</span>
                            </button>
                        </div>
                        <div className='box-bor margin-top-2em flex padding-none h40em'>
                            <div className='nk-ibx-aside toggle-screen-lg'>
                                <div className='nk-ibx-head'>
                                    <h5 class="size1_5">업무 초기 설정</h5>
                                    <button>
                                        <span>추가</span>
                                    </button>
                                </div>
                                <div className='nk-ibx-nav simplebar-scrollable-y'>
                                    <div className='simplebar-wrapper'>
                                        <div className='simplebar-content'>
                                            <ul className='nk-ibx-menu padding-x-1em padding-y-1em'>
                                                <li className='active'>
                                                    <span class="nk-ibx-menu-text">업무 제목1</span>
                                                    <span class="badge bg-light rounded-pill">4</span>
                                                </li>
                                                <li>
                                                    <span class="nk-ibx-menu-text">업무 제목2</span>
                                                    <span class="badge bg-light rounded-pill">4</span>
                                                </li>
                                                <li>
                                                    <span class="nk-ibx-menu-text">업무 제목3</span>
                                                    <span class="badge bg-light rounded-pill">4</span>
                                                </li>
                                                <li>
                                                    <span class="nk-ibx-menu-text">업무 제목4</span>
                                                    <span class="badge bg-light rounded-pill">4</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='nk-ibx-body bg-white'>
                                <div className='nk-ibx-head'>
                                    <div className='nk-ibx-head-actions'>
                                        <div className='nk-ibx-head-check'>
                                            <div className='custom-control custom-control-sm custom-checkbox'>
                                                <input type="checkbox" class="custom-control-input nk-dt-item-check" id="conversionAll" />
                                                <label class="custom-control-label" for="conversionAll"></label>
                                            </div>
                                        </div>
                                        <ul className='nk-ibx-head-tools margin-left'>
                                            <li>
                                                <button className='btn btn-icon btn-trigger'>
                                                    <IconWidget icon="replay" height="18px" />
                                                </button>
                                            </li>
                                            <li>
                                                <button className='btn btn-icon btn-trigger'>
                                                    <IconWidget icon="exit_to_app" height="18px" />
                                                </button>
                                            </li>
                                            <li>
                                                <button className='btn btn-icon btn-trigger'>
                                                    <IconWidget icon="delete" height="18px" />
                                                </button>
                                            </li>
                                            <li>
                                                <button className='btn btn-icon btn-trigger'>
                                                    <IconWidget icon="more_vert" height="18px" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className='nk-ibx-head-actions'>
                                        <li>
                                            <button className='btn btn-icon btn-trigger'>
                                                <IconWidget icon="arrow_back" height="18px" />
                                            </button>
                                        </li>
                                        <li>
                                            <button className='btn btn-icon btn-trigger'>
                                                <IconWidget icon="arrow_forward" height="18px" />
                                            </button>
                                        </li>
                                        <li>
                                            <button className='btn btn-icon btn-trigger'>
                                                <IconWidget icon="search" height="25px" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className='nk-ibx-list simplebar-scrollable-y'>
                                    <div className='simplebar-wrapper'>
                                        <div className='simplebar-content'>
                                            <ul className='nk-ibx-nav' >
                                                <li>
                                                    <ul className='nk-ibx-item ' >
                                                        <li className='nk-ibx-item-elem nk-ibx-item-check'>
                                                            <div className='custom-control custom-control-sm custom-checkbox'>
                                                                <input type="checkbox" class="custom-control-input nk-dt-item-check" id="conversionAll" />
                                                                <label class="custom-control-label" for="conversionAll"></label>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-user'>
                                                            <div className='user-card'>
                                                                <div className='user-avatar bg-primary'>1</div>
                                                                <div class="user-name"><div class="lead-text">웹 개발 프로젝트</div></div>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-fluid'>
                                                            <div className='nk-ibx-context-group'>
                                                                <div className='nk-ibx-context-badges'>
                                                                    <span className='badge bg-primary'>Mail</span>
                                                                </div>
                                                                <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span class="heading">Introducing New Dashboard</span> Please let me know as soon as possible</span></div>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-time'>
                                                            <div class="sub-text">09:30 AM</div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-tools'>
                                                            <div className='ibx-actions'>
                                                                <button type='button' className='btn btn-icon btn-trigger'>
                                                                    <IconWidget icon="more" />
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className='nk-ibx-item ' >
                                                        <li className='nk-ibx-item-elem nk-ibx-item-check'>
                                                            <div className='custom-control custom-control-sm custom-checkbox'>
                                                                <input type="checkbox" class="custom-control-input nk-dt-item-check" id="conversionAll" />
                                                                <label class="custom-control-label" for="conversionAll"></label>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-user'>
                                                            <div className='user-card'>
                                                                <div className='user-avatar bg-primary'>1</div>
                                                                <div class="user-name"><div class="lead-text">웹 개발 프로젝트</div></div>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-fluid'>
                                                            <div className='nk-ibx-context-group'>
                                                                <div className='nk-ibx-context-badges'>
                                                                    <span className='badge bg-primary'>Mail</span>
                                                                </div>
                                                                <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span class="heading">Introducing New Dashboard</span> Please let me know as soon as possible</span></div>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-time'>
                                                            <div class="sub-text">09:30 AM</div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-tools'>
                                                            <div className='ibx-actions'>
                                                                <button type='button' className='btn btn-icon btn-trigger'>
                                                                    <IconWidget icon="more" />
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className='nk-ibx-item ' >
                                                        <li className='nk-ibx-item-elem nk-ibx-item-check'>
                                                            <div className='custom-control custom-control-sm custom-checkbox'>
                                                                <input type="checkbox" class="custom-control-input nk-dt-item-check" id="conversionAll" />
                                                                <label class="custom-control-label" for="conversionAll"></label>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-user'>
                                                            <div className='user-card'>
                                                                <div className='user-avatar bg-primary'>1</div>
                                                                <div class="user-name"><div class="lead-text">웹 개발 프로젝트</div></div>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-fluid'>
                                                            <div className='nk-ibx-context-group'>
                                                                <div className='nk-ibx-context-badges'>
                                                                    <span className='badge bg-primary'>Mail</span>
                                                                </div>
                                                                <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span class="heading">Introducing New Dashboard</span> Please let me know as soon as possible</span></div>
                                                            </div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-time'>
                                                            <div class="sub-text">09:30 AM</div>
                                                        </li>
                                                        <li className='nk-ibx-item-elem nk-ibx-item-tools'>
                                                            <div className='ibx-actions'>
                                                                <button type='button' className='btn btn-icon btn-trigger'>
                                                                    <IconWidget icon="more" />
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default BusinessSettings;