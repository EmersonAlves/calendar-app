import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Modal from "../Modal";
import { CirclePicker } from 'react-color';
import "./style.css";
import colors from "../../assets/colors.json"
import {ButtonPrimary, ButtonSecondary} from "../Button";
import { useApp } from "../../contexts/app";
import api from "../../services/api";

function AddReminder(props, ref){
    const {setLoading, updateReminders,getWeather} = useApp();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [cityName, setCityName] = useState("");
    const [color, setColor] = useState("#c62828")

    const modalRef = useRef();
    useImperativeHandle(ref, ()=>({
        show:(result)=>{
            document.querySelector("#reminderDate").valueAsDate = result;
            setDate(document.querySelector("#reminderDate").value);
            modalRef.current.show();
        }
    }));

    function clearForm(){
        setTitle("");
        setDate("");
        setTime("");
        setCityName("");
        setColor("#c62828")
    }

    async function handleReminder(event){
        event.preventDefault();

        const data = {
            title,
            date,
            time,
            cityName,
            color
        };

        setLoading(true);

        let icon = null;

        if(cityName.trim() !== '')
            icon = await getWeather(cityName);

        await api.post('reminder', {...data,icon});
        modalRef.current.hide();

        setLoading(false);
        updateReminders();
        clearForm();
    }

    return (
        <Modal ref={modalRef} title="Adicionar Lembrete">
            <div className="container-add-reminder">
                <form onSubmit={handleReminder}>
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
                        <label>Hor??rio</label>
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
                            value={cityName}
                            onChange={(event) => setCityName(event.target.value)}
                            autoComplete="off"/>
                    </div>
                    <div className="input-group">
                        <label>Cor</label>
                        <CirclePicker 
                            color={color}
                            onChangeComplete={(color)=>{
                                setColor(color.hex);
                            }}
                            colors={colors}
                            width="100%"
                            className="content-color"
                            circleSpacing={10}
                            circleSize={24}  /> 
                    </div>
                    <div className="add-reminder-footer">
                        <ButtonSecondary type="button" onClick={()=>{
                            clearForm();
                            modalRef.current.hide()
                        }}>
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