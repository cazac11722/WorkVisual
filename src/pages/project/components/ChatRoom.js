import { useCallback, useEffect, useState } from "react";
import IconWidget from "../../../components/Widget/icon_widget";
import { useForm } from "../../../contexts/hooks/useForm";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const ChatRoom = () => {
    const params = useParams();
    const { user } = useAuth();
    const [list, setList] = useState([]);

    const { formState, mainUrl, handleChange, handleSubmit } = useForm(
        { user: user.id, task: params.vi, message: "" },
        async (data) => {
            try {
                const response = await fetch(`${mainUrl}/api/task_management/task-chats/`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const result = await response.json();
                    setList((prev) => [...prev, result]);
                    alert("글 작성이 되었습니다.")
                } else {
                    console.error("Login failed:", response.status);
                    // 오류 처리
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    );

    const view = useCallback(async () => {
        try {
            const response = await fetch(`${mainUrl}/api/task_management/task-chats/?task=${params.vi}`, {
                method: 'get',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const result = await response.json();
                setList(result);
            }
        } catch (error) {
        }
    }, [])

    const handleDelete = useCallback(async (id) => {
        try {
            const response = await fetch(`${mainUrl}/api/task_management/task-chats/${id}/`, {
                method: 'delete',
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                // const result = await response.json();
                setList((prev) => (prev.filter((j) => j.id === id ? false : true)));
            }
        } catch (error) {
        }
    })

    useEffect(() => {
        view();
    }, [view])

    return (
        <div className="py-4 lg:py-4 antialiased col-span-3 bg-white shadow-lg rounded-lg" >
            <div className="max-w-full px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({list.length || 0})</h2>
                </div>
                <form className="mb-6" onSubmit={handleSubmit}>
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label className="sr-only" htmlFor="message">Your comment</label>
                        <textarea 
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800" required={true} rows="6">
                        </textarea>
                    </div>
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        글 작성하기
                    </button>
                </form>
                <ul>
                    {
                        list.map((e) => {
                            let date = new Date(e.timestamp)
                            let userchk = e.user === user.id;
                            return (
                                <li key={e.id} className="p-4 mb-3 text-base bg-white rounded-lg dark:bg-gray-900">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center">
                                            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                                <img alt="Michael Gough" className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" />
                                                {e.profile.name || '***'}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                <span >{date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일</span>
                                            </p>
                                        </div>
                                        <button onClick={() => handleDelete(e.id)} className={`inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${userchk ? "" : "hidden"}`} type="button">
                                            <IconWidget icon="Close" className={"fill-red-500 cursor-pointer w-4"} />
                                            <span className="sr-only">Comment settings</span>
                                        </button>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {e.message}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ChatRoom;