import React from "react";
import './TodoSearch.css'
import { FcSearch } from "react-icons/fc";
function TodoSearch({searchValue,setsearchValue}) {

const onSearchValueChange=(event)=>{
  setsearchValue(event.target.value)
}

  return [
    <section className="todoSearch">
      <input
        placeholder="Cebollas"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <FcSearch className="clearIcon"/>
    </section>,
    <p>{searchValue}</p>
  ]  ;


}
export { TodoSearch };
