import { useCallback, useEffect, useState } from "react";
import { useForm } from "../../../contexts/hooks/useForm";
import IconWidget from "../../../components/Widget/icon_widget";

const ReasonUpdateModal = ({ onClose, data, setData, id }) => {
    const [reasons, setReasons] = useState(data);
    const [userData, setUserData] = useState(id);
    const [selectedReasonId, setSelectedReasonId] = useState(0);
    const [selectedReasonValue, setSelectedReasonValue] = useState(0);

    const { formState, setFormState, mainUrl, handleChange, handleSubmit } = useForm(
        {
            user: userData.user,
            organization: userData.organization,
            reason: data.map((r, ri) => ({
                id: r.id,
                value: 0
            })),
        },
        async (data) => {
            try {
                const response = await fetch(`${mainUrl}/api/accounts/organization-users/${userData.id}/`, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const result = await response.json();
                    alert("변경이 되었습니다.");
                    
                    setData((prev) => ({
                        ...prev,
                        userList: prev.userList.map((e) => {
                            if (e.id === userData.id) {
                                return {
                                    ...e,
                                    reason: result.reason.map((r, ri) => ({
                                        id: r.id,
                                        value: r.value
                                    }))
                                };
                            }
                            return e;
                        })
                    }));
                } else {
                    console.error("Login failed:", response.status);
                    // 오류 처리
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    );

    const handleReasonChange = (value) => {
        const newSelectedId = value;
        setSelectedReasonId(newSelectedId);
        setSelectedReasonValue(formState.reason[newSelectedId] ? formState.reason[newSelectedId].value : 0);
    };

    const handleValueChange = (value) => {
        setSelectedReasonValue(value);
        formState.reason[selectedReasonId].value = value;
    };
    const updateData = useCallback(() => {
        let vList = reasons.map((r, ri) => {
            let v = userData.reason?.length != null ? userData.reason[ri]?.value : 0;
            return v || 0;
        });

        setData((prev) => ({
            ...prev,
            userList: prev.userList.map((e) => {
                if (e.id === userData.id) {
                    return {
                        ...e,
                        reason: data.map((r, ri) => ({
                            id: r.id,
                            value: vList[ri]
                        }))
                    };
                }
                return e;
            })
        }));

        setFormState((prev) => ({
            ...prev,
            reason: data.map((r, ri) => ({
                id: r.id,
                value: vList[ri]
            }))
        }));

        handleValueChange(vList[0])
    }, [userData, data]);

    useEffect(() => {
        updateData();
    }, [updateData]);


    return (
        <div className="relative lg:w-[30em] max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        사유 설정
                    </h3>
                    <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <IconWidget icon="Close" className="fill-black" />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="p-4 md:p-5 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="department_update" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">종류</label>
                        <select
                            name="department"
                            id="department_update"
                            value={selectedReasonId}
                            onChange={(event) => handleReasonChange(event.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        >
                            {data.map((e, i) => (
                                <option key={e.id} value={i}>{e.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pointer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">값</label>
                        <input
                            type="number"
                            name="pointer"
                            id="pointer"
                            value={selectedReasonValue}
                            onChange={(event) => handleValueChange(event.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required=""
                        />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        저장
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ReasonUpdateModal;
