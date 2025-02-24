import IconWidget from "../../../components/Widget/icon_widget";
import { useEffect, useRef, useState, useCallback } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useForm } from "../../../contexts/hooks/useForm";


const SetMyGoals = () => {
    const [addIsOpen, setAddIsOpen] = useState(false);
    const [viewIsOpen, setViewIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const toggleOpen = () => {
        setAddIsOpen((prev) => !prev);
    }

    const toggleViewOpen = (data = null) => {
        setViewIsOpen((prev) => !prev);
        if (data) {
            formState.start_date = data.start_date;
            formState.end_date = data.end_date;
            formState.goal_type = data.goal_type;
            formState.content = data.content;
            formState.result = data.result;
            formState.id = data.id;
        }
    }

    const { user, token } = useAuth();

    const { formState, mainUrl, handleChange, handleSubmit } = useForm(
        { start_date: "", end_date: "", goal_type: '', content: "", result: "", username: user.data.username, organizer: user.id, id: null },
        async (data) => {
            try {
                let url = `${mainUrl}/api/task_management/goals/`;
                let meth = "POST";

                if (viewIsOpen) {
                    url = `${mainUrl}/api/task_management/goals/${data.id}/`;
                    meth = "PUT";
                }
                const response = await fetch(url, {
                    method: meth,
                    headers: {
                        "Authorization": `Token ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const result = await response.json();
                    if (viewIsOpen) {
                        toggleViewOpen();
                        list();
                    } else {
                        toggleOpen();
                    }

                } else {
                    console.error("Login failed:", response.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    );

    const deleteOn = useCallback(async () => {
        try {
            const response = await fetch(`${mainUrl}/api/task_management/goals/${formState.id}/`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json",
                }
            });

            if(response.ok){
                alert("삭제가 되었습니다.");
                toggleViewOpen();
                list();
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }, [])


    const selectList = [
        { value: "long_term", name: "장기 목표" },
        { value: "mid_term", name: "중기 목표" },
        { value: "monthly", name: "월별-실행목표" },
        { value: "weekly", name: "주별-실행목표" },
    ];

    const list = useCallback(async () => {
        const response = await fetch(`${mainUrl}/api/task_management/goals/`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            const result = await response.json();
            setData(result);
        }
    }, [])

    useEffect(() => {
        list();
    }, [list])

    return (
        <>
            <div className="flex flex-col p-4 shadow-lg bg-white rounded-lg col-span-1 lg:p-6 dark:bg-gray-900">

                <div className="flex items-center bg-[#f3faf7] py-3 px-4 rounded-lg">
                    <IconWidget icon="Document" color="#0e9f6e" />
                    <span className="text-sm ml-2 text-[#0c3829] font-black">나만의 목표!!!</span>
                </div>
                <div className="flex justify-between mt-4 text-gray-500">
                    <h2>목표내용</h2>
                    <select id="select">
                        <option value={0}>모두 목표</option>
                        <option value={0}>장기 목표</option>
                        <option value={0}>중기 목표</option>
                        <option value={0}>월별 목표</option>
                        <option value={0}>주별 목표</option>
                    </select>
                </div>
                <div className="py-4 border-y my-4">
                    <h1 className="flex justify-between ju text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white ">
                        <span>관리자님</span>
                        <button type="button" onClick={toggleOpen} className="text-sm flex items-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            + 목표 추가
                        </button>
                    </h1>
                </div>
                <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
                    {
                        data.map((e, i) => {
                            const foundGoalType = selectList.find(item => item.value === e.goal_type);
                            return (
                                <div key={i} className="space-y-4 py-6 md:py-8">
                                    <div className="grid gap-4">
                                        <div>
                                            <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0">{foundGoalType.name}</span>
                                        </div>
                                        <button type="button" onClick={() => toggleViewOpen(e)} className="text-xl font-semibold text-gray-900 text-left hover:underline dark:text-white ">{e.content}</button>
                                    </div>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">목표 결과: </p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        기간: {e.start_date} ~ {e.end_date}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className={`fixed w-screen h-screen left-0 top-0 bg-black z-30 opacity-30 ${addIsOpen ? "" : "hidden"}`}></div>
            <div className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex ${addIsOpen ? "" : "hidden"}`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                나만의 목표!!
                            </h3>
                            <button type="button" onClick={toggleOpen} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <IconWidget icon="Close" className="fill-black" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" onSubmit={handleSubmit} method="post">
                                <div>
                                    <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">기간</label>
                                    <div className="flex items-center">
                                        <input type="date" name="start_date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            value={formState.start_date} onChange={handleChange} required={true} />
                                        <span className="px-2">~</span>
                                        <input type="date" name="end_date" id="end_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            value={formState.end_date} onChange={handleChange} required={true} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="goal_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">기간별 목표</label>
                                    <select name="goal_type" id="goal_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.goal_type} onChange={handleChange} >
                                        {selectList.map((item) => (
                                            <option value={item.value} key={item.value}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                                    <textarea name="content" id="content" placeholder="예) 4천시간 채우고 유튜브쇼핑 확정! " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.content} onChange={handleChange} required={true} >
                                    </textarea>
                                </div>
                                <div>
                                    <label htmlFor="result" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">목표 결과</label>
                                    <input type="number" name="result" id="result" placeholder="%" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.result} onChange={handleChange} required={true} />
                                </div>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주최자</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.username} onChange={handleChange} readOnly={true} />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">목표 추가</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed w-screen h-screen left-0 top-0 bg-black z-30 opacity-30 ${viewIsOpen ? "" : "hidden"}`}></div>
            <div className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex ${viewIsOpen ? "" : "hidden"}`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                나만의 목표!!
                            </h3>
                            <button type="button" onClick={toggleViewOpen} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <IconWidget icon="Close" className="fill-black" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" onSubmit={handleSubmit} method="post">
                                <div>
                                    <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">기간</label>
                                    <div className="flex items-center">
                                        <input type="date" name="start_date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            value={formState.start_date} onChange={handleChange} required={true} />
                                        <span className="px-2">~</span>
                                        <input type="date" name="end_date" id="end_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            value={formState.end_date} onChange={handleChange} required={true} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="goal_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">기간별 목표</label>
                                    <select name="goal_type" id="goal_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.goal_type} onChange={handleChange} >
                                        {selectList.map((item) => (
                                            <option value={item.value} key={item.value}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                                    <textarea name="content" id="content" placeholder="예) 4천시간 채우고 유튜브쇼핑 확정! " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.content} onChange={handleChange} required={true} >
                                    </textarea>
                                </div>
                                <div>
                                    <label htmlFor="result" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">목표 결과</label>
                                    <input type="number" name="result" id="result" placeholder="%" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.result} onChange={handleChange} required={true} />
                                </div>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주최자</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={formState.username} onChange={handleChange} readOnly={true} />
                                </div>
                                <div className="flex">
                                    <button type="submit" className="w-full mr-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        수정
                                    </button>
                                    <button type="button" onClick={deleteOn} className="w-full ml-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        삭제
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetMyGoals;