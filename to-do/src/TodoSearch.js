import React from "react";
import './styles/TodoSearch.css'
import { FcSearch } from "react-icons/fc";
function TodoSearch(params) {
  return (
    <section className="todoSearch">
      <input placeholder="Cebollas" />
      <FcSearch className="clearIcon"/>
    </section>
  );
}
export { TodoSearch };
