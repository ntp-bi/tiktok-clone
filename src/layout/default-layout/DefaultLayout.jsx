import React, { useContext } from "react";
import PropTypes from "prop-types";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import GetApp from "../../components/get-app/GetApp";
import Modal from "../../components/Modal/Modal";

import { ModalContext } from "../../components/ModalProvider/ModalProvider";

import "./default-layout.scss";

const DefaultLayout = (props) => {
    const { active, handleHideModal } = useContext(ModalContext);

    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {props.children}
                    <GetApp />
                </div>
            </div>
            {active && <Modal onHide={handleHideModal} />}
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
