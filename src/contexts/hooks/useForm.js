// hooks/useForm.js
import { useState } from "react";

export const useForm = (initialState, onSubmit) => {
    // const mainUrl = 'https://cazac11722.pythonanywhere.com/';
    const mainUrl = 'http://127.0.0.1:8000/';

    const [formState, setFormState] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState((prevState) => {
            // `name`이 `profile.phone_number` 같은 중첩된 값인지 확인
            if (name.includes(".")) {
                const [parent, child] = name.split(".");

                return {
                    ...prevState,
                    [parent]: {
                        ...prevState[parent],
                        [child]: value
                    }
                };
            }

            // 일반 필드 처리 (username, email 등)
            return {
                ...prevState,
                [name]: value,
            };
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formState);
        } catch (error) {
            setErrors(error);
        }
    };

    return { formState, setFormState, mainUrl, handleChange, handleSubmit, errors };
};
