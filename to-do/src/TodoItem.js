import React from "react";
import "./styles/TodoItem.css";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

import { BiTrashAlt } from "react-icons/bi";
function TodoItem(props) {
    const onComplete=()=>{
        alert("ya completaste el todo "+ props.text)
    }
    const onDelate=()=>{
        alert("borraste el todo "+ props.text)
    }
  return (
    <li>
      {props.completed === false ? (
        <GrCheckbox 
            className="check checkbox"
            onClick={onComplete} 
        />
      ) : (
        <GrCheckboxSelected
            className="check checkSelected"
            onClick={onDelate}
        />
      )}
      <p>{props.text}</p>
      <BiTrashAlt className="clear" />
    </li>
  );
}
export { TodoItem };
