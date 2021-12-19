import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import Modal from "../Modal";
import "./style.css";
import { RiCheckboxBlankCircleFill , RiCalendar2Fill ,RiMapPinFill , RiDeleteBin5Line} from "react-icons/ri";
import {MdOutlineModeEditOutline} from "react-icons/md";
import {ButtonDanger, ButtonPrimary} from "../Button";
import { useApp } from "../../contexts/app";
import api from "../../services/api";

function ReminderDetail(props, ref){
    const {reminder,setEditReminder, setReminder, setLoading, updateReminders} = useApp();
    const modalRef = useRef();
    useImperativeHandle(ref, ()=>({
        show:()=>{
            modalRef.current.show();
        }
    }));

    useEffect(()=>{
        if(reminder){
            modalRef.current.show();
        }else{
            modalRef.current.hide();
        }
    },[reminder]);


    async function handleRemoveReminder(id){
        setLoading(true);
        await api.delete(`reminder/${id}`);
        setLoading(false);
        modalRef.current.hide();
        setReminder(null);
        updateReminders();
    }

    return (
        <Modal 
            onClose={()=>{
                setReminder(null);
            }} 
            ref={modalRef} 
            title="Detalhes do lembrete">
            <div className="container-reminder-detail">
                <ul>
                    <li>
                        <div>
                            <RiCheckboxBlankCircleFill style={{ color: reminder ? reminder.color : "#000"}} />
                        </div>
                        <div className="reminder-title">
                            {reminder ? reminder.title : ""}
                        </div>
                    </li>                    
                    <li>
                        <div>
                            <RiCalendar2Fill />
                        </div>
                        <div>
                            {reminder ? reminder.reminderDate.toLocaleString() : ""}
                        </div>
                    </li>
                    <li>
                        <div>
                            <RiMapPinFill />
                        </div>
                        <div>
                        {reminder ? reminder.cityName  != null ? reminder.cityName : "Não informado" : ""}
                        </div>
                    </li>
                    <li>
                        {reminder ? reminder.icon  != null ? <img src={reminder.icon} /> : "" : ""}
                    </li>
                </ul>
                <div className="detail-reminder-footer">
                    <ButtonPrimary type="button" onClick={()=>{ 
                            setEditReminder(reminder);
                            modalRef.current.hide()
                        }}>
                        <MdOutlineModeEditOutline />
                        Editar lembrete
                    </ButtonPrimary>
                    <ButtonDanger onClick={()=>{
                        handleRemoveReminder(reminder.id);
                    }}>
                        <RiDeleteBin5Line />
                        Excluir lembrete
                    </ButtonDanger>
                </div>
            </div>
        </Modal>
    );
}

export default forwardRef(ReminderDetail);