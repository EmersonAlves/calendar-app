import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { IoIosClose } from 'react-icons/io';
import "./style.css";

function Modal({title,children,onClose},ref){
    const [visible, setVisible] = useState(false);
    
    useImperativeHandle(ref, ()=> ({
        show:() => {
            setVisible(true)
        },
        hide:() => {
            setVisible(false);
        }
    }));

    useEffect(()=>{
        if(!visible && onClose){
            onClose();
        }

    },[visible])
    
    return (
        <div className={!visible ? "container-modal" : "container-modal active"} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p>{title}</p>
                        <button onClick={()=> setVisible(false)}>
                            <IoIosClose />
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
        )
}

export default forwardRef(Modal);