// hooks/useForm.js
import { useState } from "react";

export const useForm = (initialState, onSubmit) => {
    const mainUrl = 'https://cazac11722.pythonanywhere.com/';
    const [formState, setFormState] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formState);
        } catch (error) {
            setErrors(error);
        }
    };

    return { formState, mainUrl, handleChange, handleSubmit, errors };
};
