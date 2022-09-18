import React from "react";
import './styles/todoCounter.css'
function TodoCounter(params) {

    return(
        <section className="sectionTitles">
            <h1>To do</h1>
            <h2 className="todoCounter">Has completado 2 de 3 numeros</h2>
        </section>
        
    )
}
export {TodoCounter} 