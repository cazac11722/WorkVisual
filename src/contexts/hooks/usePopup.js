import React, { createContext, useContext, useState } from "react";
import PopupContent from "../PopupContent";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popupState, setPopupState] = useState({
        isOpen: false,
        type: null,
        setData: null,
        data: null,
        id: null
    });

    const openPopup = ({ type, setData, data, id }) => setPopupState({ isOpen: true, type: type, setData: setData, data: data, id: id });
    const closePopup = () => setPopupState({ isOpen: false, type: null, setData: null, data: null, id: null });

    return (
        <PopupContext.Provider value={{ popupState, openPopup, closePopup }}>
            {children}
            {popupState.isOpen && (
                <>
                    <div onClick={closePopup} className={`fixed w-screen h-screen left-0 top-0 bg-black z-30 opacity-30 ${popupState.isOpen ? "" : "hidden"}`}></div>
                    <div className="fixed bg-opacity-50 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-50">
                        <PopupContent type={popupState.type} onClose={closePopup} setData={popupState.setData} data={popupState.data} id={popupState.id} />
                    </div>
                </>
            )}
        </PopupContext.Provider>
    );
};

export const usePopup = () => useContext(PopupContext);
