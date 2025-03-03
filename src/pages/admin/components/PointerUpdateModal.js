import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/hooks/useForm";
import IconWidget from "../../../components/Widget/icon_widget";

const PointerUpdateModal = ({ onClose, data, setData, id }) => {
    const [userData, setUserData] = useState(id);
    const [pointer, setPointer] = useState(userData?.userData?.profile?.points || 0); // 기존 포인터 값 or 0

    const { formState, setFormState, mainUrl, handleSubmit } = useForm(
        {
            user: userData.user,
            points: pointer, 
        },
        async (formData) => {
            try {
                let url = `${mainUrl}/api/accounts/users-profile/${userData.user}/`;

                const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData), // 포인터 값만 업데이트
                });

                if (response.ok) {
                    const result = await response.json();
                    alert("포인터가 업데이트되었습니다.");

                    setData((prev) => ({
                        ...prev,
                        userList: prev.userList.map((e) => {
                            if (e.id === userData.id) {
                                return {
                                    ...e,
                                    userData: {
                                        ...e.userData,
                                        profile: {
                                            ...e.userData.profile,
                                            points: result.points, // 업데이트된 포인터 값 반영
                                        }
                                    }
                                };
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

    const handlePointerChange = (event) => {
        const value = event.target.value;
        setPointer(value);
        setFormState((prev) => ({
            ...prev,
            points: value,
        }));
    };

    useEffect(() => {
        setPointer(userData?.userData?.profile?.points || 0);
    }, [userData]);

    return (
        <div className="relative lg:w-[30em] max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        포인터 설정
                    </h3>
                    <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <IconWidget icon="Close" className="fill-black" />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="col-span-2">
                            <label htmlFor="modal_pointer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">포인터</label>
                            <input type="number" name="points" id="pointer"
                                value={pointer}
                                onChange={handlePointerChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="포인터 값을 입력하세요"
                                required
                            />
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

export default PointerUpdateModal;
