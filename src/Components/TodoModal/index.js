import React from "react";
import ReactDOM  from "react-dom";


function Modal({children}) {

    console.log({children})
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
            <h1>Crear Todo</h1>
            <p>Texto:</p>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }