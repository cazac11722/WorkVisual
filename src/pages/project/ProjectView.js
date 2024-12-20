import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import IconWidget from '../../components/widget/icon_widget';
import TaskTable from '../../components/widget/TaskTableWidget';
import { useAuth } from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';

const ProjectView = () => {
    const { user } = useAuth();
    const params = useParams();

    const [tasksData, setTasksData] = useState({
        title: '',
        description: '',
    });

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

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
        setData((prevData) => [...prevData, newRow]);
    };

    const handleGet = async () => {
        setIsLoading(true); // 로딩 시작
        try {
            const response = await fetch(`https://cazac11722.pythonanywhere.com/api/task/${params.id}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();

                const points = await fetch(`https://cazac11722.pythonanywhere.com/api/task/${params.id}/task-time-info/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const pointsData = await points.json();

                if (points.ok) {
                    const project = await fetch(`https://cazac11722.pythonanywhere.com/api/task/${params.id}/project-tasks/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    let projectData = await project.json();

                    setTasksData({
                        title: result.title || '제목 없음',
                        description: result.description || '설명이 없습니다.',
                    });
                    projectData = await projectData.map(e => ({
                        id: e.id,
                        title: e.title,
                        workContents: e.work_contents,
                        workDetails: e.work_details,
                        reasonDelay: e.reason_delay,
                        link: e.link,
                        status: e.status,
                        startTime: e.start_time,
                        endTime: e.end_time,
                        event: '',
                    }))
                    setData(projectData || []);
                }
            }
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setIsLoading(false); // 로딩 종료
        }
    };

    const handleUpdate = async () => {
        try {
            const updatedData = {
                title: tasksData.title,
                description: tasksData.description,
                created_by: user.id,
                owner: user.id,
            };

            const response = await fetch(`https://cazac11722.pythonanywhere.com/api/task/${params.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            console.log(response);

            if (response.ok) {
                const result = await response.json();
                const formattedData = data.map(row => ({
                    id: row.id,
                    title: row.title,
                    work_contents: row.workContents,
                    created_by: user.id,
                    work_details: row.workDetails,
                    reason_delay: row.reasonDelay,
                    link: row.link,
                    status: row.status,
                    start_time : row.startTime || null,
                    end_time : row.endTime || null,
                    created_at: new Date(),
                    updated_at: new Date(),
                    task: result.id,
                }));

                for (const element of formattedData) {
                    await fetch(`https://cazac11722.pythonanywhere.com/api/task/${params.id}/project-tasks/${element.id}/`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(element),
                    });
                }
                
                alert('업무가 성공적으로 수정되었습니다!');
                console.log('Updated Data:', result);
            } else {
                const error = await response.json();
                console.error('Error updating task:', error);
                alert('업무 수정 중 오류가 발생했습니다.');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('서버와의 통신 중 오류가 발생했습니다.');
        }
    };

    useEffect(() => {
        handleGet();
    }, [params.id]);



    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main>
                    {
                        isLoading ?
                            // 로딩 상태 표시
                            <div style={{ textAlign: "center", marginTop: "300px" }}>
                                <p>로딩 중입니다...</p>
                            </div>
                            : null
                    }
                    {
                        !isLoading ? <section className="row padding-3em bg-viwe ">
                            <div className='flex justify-content-between margin-bottom-2em'>
                                <h3 className="title">
                                    <IconWidget icon="document" />
                                    <span className="margin-left">업무 상세</span>
                                </h3>
                                <div className='flex' >
                                    <button type='button' className='btn btn_modal padding-x-2em h3em' onClick={handleUpdate} >
                                        <div className='icon'><IconWidget icon="upgrade" color="#fff" /></div>
                                        <span className='margin-left size1'>수정</span>
                                    </button>
                                </div>
                            </div>
                            <div className="project-view">
                                <h3 className="title">
                                    <IconWidget icon="document" />
                                    <input type='text' id='title' className='form_controller form_input margin-left' placeholder='업무 제목을 입력해주세요' value={tasksData.title} onChange={(e) => setTasksData({ ...tasksData, title: e.target.value })} />
                                </h3>
                                <textarea
                                    name="contents"
                                    id="contents"
                                    className="margin-top-1em from_controller"
                                    placeholder="업무 상세 내용을 입력해주세요."
                                    value={tasksData.description}
                                    onChange={(e) => setTasksData({ ...tasksData, description: e.target.value })}
                                />
                                <h3 className="title margin-top-2em">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                        fill="undefined">
                                        <path
                                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                                    </svg>
                                    <span className="margin-left-1em margin-right-1em">상세 업무 내용</span>
                                    <button onClick={handleAddRow} className="task-table-add-row">
                                        Add Row
                                    </button>
                                </h3>
                                <TaskTable data={data} columns={columns} setData={setData} />
                            </div>
                        </section> : null
                    }
                </main>
            </div>
        </div>
    );
};

export default ProjectView;
