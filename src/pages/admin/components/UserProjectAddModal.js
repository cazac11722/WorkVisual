import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "../../../contexts/hooks/useForm";

import IconWidget from "../../../components/Widget/icon_widget";
import ToastEditor from "./ToastEditor";

const UserProjectAddModal = ({ onClose, data, setData, id }) => {
    const [json, setJson] = useState(data);
    const [active, setActive] = useState({});
    const [body, setBody] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [teamMembers, setTeamMembers] = useState(data.userList);
    const [selectedMembers, setSelectedMembers] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState('');

    const [showModal1, setShowModal1] = useState(false);
    const [teamMembers1, setTeamMembers1] = useState(id[2]);
    const [selectedMembers1, setSelectedMembers1] = useState(new Set());
    const [searchTerm1, setSearchTerm1] = useState('');

    const [showModal2, setShowModal2] = useState(false);
    const [teamMembers2, setTeamMembers2] = useState(id[3]);
    const [selectedMembers2, setSelectedMembers2] = useState(new Set());
    const [searchTerm2, setSearchTerm2] = useState('');

    const [showModal3, setShowModal3] = useState(false);
    const [teamMembers3, setTeamMembers3] = useState(id[4]);
    const [selectedMembers3, setSelectedMembers3] = useState(new Set());
    const [searchTerm3, setSearchTerm3] = useState('');

    const { formState, setFormState, mainUrl, handleChange, handleSubmit } = useForm({
        title: data?.title || "",
        content: body || "",
        progress: "진행중",
        attributes: [],
        organization: data?.id || "",
        table_head: [
            { accessorKey: "date", header: "날짜", size: 200, type: 'date' },
            {
                accessorKey: "workId", header: "업무 고유번호", type: 'initNumber', size: 200
            },
            {
                accessorKey: "startTime", header: "시간", type: 'dubTime', size: 250,
            },
            {
                accessorKey: "detailedWorkTime", header: "세부 작업시간", type: 'time', size: 130
            },
            {
                accessorKey: "AllDetailedWorkTime", header: "총 작업시간", type: 'time', size: 130
            },
            {
                header: "액션", type: 'btn', size: 150
            },
            {
                accessorKey: "worker", type: 'select', size: 130
            },
            {
                accessorKey: "workResult", header: "업무결과", type: 'select', size: 150
            },
            {
                accessorKey: "taskDescription", header: "업무 내용", type: 'textarea', size: 500
            },
            {
                accessorKey: "workConfirm", header: "컨펌요청", type: 'textarea', size: 150
            },
            {
                accessorKey: "workCount", header: "숫자", type: 'number', size: 150
            },
            {
                accessorKey: "workTimeAve", header: "시간별 평균값", type: 'time', size: 150
            },
        ],
        table_body: [],
        author: null,
        priority: "0",
        deadline: "",
        average_time_per_hour: "",
        common_texts: [],
        goals: [],
        work_results: [],
        scope: 0,
        project_type: 0,
    }, async (formData) => {
        formData.common_texts = selectedMembers1;
        formData.goals = selectedMembers2;
        formData.work_results = selectedMembers3;
        try {

            if (selectedMembers.size <= 0) {
                alert("팀원을 선택해 주세요.");
                return;
            }

            selectedMembers.forEach(async (e) => {
                formData.author = e;
                const response = await fetch(`${mainUrl}/api/task_management/tasks/`, {
                    method: "post",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                });

                if(response.ok){
                    const result = await response.json();
                    console.log(result)
                    setData((prev) => [ ...prev, response])
                }
            });
            // alert('프로젝트 생성이 되었습니다.');
            // onClose();
        } catch (error) {

        }
    });

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleShowModal1 = () => {
        setShowModal1(true);
    };

    const handleShowModal2 = () => {
        setShowModal2(true);
    };

    const handleShowModal3 = () => {
        setShowModal3(true);
    };

    const handleSelectMember = (memberId) => {
        setFormState({
            ...formState,
            author: [...formState.author, memberId]
        });
        setShowModal(false);
    };

    const toggleMemberSelection = (memberId) => {
        const newSet = new Set(selectedMembers);
        if (newSet.has(memberId)) {
            newSet.delete(memberId);
        } else {
            newSet.add(memberId);
        }
        setSelectedMembers(newSet);
    };

    const toggleMemberSelection1 = (memberId) => {
        const newSet = new Set(selectedMembers1);
        if (newSet.has(memberId)) {
            newSet.delete(memberId);
        } else {
            newSet.add(memberId);
        }
        setSelectedMembers1(newSet);
    };

    const toggleMemberSelection2 = (memberId) => {
        const newSet = new Set(selectedMembers2);
        if (newSet.has(memberId)) {
            newSet.delete(memberId);
        } else {
            newSet.add(memberId);
        }
        setSelectedMembers2(newSet);
    };

    const toggleMemberSelection3 = (memberId) => {
        const newSet = new Set(selectedMembers3);
        if (newSet.has(memberId)) {
            newSet.delete(memberId);
        } else {
            newSet.add(memberId);
        }
        setSelectedMembers3(newSet);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchChange1 = (e) => {
        setSearchTerm1(e.target.value);
    };

    const handleSearchChange2 = (e) => {
        setSearchTerm2(e.target.value);
    };

    const handleSearchChange3 = (e) => {
        setSearchTerm3(e.target.value);
    };

    const filteredMembers = searchTerm
        ? teamMembers.filter(member => member.userData.username.includes(searchTerm))
        : teamMembers;

    const filteredMembers1 = searchTerm1
        ? teamMembers1.filter(e => e.title.includes(searchTerm1))
        : teamMembers1;

    const filteredMembers2 = searchTerm2
        ? teamMembers2.filter(e => e.title.includes(searchTerm2))
        : teamMembers2;

    const filteredMembers3 = searchTerm3
        ? teamMembers3.filter(e => e.title.includes(searchTerm3))
        : teamMembers3;


    return (
        <div className="relative lg:w-[60em] max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        부서 및 직급 설정
                    </h3>
                    <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <IconWidget icon="Close" className="fill-black" />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="p-4 md:p-5 grid grid-cols-1 lg:grid-cols-2 gap-2" onSubmit={handleSubmit}>
                    <div className="2xl:col-span-1">
                        <div className="mb-2">
                            <label htmlFor="task_management-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
                            <input
                                type="text"
                                placeholder="제목을 입력해주세요. "
                                id={`task_management-title`}
                                name={`title`}
                                value={formState.title}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                            <ToastEditor body={body} setBody={setBody} />
                        </div>
                        <div className="flex">
                            <button type="submit" className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <IconWidget icon="Add" className="w-4 fill-white mr-1" />
                                프로젝트 추가
                            </button>
                            <button type="button" id="add_new_reason" className={`flex align-center items-center mx-2 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border`}>
                                <span className="ml-1 text-sm ">초기화</span>
                            </button>
                        </div>
                    </div>
                    <div className="2xl:col-span-1 relative">
                        <div className="mb-4">
                            <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">담당자 및 커뮤니케이션</label>
                            <div className="flex items-center">
                                {Array.from(selectedMembers).map(memberId => {
                                    const member = teamMembers.find(m => m.id === memberId);
                                    return (
                                        <img key={memberId} className="rounded-full w-8 h-8 " src="https://flowbite.com/application-ui/demo/images/users/jese-leos.png" alt="Jese image" />
                                    );
                                })}
                                <button onClick={handleShowModal} type="button" id="add_new_reason" className={`flex align-center items-center ml-4 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border`}>
                                    <IconWidget icon="Add" className="w-4" />
                                    <span className="ml-1 text-sm ">팀원 찾기</span>
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">우선 순위</label>
                            <div className="flex">
                                <div className="flex items-center mr-4">
                                    <input type="radio" id={`task_management-priority-1`} name="priority" onChange={handleChange} value={1} className="mr-2" />
                                    <label htmlFor="task_management-priority-1" className="block text-sm font-medium text-gray-900 dark:text-white">높음</label>
                                </div>
                                <div className="flex items-center mr-4">
                                    <input type="radio" id={`task_management-priority-2`} name="priority" onChange={handleChange} value={2} className="mr-2" />
                                    <label htmlFor="task_management-priority-2" className="block text-sm font-medium text-gray-900 dark:text-white">중간</label>
                                </div>
                                <div className="flex items-center mr-4">
                                    <input type="radio" id={`task_management-priority-3`} name="priority" onChange={handleChange} value={3} className="mr-2" />
                                    <label htmlFor="task_management-priority-3" className="block text-sm font-medium text-gray-900 dark:text-white">낮음</label>
                                </div>
                                <div className="flex items-center mr-4">
                                    <input type="radio" id={`task_management-priority-4`} name="priority" onChange={handleChange} value={4} className="mr-2" />
                                    <label htmlFor="task_management-priority-4" className="block text-sm font-medium text-gray-900 dark:text-white">가장 낮음</label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
                            <div className="col-span-1">
                                <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">마감일 시간</label>
                                <input
                                    type="date"
                                    id={`task_management-deadline`}
                                    name={`deadline`}
                                    value={formState.deadline}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">시간별 평균값</label>
                                <input
                                    type="number"
                                    id={`task_management-average_time_per_hour`}
                                    name={`average_time_per_hour`}
                                    value={formState.average_time_per_hour}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
                            <div className="col-span-1">
                                <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">공통 텍스트 부여</label>
                                <button type="button" onClick={handleShowModal1} id="add_new_reason" className={`flex align-center items-center text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-1 border`}>
                                    <span className="ml-1 text-sm ">공통 텍스트</span>
                                    <IconWidget icon="ArrowDown" className="w-4 fill-black" />
                                </button>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">목표 부여</label>
                                <button type="button" onClick={handleShowModal2} id="add_new_reason" className={`flex align-center items-center text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-1 border`}>
                                    <span className="ml-1 text-sm ">목표 부여</span>
                                    <IconWidget icon="ArrowDown" className="w-4 fill-black" />
                                </button>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">업무 결과 부여</label>
                                <button type="button" onClick={handleShowModal3} id="add_new_reason" className={`flex align-center items-center text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-1 border`}>
                                    <span className="ml-1 text-sm ">업무 결과 부여</span>
                                    <IconWidget icon="ArrowDown" className="w-4 fill-black" />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
                            <div className="col-span-1">
                                <label htmlFor="task_management-scope" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">범위</label>
                                <select
                                    id="task_management-scope"
                                    name="scope"
                                    value={formState.scope}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                >
                                    {id[0].map((e, i) => (
                                        <option key={e.id} value={i}>{e.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="task_management-project_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">프로젝트 유형</label>
                                <select
                                    id="task_management-project_type"
                                    name="project_type"
                                    value={formState.project_type}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {id[1].map((e, i) => (
                                        <option key={e.id} value={i}>{e.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {showModal && <TeamMemberModal onSelect={handleSelectMember} onClose={() => setShowModal(false)} userList={data.userList} filteredMembers={filteredMembers} toggleMemberSelection={toggleMemberSelection} handleSearchChange={handleSearchChange} selectedMembers={selectedMembers} />}
                        {showModal1 && <CommonTextsModal onSelect={handleSelectMember} onClose={() => setShowModal1(false)} userList={data.userList} filteredMembers={filteredMembers1} toggleMemberSelection={toggleMemberSelection1} handleSearchChange={handleSearchChange1} selectedMembers={selectedMembers1} />}
                        {showModal2 && <GoalsModal onSelect={handleSelectMember} onClose={() => setShowModal2(false)} userList={data.userList} filteredMembers={filteredMembers2} toggleMemberSelection={toggleMemberSelection2} handleSearchChange={handleSearchChange2} selectedMembers={selectedMembers2} />}
                        {showModal3 && <WorkResultsModal onSelect={handleSelectMember} onClose={() => setShowModal3(false)} userList={data.userList} filteredMembers={filteredMembers3} toggleMemberSelection={toggleMemberSelection3} handleSearchChange={handleSearchChange3} selectedMembers={selectedMembers3} />}
                    </div>
                </form>
            </div>
        </div>
    );
};

const TeamMemberModal = ({ filteredMembers, onClose, toggleMemberSelection, handleSearchChange, selectedMembers }) => {
    return (
        <div className="left-0 top-0 absolute w-[20em] bg-white rounded-lg border">
            <div className="flex items-center justify-between p-4 px-2 py-2 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    팀원 추가
                </h3>
                <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <IconWidget icon="Close" className="fill-black" />
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-2">
                <div className="">
                    <div className="flex justify-between">
                        <input
                            type="text"
                            placeholder="팀원 닉넥임을 입력해주세요. "
                            onChange={handleSearchChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="h-80 overflow-y-auto">
                        {
                            filteredMembers.map((e) => (
                                <li key={e.id} onClick={() => toggleMemberSelection(e.id)} className="flex justify-between px-3 py-2 cursor-pointer hover:bg-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <img className="rounded-full w-8 h-8" src="https://flowbite.com/application-ui/demo/images/users/jese-leos.png" alt="Jese image" />
                                        <span className="ml-2">{e.userData.username}</span>
                                    </div>
                                    <button type="button" className="">
                                        {selectedMembers.has(e.id) ? (
                                            <IconWidget icon="CheckBox" className="fill-green-400 w-5" />
                                        ) : (
                                            <IconWidget icon="CheckBox" className="fill-gray-500 w-5" />
                                        )}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

const CommonTextsModal = ({ filteredMembers, onClose, toggleMemberSelection, handleSearchChange, selectedMembers }) => {
    return (
        <div className="left-0 top-0 absolute w-[20em] bg-white rounded-lg border">
            <div className="flex items-center justify-between p-4 px-2 py-2 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    공통 텍스트 부여
                </h3>
                <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <IconWidget icon="Close" className="fill-black" />
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-2">
                <div className="">
                    <div className="flex justify-between">
                        <input
                            type="text"
                            placeholder="팀원 닉넥임을 입력해주세요. "
                            onChange={handleSearchChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="h-80 overflow-y-auto">
                        {
                            filteredMembers.map((e) => (
                                <li key={e.id} onClick={() => toggleMemberSelection(e.id)} className="flex justify-between px-3 py-2 cursor-pointer hover:bg-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <span className="ml-2">{e.title}</span>
                                    </div>
                                    <button type="button" className="">
                                        {selectedMembers.has(e.id) ? (
                                            <IconWidget icon="CheckBox" className="fill-green-400 w-5" />
                                        ) : (
                                            <IconWidget icon="CheckBox" className="fill-gray-500 w-5" />
                                        )}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

const GoalsModal = ({ filteredMembers, onClose, toggleMemberSelection, handleSearchChange, selectedMembers }) => {
    return (
        <div className="left-0 top-0 absolute w-[20em] bg-white rounded-lg border">
            <div className="flex items-center justify-between p-4 px-2 py-2 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    목표 부여
                </h3>
                <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <IconWidget icon="Close" className="fill-black" />
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-2">
                <div className="">
                    <div className="flex justify-between">
                        <input
                            type="text"
                            placeholder="팀원 닉넥임을 입력해주세요. "
                            onChange={handleSearchChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="h-80 overflow-y-auto">
                        {
                            filteredMembers.map((e) => (
                                <li key={e.id} onClick={() => toggleMemberSelection(e.id)} className="flex justify-between px-3 py-2 cursor-pointer hover:bg-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <span className="ml-2">{e.title}</span>
                                    </div>
                                    <button type="button" className="">
                                        {selectedMembers.has(e.id) ? (
                                            <IconWidget icon="CheckBox" className="fill-green-400 w-5" />
                                        ) : (
                                            <IconWidget icon="CheckBox" className="fill-gray-500 w-5" />
                                        )}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

const WorkResultsModal = ({ filteredMembers, onClose, toggleMemberSelection, handleSearchChange, selectedMembers }) => {
    return (
        <div className="left-0 top-0 absolute w-[20em] bg-white rounded-lg border">
            <div className="flex items-center justify-between p-4 px-2 py-2 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    업무 결과 부여
                </h3>
                <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <IconWidget icon="Close" className="fill-black" />
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-2">
                <div className="">
                    <div className="flex justify-between">
                        <input
                            type="text"
                            placeholder="팀원 닉넥임을 입력해주세요. "
                            onChange={handleSearchChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="h-80 overflow-y-auto">
                        {
                            filteredMembers.map((e) => (
                                <li key={e.id} onClick={() => toggleMemberSelection(e.id)} className="flex justify-between px-3 py-2 cursor-pointer hover:bg-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <span className="ml-2">{e.title}</span>
                                    </div>
                                    <button type="button" className="">
                                        {selectedMembers.has(e.id) ? (
                                            <IconWidget icon="CheckBox" className="fill-green-400 w-5" />
                                        ) : (
                                            <IconWidget icon="CheckBox" className="fill-gray-500 w-5" />
                                        )}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};



export default UserProjectAddModal;
