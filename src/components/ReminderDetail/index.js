import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Modal from "../Modal";
import "./style.css";
import { RiCheckboxBlankCircleFill , RiCalendar2Fill ,RiMapPinFill , RiDeleteBin5Line} from "react-icons/ri";
import {MdOutlineModeEditOutline} from "react-icons/md";
import {ButtonPrimary, ButtonSecondary} from "../Button";

function ReminderDetail(props, ref){

    const modalRef = useRef();
    useImperativeHandle(ref, ()=>({
        show:()=>{
            modalRef.current.show();
        }
    }))
    return (
        <Modal ref={modalRef} title="Detalhes do lembrete">
            <div className="container-reminder-detail">
                <ul>
                    <li>
                        <div>
                            <RiCheckboxBlankCircleFill />
                        </div>
                        <div className="reminder-title">
                            Evento de teste exemplo
                        </div>
                    </li>                    
                    <li>
                        <div>
                            <RiCalendar2Fill />
                        </div>
                        <div className="reminder-title">
                            19/12/2021 10:00
                        </div>
                    </li>
                    <li>
                        <div>
                            <RiMapPinFill />
                        </div>
                        <div className="reminder-title">
                            Fortaleza
                        </div>
                    </li>
                </ul>
                <div className="add-reminder-footer">
                    <ButtonSecondary type="button" onClick={()=> modalRef.current.hide()}>
                        <MdOutlineModeEditOutline />
                        Editar lembrete
                    </ButtonSecondary>
                    <ButtonPrimary>
                        <RiDeleteBin5Line />
                        Excluir lembrete
                    </ButtonPrimary>
                </div>
            </div>
        </Modal>
    );
}

export default forwardRef(ReminderDetail);