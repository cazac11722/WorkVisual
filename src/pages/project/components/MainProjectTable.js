import { useEffect, useState, useCallback } from "react";
import { useForm } from "../../../contexts/hooks/useForm";
import { Link } from "react-router-dom";

const MainProjectTable = () => {
    const [data, setData] = useState([]);
    const { mainUrl } = useForm();

    const list = useCallback(async () => {
        const response = await fetch(`${mainUrl}/api/task_management/tasks/`, {
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
        <section className="">
            <div className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-10"><input type="checkbox" /></th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">업로드일</th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-1/6">제목</th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-1/4">내용</th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">작성자</th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">진행사항</th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">업무 개수</th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">총 시간</th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e, i) => {
                                let date = new Date(e.upload_date);
                                return (<tr key={i}>
                                    <td className="p-4 text-sm border-r font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-4 text-sm border-r text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">{date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일</td>
                                    <td className="p-4 text-sm border-r font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        <Link to={`/WorkVisual/p/1/view/${e.id}`} className="font-semibold hover:underline">{e.title}</Link>
                                    </td>
                                    <td className="p-4 text-sm border-r font-normal text-gray-900 whitespace-nowrap dark:text-white">{e.content}</td>
                                    <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                                    </td>
                                    <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                                    </td>
                                    <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        <span>1</span>개
                                    </td>
                                    <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        30분
                                    </td>
                                    <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        <button type="button" className="Btn_Tiem_Start bg-green-500 text-white px-2 py-1 rounded text-sm mr-1">수정</button>
                                        <button type="button" className="Btn_Tiem_End bg-red-500 text-white px-2 py-1 rounded text-sm">삭제</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center mb-4 sm:mb-0">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span className="font-semibold text-gray-900 dark:text-white">1-20</span>
                        of
                        <span className="font-semibold text-gray-900 dark:text-white">2290</span>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default MainProjectTable;