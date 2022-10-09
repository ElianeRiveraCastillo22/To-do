import React from "react";
import './CreateTodoButton.css'
import { FcPlus } from "react-icons/fc";

function CreateTodoButton(params) {
    const onClickButton=(msg)=>{
        alert(msg)
    }
    return(
        <FcPlus 
            className="moreTodo"
            onClick={()=>onClickButton("aqui va el modal")}
        />
    )
}
export {CreateTodoButton}