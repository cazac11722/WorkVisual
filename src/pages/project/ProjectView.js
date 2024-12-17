import React from 'react';
import HeaderWidget from './widget/header_widget';

const ProjectView = () => {
    return (
        <div class="row w100">
            <HeaderWidget />
            <main>
                <section class="row padding-3em bg-viwe">
                    <div class="project-view">
                        <h3 class="title">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="undefined">
                                <path
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                            </svg>
                            <span class="margin-left-1em">대표사진 촬영</span>
                        </h3>
                        <textarea name="contents" id="contents" class="margin-top-1em from_controller ">대리님과 상위 후 대표사진 촬영 예정입니다.</textarea>
                        <h3 class="title margin-top-2em">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="undefined">
                                <path
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                            </svg>
                            <span class="margin-left-1em">상세 업무 내용</span>
                        </h3>
                        <table class="table-data">
                            <thead>
                                <tr>
                                    <th>제목</th>
                                    <th>진행 날짜</th>
                                    <th>시간</th>
                                    <th>진행도(%)</th>
                                    <th>종료날짜</th>
                                    <th>상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>새프로젝트 추가합니다.</td>
                                    <td>2024.11.12</td>
                                    <td>02:01:40</td>
                                    <td>
                                        <div class="flex">
                                            <div></div>
                                            <span>90%</span>
                                        </div>
                                    </td>
                                    <td>2024.11.12</td>
                                    <td>
                                        <span class="betil betil-green">진행중</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>새프로젝트 추가합니다.</td>
                                    <td>2024.11.12</td>
                                    <td>02:01:40</td>
                                    <td>
                                        <div class="flex">
                                            <div></div>
                                            <span>90%</span>
                                        </div>
                                    </td>
                                    <td>2024.11.12</td>
                                    <td>
                                        <span class="betil betil-green">진행중</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>새프로젝트 추가합니다.</td>
                                    <td>2024.11.12</td>
                                    <td>02:01:40</td>
                                    <td>
                                        <div class="flex">
                                            <div></div>
                                            <span>90%</span>
                                        </div>
                                    </td>
                                    <td>2024.11.12</td>
                                    <td>
                                        <span class="betil betil-green">진행중</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="padding-3em">
                    <h3 class="title">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="undefined">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                        </svg>
                        <span class="margin-left-1em">공지사항 공유 및 기타 코멘트</span>
                    </h3>
                    <ul class="project-view__reply margin-top-2em">
                        <li>
                            <h3 class="project-view__reply__title ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>
                                <span class="margin-left-1em">공지사항 제목 부분 입니다.</span>
                            </h3>
                            <p class="project-view__reply__contents margin-top-1em w80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id, quo dolores ipsum quasi, totam aspernatur sunt atque molestiae adipisci voluptatibus, eligendi distinctio dolorum? Velit non consectetur eligendi possimus cupiditate.</p>
                        </li>
                        <li>
                            <h3 class="project-view__reply__title ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>
                                <span class="margin-left-1em">공지사항 제목 부분 입니다.</span>
                            </h3>
                            <p class="project-view__reply__contents margin-top-1em w80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id, quo dolores ipsum quasi, totam aspernatur sunt atque molestiae adipisci voluptatibus, eligendi distinctio dolorum? Velit non consectetur eligendi possimus cupiditate.</p>
                        </li>
                    </ul>

                </section>
            </main>
        </div>
    );
};

export default ProjectView;