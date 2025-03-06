import { useCallback, useEffect, useState } from "react";
import { useForm } from "../../../contexts/hooks/useForm";
import IconWidget from "../../../components/Widget/icon_widget";

const OrganizationCommonTextSetModal = ({ onClose, data }) => {
    const [chData, setChData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // ✅ 한 페이지당 3개씩 표시

    const { formState, mainUrl, handleChange, handleSubmit } = useForm(
        { title: "", content: "", type: "text", organization: data },
        async (json) => {
            try {
                const response = await fetch(`${mainUrl}/api/accounts/organization-commontext/`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(json),
                });

                if (response.ok) {
                    const result = await response.json();
                    alert("추가 완료 되었습니다.")
                    setChData((prev) => [...prev, result]);

                } else {
                    console.error("Login failed:", response.status);
                    // 오류 처리
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    );

    const list = useCallback(async () => {
        const response = await fetch(`${mainUrl}/api/accounts/organization-commontext/?organization=1`, {
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

    const deleteOn = async (id) => {
        try {
            const response = await fetch(`${mainUrl}/api/accounts/organization-commontext/${id}/`, {
                method: "Delete",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                alert("삭제가 되었습니다.");
                // ✅ 삭제된 항목을 목록에서 제거
                setChData((prev) => [...prev.filter(dept => dept.id !== id)]);

            } else {
                console.error("Login failed:", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    // ✅ 페이지네이션 계산
    const totalPages = Math.ceil((chData?.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredDepartments = chData?.slice(startIndex, endIndex) || [];

    useEffect(() => {
        list();
    }, [list])

    return (
        <div className="relative lg:w-[50em] max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        공통 텍스트 설정
                    </h3>
                    <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <IconWidget icon="Close" className="fill-black" />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <form className="space-y-4 2xl:col-span-2" onSubmit={handleSubmit}>
                        <div className="col-span-2">
                            <label htmlFor="organization-commontext-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
                            <input type="text" name="title" id="organization-commontext-title" value={formState.name} onChange={handleChange} required={true} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="organization-commontext-content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                            <textarea
                                type="text"
                                rows={5}
                                id={`organization-commontext-content`}
                                name={`content`}
                                value={formState.content}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="organization-commontext-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">속성</label>
                            <select
                                id="organization-commontext-type"
                                name="type"
                                value={formState.type}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                <option value="text">글자</option>
                                <option value="number">숫자</option>
                                <option value="date">날짜</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            저장
                        </button>
                    </form>
                    <div className="2xl:col-span-3">
                        <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">공통 텍스트 목록</h3>
                        <table className="dark:divide-gray-600 w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="border p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[20%]">제목</th>
                                    <th scope="col" className="border p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[50%]">내용</th>
                                    <th scope="col" className="border p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-1/4">삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDepartments.length > 0 ? (
                                    filteredDepartments.map((e) => (
                                        <tr key={e.id}>
                                            <td className="border py-3 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                {e.title}
                                            </td>
                                            <td className="border py-3 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.content}
                                            </td>
                                            <td className="border py-3 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <button onClick={() => deleteOn(e.id)} type="button" className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                                                    삭제
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="border py-3 text-center text-gray-500">
                                            등록된 공통 텍스트가 없습니다.
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

export default OrganizationCommonTextSetModal;