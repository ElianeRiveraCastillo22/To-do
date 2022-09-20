import React from "react";
import './styles/todoCounter.css'
function TodoCounter({completedTodos,totalTodos}) {
    return(
        <section className="sectionTitles">
            <h1>To do</h1>
            <h2 className="todoCounter">Has completado {completedTodos} de {totalTodos} numeros</h2>
        </section>
        
    )
}
export {TodoCounter} 