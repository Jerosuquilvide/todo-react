import React from "react";
import ReactDOM  from "react-dom";
import './TodoModal.css';
function Modal({children, onUpdate, guardarTodo}) {

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }