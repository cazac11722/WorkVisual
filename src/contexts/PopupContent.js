import React from "react";

const PopupContent = ({ type, onClose, setData, data }) => {
    switch (type) {
        default:
            return (
                <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        알 수 없는 팝업
                    </h3>
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        닫기
                    </button>
                </div>
            );
    }
};

export default PopupContent;
