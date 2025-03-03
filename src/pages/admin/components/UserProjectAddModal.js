import { useCallback, useEffect, useState } from "react";
import { useForm } from "../../../contexts/hooks/useForm";
import IconWidget from "../../../components/Widget/icon_widget";

const UserProjectAddModal = ({ onClose, data, setData, id }) => {
    const [json, setJson] = useState(data);
    const [active, setActive] = useState({ });
    const { formState, setFormState, mainUrl, handleSubmit } = useForm(
        {
            
        },
        async (formData) => {
            
        }
    );

    const handleSelectChange = (event) => {
        
    };

    const updateData = useCallback(() => {
        
    }, []);

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
                        
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            저장
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProjectAddModal;
