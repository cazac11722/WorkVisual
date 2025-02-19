import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTable } from "../../../contexts/hooks/useTable";

import IconWidget from "../../../components/Widget/icon_widget";
import ProjectTable from "../../../components/Body/ProjectTable";



const MainProjectFrom = () => {
    const [config, setConfig] = useState({
        title: '비어 있음',
        create_ct: new Date(),
    });
    const [allIs, setAllIs] = useState(false);

    const [data, setData] = useState([
        {
            id: uuidv4(),
            date: new Date().toISOString().slice(0, 10),
            startTime: null,
            endTime: null,
            detailedWorkTime: 0,
            worker: "",
            workId: uuidv4().slice(0, 5),
            workResult: "입력해주세요.",
            taskDescription: "입력해주세요.",
            selection: false,
        }
    ]);

    const [columns, setColumns] = useState([
        {
            accessorKey: "select",
            header:
                (
                    <div id="Allchk" className="flex items-center justify-center w-5 h-5 border cursor-pointer bg-white " onClick={() => {
                        controller.selectedRowsController.setAllIs((prev) => {
                            controller.selectedRowsController.toggleAllRowsSelection(!prev)
                            return !prev;
                        });
                    }}>
                        <IconWidget icon="Check" className={`w-4 ${allIs ? '' : 'hidden'}`} />
                    </div>
                ),
            cell: ({ row, i }) =>
                row ? (
                    <input
                        type="checkbox"
                        id={row.id}
                        name={row.id}
                        checked={row.selection}
                        onChange={(e) => { controller.selectedRowsController.toggleRowSelection(row.id) }}
                        className="w-4 h-4 m-auto block ChkBox"
                        min="4" max="8" size="10"
                    />
                ) : null,
            size: 20,
        },
        { accessorKey: "date", header: "날짜", size: 150, },
        {
            accessorKey: "startTime", header: "시작 시간",
            cell: ({ row }) => {
                if (!row.startTime) return '';
                const startTime = new Date(row.startTime);
                return (startTime.toLocaleTimeString())
            },
            size: 130,
        },
        {
            accessorKey: "endTime", header: "종료 시간",
            cell: ({ row }) => {
                if (!row.endTime) return '';
                const endTime = new Date(row.endTime);
                return (endTime.toLocaleTimeString())
            },
            size: 130
        },
        {
            accessorKey: "detailedWorkTime", header: "세부 작업시간",
            cell: ({ row }) => {
                if (!row.detailedWorkTime) return '';
                const diffMs = new Date(row.detailedWorkTime);
                // 년, 월, 일, 시, 분, 초 계산
                const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

                const timeParts = [];
                if (hours > 0) timeParts.push(`${hours}시간`);
                if (minutes > 0) timeParts.push(`${minutes}분`);
                if (seconds >= 0) timeParts.push(`${seconds}초`);


                return timeParts.join(" ");
            },
            size: 130
        },
        {
            accessorKey: "AllDetailedWorkTime", header: "총 작업시간",
            cell: ({ row }) => {
                if (!row.AllDetailedWorkTime) return '';
                const diffMs = new Date(row.AllDetailedWorkTime);
                // 년, 월, 일, 시, 분, 초 계산
                const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

                const timeParts = [];
                if (hours > 0) timeParts.push(`${hours}시간`);
                if (minutes > 0) timeParts.push(`${minutes}분`);
                if (seconds >= 0) timeParts.push(`${seconds}초`);


                return timeParts.join(" ");
            },
            size: 130
        },
        {
            header: "액션",
            cell: ({ row }) => (
                <div className="flex gap-2">
                    <button type="button" onClick={(e) => controller.init.handleStart(row.id)} className="Btn_Tiem_Start bg-green-500 text-white px-2 py-1 rounded text-sm">시작</button>
                    <button type="button" onClick={(e) => controller.init.handleEnd(row.id)} className="Btn_Tiem_End bg-red-500 text-white px-2 py-1 rounded text-sm">종료</button>
                </div>
            ),
            size: 150
        },
        {
            accessorKey: "worker",
            header: "진행자",
            cell: ({ row }) =>
                row.worker ? (
                    row.worker
                ) : null,
            size: 130
        },
        {
            accessorKey: "workId", header: "업무 고유번호",
            cell: ({ row }) =>
                row.workId ? (
                    <div className="px-1">
                        <textarea
                            type="text"
                            id={`text_workId_${row.id}`}
                            name={`text_workId_${row.id}`}
                            defaultValue={row.workId || ""}
                            onBlur={(e) => controller.init.handleEdit(row.id, "workId", e.target.value)}
                            rows={1}
                            className="border px-2 py-1 border-none "
                        />
                        <div className="absolute right-0 top-0">
                            <div>+</div>
                            <div>0</div>
                            <div>-</div>
                        </div>
                    </div>
                ) : null,
            size: 200
        },
        {
            accessorKey: "workResult", header: "업무결과", cell: ({ row }) =>
                row.workResult ? (
                    <textarea
                        type="text"
                        id={`text_workResult_${row.id}`}
                        name={`text_workResult_${row.id}`}
                        defaultValue={row.workResult || ""}
                        onBlur={(e) => controller.init.handleEdit(row.id, "workResult", e.target.value)}
                        className="border px-2 py-1 border-none"
                    />
                ) : null,
            size: 150
        },
        {
            accessorKey: "taskDescription", header: "업무 내용", cell: ({ row }) =>
                row.taskDescription ? (
                    <textarea
                        type="text"
                        id={`text_taskDescription_${row.id}`}
                        name={`text_taskDescription_${row.id}`}
                        defaultValue={row.taskDescription || ""}
                        onBlur={(e) => controller.init.handleEdit(row.id, "taskDescription", e.target.value)}
                        className="border px-2 py-1 border-none w-full"
                    />
                ) : null,
            size: 500
        },
        {
            accessorKey: "workConfirm", header: "컨펌요청", cell: ({ row }) =>
                row.workConfirm ? (
                    <textarea
                        type="text"
                        id={`text_workConfirm_${row.id}`}
                        name={`text_workConfirm_${row.id}`}
                        defaultValue={row.workConfirm || ""}
                        onBlur={(e) => controller.init.handleEdit(row.id, "workConfirm", e.target.value)}
                        className="border px-2 py-1 border-none"
                    />
                ) : null,
            size: 150
        },
        {
            accessorKey: "workCount", header: "숫자", cell: ({ row }) =>
                row.workCount ? (
                    <textarea
                        type="text"
                        id={`text_workCount_${row.id}`}
                        name={`text_workCount_${row.id}`}
                        defaultValue={row.workCount || ""}
                        onBlur={(e) => controller.init.handleEdit(row.id, "workCount", e.target.value)}
                        className="border px-2 py-1 border-none"
                    />
                ) : null,
            size: 150
        },
        {
            accessorKey: "workTimeAve", header: "시간별 평균값", cell: ({ row }) =>
                row.workTimeAve ? (
                    <textarea
                        type="text"
                        id={`text_workTimeAve_${row.id}`}
                        name={`text_workTimeAve_${row.id}`}
                        defaultValue={row.workTimeAve || ""}
                        onBlur={(e) => controller.init.handleEdit(row.id, "workTimeAve", e.target.value)}
                        className="border px-2 py-1 border-none"
                    />
                ) : null,
            size: 150
        },
    ]);

    const controller = useTable(data, setData, columns, setColumns);

    return (
        <div className="flex flex-col p-4 shadow-lg bg-white rounded-lg col-span-3 lg:p-6 dark:bg-gray-900" id="FullScreen" onClick={controller.globalEventListener.handleClickOutside}>
            <a href="/WorkVisual/" className="flex items-center mb-4 text-2xl font-semibold lg:mb-8 dark:text-white">
                <img src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg" className="mr-4 h-11" alt="FlowBite Logo" />
                <span>리빙쇼핑물</span>
            </a>
            <HeaderTitle config={config} />
            <Option />
            <ProjectTable data={data} setData={setData} columns={columns} setColumns={setColumns} config={controller} />
        </div>
    );
}

const HeaderTitle = ({ config }) => {

    return (
        <div className="py-4 border-y">
            <h1 className="flex justify-between ju text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white ">
                <span className="flex text-lg">
                    프로젝트 제목#
                    <input type="text" id="project_title" name="project_title" className="ml-2" defaultValue={config.title} />
                </span>
                <span className="text-gray-500 text-lg">업로드일: {config.create_ct.toLocaleDateString()}</span></h1>
        </div>
    )
}

const Option = () => {
    return (
        <div className="flex align-center justify-between gap my-8">
            <ul>
                <li className="flex items-center mb-4">
                    <div className="w-40 flex items-center">
                        <IconWidget icon="Document" width="20" />
                        <span className="text-sm ml-1">제목</span>
                    </div>
                    <span className="w-50 text-sm">비어 있음</span>
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
                    <span className="w-50 text-sm">2025년 02월 00일</span>
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