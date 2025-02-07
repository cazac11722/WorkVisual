import React from "react";

const InputField = ({ label, type, name, id, placeholder, required, value, onChange }) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required={required}
                value={value} // 상태 값을 바인딩
                onChange={onChange} // 변경 이벤트 처리
            />
        </div>
    );
};

export default InputField;
