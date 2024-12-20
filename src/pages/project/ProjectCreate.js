import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import IconWidget from '../../components/widget/icon_widget';
import TaskTable from '../../components/widget/TaskTableWidget';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProjectCreate = () => {
    const { user, token } = useAuth();
    const navigate = useNavigate();

    const [data, setData] = useState([
        { id: "1", title: "업무 제목을 입력해주세요.", workContents: "업무기획 + 내용을 입력해주세요.", workDetails: "", reasonDelay: "", link: '', status: "In Progress", startTime: '', endTime: '', event: '' },
    ]);

    const columns = [
        { accessorKey: "id", header: "ID" },
        { accessorKey: "title", header: "업무 제목" },
        { accessorKey: "workContents", header: "업무기획-내용" },
        { accessorKey: "workDetails", header: "상세 업무내용" },
        { accessorKey: "reasonDelay", header: "지연사유" },
        { accessorKey: "link", header: "링크" },
        { accessorKey: "status", header: "상태" },
        { accessorKey: "startTime", header: "시작 시간" },
        { accessorKey: "endTime", header: "종료 시간" },
        { accessorKey: "event", header: "기타" },
    ];


    const handleAddRow = () => {
        const newId = (data.length + 1).toString();
        const newRow = {
            id: newId,
            title: "업무 제목을 입력해주세요.",
            workContents: "업무기획 + 내용을 입력해주세요.",
            workDetails: "",
            reasonDelay: "",
            link: '',
            status: "In Progress",
            startTime: '',
            endTime: '',
            event: '',
        };
        setData((prevData) => [...prevData, newRow]); // 상태 업데이트
    };

    const handleSave = async () => {
        const titleValue = document.querySelector('#title').value.trim(); // 제목 필드 값 가져오기
        const contentsValue = document.querySelector('#contents').value.trim(); // 내용 필드 값 가져오기

        // 제목 필수 조건 확인
        if (!titleValue) {
            alert('제목을 입력해주세요.'); // 제목이 비어 있으면 경고 메시지 표시
            return;
        }

        var array = {
            "title": titleValue,
            "description": contentsValue,
            "created_by": user.id,
            "owner": user.id,
        };

        array = JSON.stringify(array);

        try {
            const response = await fetch('https://cazac11722.pythonanywhere.com/api/task/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: array, // 데이터 전송
            });

            if (response.ok) {
                const result = await response.json();

                const currentDate = new Date(); // 현재 날짜와 시간
                const formattedDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식
                const formattedTime = currentDate.toTimeString().split(' ')[0]; // hh:mm:ss 형식

                const timeInfo = JSON.stringify({
                    start_date: formattedDate,
                    start_time: formattedTime,
                });

                const points = await fetch(`https://cazac11722.pythonanywhere.com/api/task/${result.id}/task-time-info/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: timeInfo,
                });

                if (points.ok) {
                    const formattedData = data.map(row => ({
                        title: row.title,
                        work_contents: row.workContents,
                        created_by: user.id,
                        work_details: row.workDetails,
                        reason_delay: row.reasonDelay,
                        link: row.link,
                        status: row.status,
                        startTime : row.startTime,
                        endTime : row.endTime,
                        created_at: new Date(),
                        updated_at: new Date(),
                        task: result.id,
                    }));

                    for (const element of formattedData) {
                        await fetch(`https://cazac11722.pythonanywhere.com/api/task/${result.id}/project-tasks/`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(element),
                        });
                    }

                    alert('데이터가 성공적으로 저장되었습니다!');
                    navigate(`/WorkVisual/project/${result.id}`);
                }
            } else {
                const error = await response.json();
                alert(`데이터를 저장하지 못했습니다.: ${error.detail || 'Unknown error'}`);
            }
        } catch (err) {
            console.error('Error while saving data:', err);
            alert('데이터를 저장하는 동안 오류가 발생했습니다.');
        }
    };


    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main>
                    <section className="row padding-3em bg-viwe ">
                        <div className='flex justify-content-between margin-bottom-2em'>
                            <h3 className="title">
                                <IconWidget icon="document" />
                                <span className="margin-left">업무 추가</span>
                            </h3>
                            <div className='flex'>
                                <button type='button' className='btn btn_modal padding-x-2em' onClick={handleSave} >
                                    <div className='icon'><IconWidget icon="add" color="#fff" /></div>
                                    <span className='margin-left size1'>저장</span>
                                </button>
                            </div>
                        </div>
                        <div className="project-view">
                            <h3 className="title">
                                <IconWidget icon="document" />
                                <input type='text' id='title' className='form_controller form_input margin-left' placeholder='업무 제목을 입력해주세요' />
                            </h3>
                            <textarea name="contents" id="contents" className="margin-top-1em from_controller " placeholder='업무 상세 내용을 입력해주세요.'></textarea>
                            <h3 className="title margin-top-2em">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                    fill="undefined">
                                    <path
                                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                                </svg>
                                <span className="margin-left-1em">상세 업무 내용</span>
                                <button onClick={handleAddRow} className="task-table-add-row">
                                    Add Row
                                </button>
                            </h3>
                            <TaskTable data={data} columns={columns} setData={setData} />
                        </div>
                    </section>

                    <section className="padding-3em">
                        <h3 className="title">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="undefined">
                                <path
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                            </svg>
                            <span className="margin-left-1em">공지사항 공유 및 기타 코멘트</span>
                        </h3>
                        <ul className="project-view__reply margin-top-2em">
                            {/* <li>
                                <h3 className="project-view__reply__title ">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>
                                    <span className="margin-left-1em">공지사항 제목 부분 입니다.</span>
                                </h3>
                                <p className="project-view__reply__contents margin-top-1em w80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id, quo dolores ipsum quasi, totam aspernatur sunt atque molestiae adipisci voluptatibus, eligendi distinctio dolorum? Velit non consectetur eligendi possimus cupiditate.</p>
                            </li>
                            <li>
                                <h3 className="project-view__reply__title ">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>
                                    <span className="margin-left-1em">공지사항 제목 부분 입니다.</span>
                                </h3>
                                <p className="project-view__reply__contents margin-top-1em w80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id, quo dolores ipsum quasi, totam aspernatur sunt atque molestiae adipisci voluptatibus, eligendi distinctio dolorum? Velit non consectetur eligendi possimus cupiditate.</p>
                            </li> */}
                        </ul>

                    </section>
                </main>
            </div>
        </div >
    );
};

export default ProjectCreate;