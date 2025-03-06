import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTable } from "../../../contexts/hooks/useTable";

import IconWidget from "../../../components/Widget/icon_widget";
import ProjectTable from "../../../components/Body/ProjectTable";
import { useForm } from "../../../contexts/hooks/useForm";
import { useParams } from "react-router-dom";



const MainProjectFrom = () => {
    const params = useParams();
    const [config, setConfig] = useState({
        title: '',
        create_ct: new Date(),
        author: params.id,
    });
    const [allIs, setAllIs] = useState(false);
    const [chk, setChk] = useState(false)

    const [data, setData] = useState([]);

    const { mainUrl } = useForm();

    // const [columns, setColumns] = useState([
    //     { accessorKey: "date", header: "날짜", size: 200, type: 'date' },
    //     {
    //         accessorKey: "workId", header: "업무 고유번호", type: 'initNumber',
    //         cell: ({ row }) =>
    //             row.workId ? (
    //                 <textarea
    //                     type="text"
    //                     id={`text_workId_${row.id}`}
    //                     name={`text_workId_${row.id}`}
    //                     defaultValue={row.workId || ""}
    //                     onBlur={(e) => controller.init.handleEdit(row.id, "workId", e.target.value)}
    //                     rows={1}
    //                     className="border px-2 py-1 border-none "
    //                 />
    //             ) : null,
    //         size: 200
    //     },
    //     {
    //         accessorKey: "startTime", header: "시간", type: 'dubTime',
    //         cell: ({ row }) => {
    //             let html = '';
    //             if (!row.startTime) return '';
    //             const startTime = new Date(row.startTime);

    //             html += (startTime.toLocaleTimeString()) + " ~ ";

    //             if (!row.endTime) return (html);
    //             const endTime = new Date(row.endTime);
    //             html += (endTime.toLocaleTimeString())

    //             return (html);
    //         },
    //         size: 250,
    //     },
    //     {
    //         accessorKey: "detailedWorkTime", header: "세부 작업시간", type: 'time',
    //         cell: ({ row }) => {
    //             if (!row.detailedWorkTime) return '';
    //             const diffMs = new Date(row.detailedWorkTime);
    //             // 년, 월, 일, 시, 분, 초 계산
    //             const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //             const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    //             const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    //             const timeParts = [];
    //             if (hours > 0) timeParts.push(`${hours}시간`);
    //             if (minutes > 0) timeParts.push(`${minutes}분`);
    //             if (seconds >= 0) timeParts.push(`${seconds}초`);
    //             return timeParts.join(" ");
    //         },
    //         size: 130
    //     },
    //     {
    //         accessorKey: "AllDetailedWorkTime", header: "총 작업시간", type: 'time',
    //         cell: ({ row }) => {
    //             if (!row.AllDetailedWorkTime) return '';
    //             const diffMs = new Date(row.AllDetailedWorkTime);
    //             // 년, 월, 일, 시, 분, 초 계산
    //             const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //             const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    //             const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    //             const timeParts = [];
    //             if (hours > 0) timeParts.push(`${hours}시간`);
    //             if (minutes > 0) timeParts.push(`${minutes}분`);
    //             if (seconds >= 0) timeParts.push(`${seconds}초`);


    //             return timeParts.join(" ");
    //         },
    //         size: 130
    //     },
    //     {
    //         header: "액션", type: 'btn',
    //         cell: ({ row }) => (
    //             <div className="flex gap-2 items-center justify-center w-auto">
    //                 <button type="button" onClick={(e) => controller.init.handleStart(row.id)} className="Btn_Tiem_Start bg-green-500 text-white px-2 py-1 rounded text-sm">시작</button>
    //                 <button type="button" onClick={(e) => controller.init.handleEnd(row.id)} className="Btn_Tiem_End bg-red-500 text-white px-2 py-1 rounded text-sm">종료</button>
    //             </div>
    //         ),
    //         size: 150
    //     },
    //     {
    //         accessorKey: "worker", type: 'select',
    //         header: "진행자",
    //         cell: ({ row }) =>
    //             row.worker ? (
    //                 <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
    //                     {row.worker}
    //                 </span>
    //             ) : null,
    //         size: 130
    //     },
    //     {
    //         accessorKey: "workResult", header: "업무결과", type: 'select', cell: ({ row }) =>
    //             row.workResult ? (
    //                 <textarea
    //                     type="text"
    //                     id={`text_workResult_${row.id}`}
    //                     name={`text_workResult_${row.id}`}
    //                     defaultValue={row.workResult || ""}
    //                     onBlur={(e) => controller.init.handleEdit(row.id, "workResult", e.target.value)}
    //                     className="border px-2 py-1 border-none"
    //                 />
    //             ) : null,
    //         size: 150
    //     },
    //     {
    //         accessorKey: "taskDescription", header: "업무 내용", type: 'textarea', cell: ({ row }) =>
    //             row.taskDescription ? (
    //                 <textarea
    //                     type="text"
    //                     id={`text_taskDescription_${row.id}`}
    //                     name={`text_taskDescription_${row.id}`}
    //                     defaultValue={row.taskDescription || ""}
    //                     onBlur={(e) => controller.init.handleEdit(row.id, "taskDescription", e.target.value)}
    //                     className="border px-2 py-1 border-none w-full"
    //                 />
    //             ) : null,
    //         size: 500
    //     },
    //     {
    //         accessorKey: "workConfirm", header: "컨펌요청", type: 'textarea', cell: ({ row }) =>
    //             row.workConfirm ? (
    //                 <textarea
    //                     type="text"
    //                     id={`text_workConfirm_${row.id}`}
    //                     name={`text_workConfirm_${row.id}`}
    //                     defaultValue={row.workConfirm || ""}
    //                     onBlur={(e) => controller.init.handleEdit(row.id, "workConfirm", e.target.value)}
    //                     className="border px-2 py-1 border-none"
    //                 />
    //             ) : null,
    //         size: 150
    //     },
    //     {
    //         accessorKey: "workCount", header: "숫자", type: 'number', cell: ({ row }) =>
    //             row.workCount ? (
    //                 <div>
    //                     <textarea
    //                         type="text"
    //                         id={`text_workCount_${row.id}`}
    //                         name={`text_workCount_${row.id}`}
    //                         defaultValue={row.workCount || ""}
    //                         onBlur={(e) => controller.init.handleEdit(row.id, "workCount", e.target.value)}
    //                         className="border px-2 py-1 border-none"
    //                     />
    //                     <div className="absolute right-0 top-0">
    //                         <div>+</div>
    //                         <div>0</div>
    //                         <div>-</div>
    //                     </div>
    //                 </div>
    //             ) : null,
    //         size: 150
    //     },
    //     {
    //         accessorKey: "workTimeAve", header: "시간별 평균값", type: 'time', cell: ({ row }) =>
    //             row.workTimeAve ? (
    //                 <textarea
    //                     type="text"
    //                     id={`text_workTimeAve_${row.id}`}
    //                     name={`text_workTimeAve_${row.id}`}
    //                     defaultValue={row.workTimeAve || ""}
    //                     onBlur={(e) => controller.init.handleEdit(row.id, "workTimeAve", e.target.value)}
    //                     className="border px-2 py-1 border-none"
    //                 />
    //             ) : null,
    //         size: 150
    //     },
    // ]);

    const [columns, setColumns] = useState([]);

    const controller = useTable(data, setData, columns, setColumns);

    const update = useCallback(async () => {
        try {
            const json = {
                table_head: columns,
                table_body: data,
                author: config.author
            }
            const response = await fetch(`${mainUrl}/api/task_management/tasks/${params.vi}/`, {
                method: 'put',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            });

            if (response.ok) {
                const result = await response.json();
            }
        } catch (error) {

        }
    })

    const view = useCallback(async () => {
        try {
            const response = await fetch(`${mainUrl}/api/task_management/tasks/${params.vi}`, {
                method: 'get',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const result = await response.json();
                setConfig((prev) => ({ ...prev, title: result.title, create_ct: new Date(result.upload_date) }))
                setColumns(result.table_head)
                setData(result.table_body)
            }
            setChk(true)
        } catch (error) {

        }
    }, [])


    useEffect(() => {
        view();
    }, [view])

    useEffect(() => {
        if (chk) {
            update();
        }
    }, [data, columns, chk])

    return (
        <div className="flex flex-col p-4 shadow-lg bg-white rounded-lg col-span-4 lg:p-6 dark:bg-gray-900" onClick={controller.globalEventListener.handleClickOutside} >
            <a href="/WorkVisual/" className="flex items-center mb-4 text-2xl font-semibold lg:mb-8 dark:text-white">
                <img src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg" className="mr-4 h-11" alt="FlowBite Logo" />
                <span>리빙쇼핑물</span>
            </a>
            <HeaderTitle config={config} mainUrl={mainUrl} vi={params.vi} />
            <Option config={config} />
            <ProjectTable data={data} setData={setData} columns={columns} setColumns={setColumns} config={controller} />
        </div>
    );
}

const HeaderTitle = ({ config, mainUrl, vi }) => {
    const [title, setTitle] = useState(config.title);

    const handleChange = async (event) => {
        setTitle(event.target.value)
    }

    const handleKeyUp = async () => {
        try {
            const json = {
                title: title,
                author: config.author
            }
            const response = await fetch(`${mainUrl}/api/task_management/tasks/${vi}/`, {
                method: 'put',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            });

            if (response.ok) {
                const result = await response.json();
            }

        } catch (error) {

        }
    }


    useEffect(() => {
        setTitle(config.title)
    }, [config.title])

    return (
        <div className="py-4 border-y">
            <h1 className="flex justify-between ju text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white ">
                <span className="flex text-lg">
                    프로젝트 제목#
                    <input type="text" id="project_title" name="project_title" className="ml-2" value={title} onChange={handleChange} onKeyUp={handleKeyUp} />
                </span>
                <span className="text-gray-500 text-lg">업로드일: {config.create_ct.toLocaleDateString()}</span></h1>
        </div>
    )
}

const Option = ({ config }) => {
    return (
        <div className="flex align-center justify-between gap my-8">
            <ul>
                <li className="flex items-center mb-4">
                    <div className="w-40 flex items-center">
                        <IconWidget icon="Document" width="20" />
                        <span className="text-sm ml-1">제목</span>
                    </div>
                    <span className="w-50 text-sm">{config.title || '제목이 없습니다.'}</span>
                </li>
                <li className="flex items-center mb-4">
                    <div className="w-40 flex items-center">
                        <IconWidget icon="Document" width="20" />
                        <span className="text-sm ml-1">작성자</span>
                    </div>
                    <span className="w-50 text-sm">관리자</span>
                </li>
                <li className="flex items-center mb-4">
                    <div className="w-40 flex items-center">
                        <IconWidget icon="Document" width="20" />
                        <span className="text-sm ml-1">업로드일</span>
                    </div>
                    <span className="w-50 text-sm">{config.create_ct.getFullYear()}년 {config.create_ct.getMonth() + 1}월 {config.create_ct.getDate()}일</span>
                </li>
                <li className="flex items-center mb-4">
                    <div className="w-40 flex items-center">
                        <IconWidget icon="Document" width="20" />
                        <span className="text-sm ml-1">진행사항</span>
                    </div>
                    <div className="w-50 text-sm bg-blue-500 text-white px-2 py-1 rounded-lg">
                        <span>진행중</span>
                    </div>
                </li>
                <li className="flex items-center mb-4 cupoer-pointer">
                    <div className="flex items-center hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
                        <IconWidget icon="Add" width="20" className="" />
                        <span className="text-sm ml-1">속성 추가</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MainProjectFrom;