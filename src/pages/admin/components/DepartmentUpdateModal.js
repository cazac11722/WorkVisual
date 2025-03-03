import { useCallback, useEffect, useState } from "react";
import { useForm } from "../../../contexts/hooks/useForm";
import IconWidget from "../../../components/Widget/icon_widget";

const DepartmentUpdateModal = ({ onClose, data, setData, id }) => {
    const [json, setJson] = useState(data);
    const [userData, setUserData] = useState(id);
    const [active, setActive] = useState({
        department: id.department,
        rank: id.rank,
    });
    const { formState, setFormState, mainUrl, handleSubmit } = useForm(
        {
            user: userData.user,
            organization: userData.organization,
            department: "",
            rank: "",
        },
        async (formData) => {
            try {
                const response = await fetch(`${mainUrl}/api/accounts/organization-users/${userData.id}/`, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    const result = await response.json();
                    alert("부서 및 직급이 변경되었습니다.");
                    setData((prev) => ({
                        ...prev,
                        userList: prev.userList.map((e) => {
                            if (e.id === userData.id) {
                                return result;
                            }
                            return e;
                        })
                    }));
                } else {
                    console.error("Update failed:", response.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    );

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setActive((prev) => ({ ...prev, [name]: value }));
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const updateData = useCallback(() => {
        setData((prev) => ({
            ...prev,
            userList: prev.userList.map((e) => {
                if (e.id === userData.id) {
                    return {
                        ...e,
                        department: userData.department || "",
                        rank: userData.rank || "",
                    };
                }
                return e;
            })
        }));

        setFormState((prev) => ({
            ...prev,
            department: userData.department || "",
            rank: userData.rank || "",
        }));
    }, [userData]);

    useEffect(() => {
        updateData();
    }, [updateData]);

    return (
        <div className="relative lg:w-[30em] max-h-full">
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
                <div className="p-4 md:p-5">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="col-span-2">
                            <label htmlFor="departmen_update" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">부서</label>
                            <select name="department" id="departmen_update" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                value={active.department} onChange={handleSelectChange}>
                                <option value="">선택해 주세요.</option>
                                {json?.department_list.map((e) => (
                                    <option key={e.id} value={e.id} >{e.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="rank_update" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">직급</label>
                            <select name="rank" id="rank_update" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                value={active.rank} onChange={handleSelectChange}>
                                <option value="">선택해 주세요.</option>
                                {json?.rank_list.map((e) => (
                                    <option key={e.id} value={e.id}>{e.title}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            저장
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DepartmentUpdateModal;
