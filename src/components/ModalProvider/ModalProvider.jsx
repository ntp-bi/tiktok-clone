import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [active, setActive] = useState(false);

    const handleShowModal = () => {
        setActive(true);
    };

    const handleHideModal = () => {
        setActive(false);
    };

    const value = {
        active,
        handleShowModal,
        handleHideModal,
    };

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
