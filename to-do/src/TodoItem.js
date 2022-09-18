import React from "react";
import "./styles/TodoItem.css"
import { FcCheckmark } from "react-icons/fc";
import { BiTrashAlt } from "react-icons/bi";
function TodoItem(props) {
    return(
        <li>
            <input type="radio"></input>
            <p>{props.text}</p>
            <BiTrashAlt className="clear"/>
        </li>
    )
}
export {TodoItem}
