import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTable } from "../../../contexts/hooks/useTable";

import IconWidget from "../../../components/Widget/icon_widget";
import ProjectTable from "../../../components/Body/ProjectTable";
import { useForm } from "../../../contexts/hooks/useForm";
import { useParams } from "react-router-dom";
import { onCLS } from "web-vitals";



const MainProjectFrom = () => {
    const params = useParams();
    const [config, setConfig] = useState({
        title: '',
        create_ct: new Date(),
        author: params.id,
        organization: 0,
        progress: "진행중",
        project_type: 0,
        scope: 0,
    });
    const [allIs, setAllIs] = useState(false);
    const [chk, setChk] = useState(false)

    const [data, setData] = useState([]);

    const { mainUrl } = useForm();

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
                setConfig((prev) => ({ ...prev, title: result.title, create_ct: new Date(result.upload_date), organization: result.organization, progress: result.progress, project_type: result.project_type, scope: result.scope }))
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
    }, [data, columns, chk, config])

    return (
        <div className="flex flex-col p-4 shadow-lg bg-white rounded-lg col-span-4 lg:p-6 dark:bg-gray-900" onClick={controller.globalEventListener.handleClickOutside} >
            <a href="/WorkVisual/" className="flex items-center mb-4 text-2xl font-semibold lg:mb-8 dark:text-white">
                <img src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg" className="mr-4 h-11" alt="FlowBite Logo" />
                <span>리빙쇼핑물</span>
            </a>
            <HeaderTitle config={config} mainUrl={mainUrl} vi={params.vi} />
            <Option config={config} mainUrl={mainUrl} chk={chk} params={params} />
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

const Option = ({ config, mainUrl, chk, params }) => {

    const [progress, setProgress] = useState();
    const [scope, setScope] = useState([]);
    const [type, setType] = useState([]);

    const [scopeI, setScopeI] = useState(0);
    const [typeI, setTypeI] = useState(0);
   
    const handleChange = async (e) => {
        setProgress(e.target.value)
        try {
            let json = {
                author: config.author,
                progress: e.target.value,
            }
            const responseScope = await fetch(`${mainUrl}/api/task_management/tasks/${params.vi}/`, {
                method: 'put',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            });
            
            if (responseScope.ok) {
                const result = await responseScope.json();
            }
        } catch (error) {
        }
    }

    const handleChangeS = async (e) => {
        setScopeI(e.target.value)
        try {
            let json = {
                author: config.author,
                scope: e.target.value,
            }
            const responseScope = await fetch(`${mainUrl}/api/task_management/tasks/${params.vi}/`, {
                method: 'put',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            });
            if (responseScope.ok) {
                const result = await responseScope.json();
            }

        } catch (error) {
        }
    }

    const handleChangeT = async (e) => {
        setTypeI(e.target.value)
        try {
            let json = {
                author: config.author,
                project_type: e.target.value,
            }
            const responseScope = await fetch(`${mainUrl}/api/task_management/tasks/${params.vi}/`, {
                method: 'put',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            });
            if (responseScope.ok) {
                const result = await responseScope.json();
            }
        } catch (error) {
        }
    }

    const view = useCallback(async (config) => {
        try {
            const responseScope = await fetch(`${mainUrl}/api/accounts/organization-project-scope/?organization=${config.organization}`, {
                method: 'get',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            const responseType = await fetch(`${mainUrl}/api/accounts/organization-project-type/?organization=${config.organization}`, {
                method: 'get',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            if (responseScope.ok) {
                const result = await responseScope.json();
                setScope(result)

            }

            if (responseType.ok) {
                const result = await responseType.json();
                setType(result)
            }
        } catch (error) {
        }
    }, [])

    useEffect(() => {
        if (chk) {
            setProgress(config.progress)
            setScopeI(config.scope)
            setTypeI(config.project_type)
            view(config);
        }
    }, [view, chk])

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
                    <div className={`w-50 text-sm px-2 py-1 rounded-lg border`}>
                        <select
                            value={progress}
                            onChange={(e) => handleChange(e)}
                            className="text-sm w-32">
                            <option value={"진행중"}>진행중</option>
                            <option value={"보류"}>보류</option>
                            <option value={"완료"}>완료</option>
                        </select>
                    </div>
                </li>
                <li className="flex items-center mb-4">
                    <div className="w-40 flex items-center">
                        <IconWidget icon="Document" width="20" />
                        <span className="text-sm ml-1">프로젝트 범위</span>
                    </div>
                    <div className={`w-50 text-sm px-2 py-1 rounded-lg border`}>
                        <select
                            value={scopeI}
                            onChange={(e) => handleChangeS(e)}
                            className="text-sm w-32">
                            <option value={0}>선택해 주세요.</option>
                            {
                                scope.map((e) => (
                                    <option key={e.id} value={e.id}>{e.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </li>
                <li className="flex items-center mb-4">
                    <div className="w-40 flex items-center">
                        <IconWidget icon="Document" width="20" />
                        <span className="text-sm ml-1">프로젝트 유형</span>
                    </div>
                    <div className={`w-50 text-sm px-2 py-1 rounded-lg border`}>
                        <select
                            value={typeI}
                            onChange={(e) => handleChangeT(e)}
                            className="text-sm w-32">
                            <option value={0}>선택해 주세요.</option>
                            {
                                type.map((e) => (
                                    <option key={e.id} value={e.id}>{e.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </li>
                {/* <li className="flex items-center mb-4 cupoer-pointer">
                    <div className="flex items-center hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
                        <IconWidget icon="Add" width="20" className="" />
                        <span className="text-sm ml-1">속성 추가</span>
                    </div>
                </li> */}
            </ul>
        </div>
    );
}

export default MainProjectFrom;