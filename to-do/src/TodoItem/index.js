import React from "react";
import "./TodoItem.css";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

import { BiTrashAlt } from "react-icons/bi";
function TodoItem(props) {

  return (
    <li>
      {props.completed === false ? (
        <GrCheckbox 
            className="check checkbox"
            onClick={props.completeTodo} 
        />
      ) : (
        <GrCheckboxSelected
            className="check checkSelected"
        />
      )}
      <p>{props.text}</p>
      <BiTrashAlt 
        className="clear" 
        onClick={props.delateTodo} 
      />
    </li>
  );
}
export { TodoItem };
