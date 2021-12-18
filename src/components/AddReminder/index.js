import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Modal from "../Modal";
import { CirclePicker } from 'react-color';
import "./style.css";
import colors from "../../assets/colors.json"
import {ButtonPrimary, ButtonSecondary} from "../Button";

function AddReminder(props, ref){
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [nameCity, setNameCity] = useState("");
    const [color, setColor] = useState("#c62828")

    const modalRef = useRef();
    useImperativeHandle(ref, ()=>({
        show:(result)=>{
            document.querySelector("#reminderDate").valueAsDate = result;
            modalRef.current.show();
        }
    }))
    return (
        <Modal ref={modalRef} title="Adicionar Lembrete">
            <div className="container-add-reminder">
                <form>
                    <div className="input-group">
                        <label>Titulo</label>
                        <input 
                            type="text"
                            value={title} 
                            onChange={(event) => setTitle(event.target.value)}
                            maxLength={30} 
                            autoComplete="off"
                             required />
                    </div>
                    <div className="input-group">
                        <label>Data</label>
                        <input 
                            type="date"
                            value={date}
                            id="reminderDate"
                            onChange={(event) => setDate(event.target.value)}
                            required 
                            disabled />
                    </div>
                    <div className="input-group">
                        <label>Horário</label>
                        <input 
                            type="time" 
                            value={time} 
                            onChange={(event) => setTime(event.target.value)}
                            required
                             />
                    </div>
                    <div className="input-group">
                        <label>Nome da cidade</label>
                        <input 
                            type="text" 
                            value={nameCity}
                            onChange={(event) => setNameCity(event.target.value)}
                            autoComplete="off"/>
                    </div>
                    <div className="input-group">
                        <label>Cor</label>
                        <CirclePicker 
                            color={color}
                            onChangeComplete={(color)=>{
                                setColor(color);
                            }}
                            colors={colors}
                            width="100%"
                            className="content-color"
                            circleSpacing={10}
                            circleSize={24}  /> 
                    </div>
                    <div className="add-reminder-footer">
                        <ButtonSecondary type="button" onClick={()=> modalRef.current.hide()}>
                            Cancelar
                        </ButtonSecondary>
                        <ButtonPrimary>
                            Adicionar
                        </ButtonPrimary>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default forwardRef(AddReminder);