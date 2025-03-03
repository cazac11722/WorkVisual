import { useCallback, useEffect, useState } from "react";
import { useForm } from "../../../contexts/hooks/useForm";
import IconWidget from "../../../components/Widget/icon_widget";

const UserAddModal = ({ onClose, data, setData }) => {
    const [chData, setChData] = useState();
    const [woData, setWoData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const filteredUsers = searchTerm
    ? chData.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()))
    : chData;


    const itemsPerPage = 3; // ✅ 한 페이지당 3개씩 표시

    const { mainUrl } = useForm();

    const userChk = (id) => {
        return woData.userList.some(e => e.userData.id === id);
    }

    const list = useCallback(async () => {
        const response = await fetch(`${mainUrl}/api/accounts/users/`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            const result = await response.json();
            setChData(result);
        }
    }, [])

    const addOn = async (id) => {
        let json = {
            department: null,
            rank: null,
            organization: woData.id,
            user: id,
            reason: null
        }
        try {
            const response = await fetch(`${mainUrl}/api/accounts/organization-users/`, {
                method: "post",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(json),
            });

            if (response.ok) {
                const result = await response.json();
                alert("추가 완료가 되었습니다.");
                // ✅ 삭제된 항목을 목록에서 제거
                setData((prev) => ({
                    ...prev,
                    userList: [...(prev.userList || []), result]
                }));
                setWoData((prev) => ({
                    ...prev,
                    userList: [...(prev.userList || []), result]
                }));
            } else {
                console.error("Login failed:", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    const highlightText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === highlight.toLowerCase() ? <mark key={index}>{part}</mark> : part
        );
    };


    // ✅ 페이지네이션 계산
    const totalPages = Math.ceil((filteredUsers?.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredDepartments = filteredUsers?.slice(startIndex, endIndex) || [];

    useEffect(() => {
        list();
    }, [list])


    return (
        <div className="relative lg:w-[30em] max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        팀원 추가
                    </h3>
                    <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <IconWidget icon="Close" className="fill-black" />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5">
                    <form className="space-y-4">
                        <div className="col-span-2">
                            <label htmlFor="department_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">팀원 찾기</label>
                            <div className="flex justify-between">
                                <input
                                    type="text"
                                    placeholder="팀원 닉넥임을 입력해주세요. "
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                        </div>
                    </form>
                    <div className="2xl:col-span-3 mt-4">
                        {/* <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">부서 목록</h3> */}
                        <table className="dark:divide-gray-600 w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="border px-4 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[20%]">닉네임</th>
                                    <th scope="col" className="border px-4 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[50%]">이메일</th>
                                    <th scope="col" className="border px-4 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-1/4">추가</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDepartments.length > 0 ? (
                                    filteredDepartments.map((e) => (
                                        <tr key={e.id}>
                                            <td className="border py-2 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                {highlightText(e.username, searchTerm)}
                                            </td>
                                            <td className="border py-2 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.email}
                                            </td>
                                            <td className="flex items-center justify-center border py-2 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                {
                                                    userChk(e.id) ? (
                                                        <IconWidget icon="CheckBox" className="fill-green-500 w-5" />
                                                    ) : (
                                                        <button onClick={() => addOn(e.id)} type="button" className="bg-blue-500 text-white px-1 rounded text-sm">
                                                            <IconWidget icon="Add" className="fill-white w-4" />
                                                        </button>
                                                    )
                                                }

                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="border py-3 text-center text-gray-500">
                                            등록된 부서가 없습니다.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* ✅ 페이지네이션 */}
                        <div className="flex items-center justify-center  h-8 text-sm mt-5">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                            >
                                이전
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1 mx-1 rounded-lg ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                            >
                                다음
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAddModal;