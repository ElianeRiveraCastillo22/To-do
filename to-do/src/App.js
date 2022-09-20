import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

/* import logo from './logo.svg';
import './App.css'; */
const defaulttodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "tomar el curso de intro a react", completed: false },
  { text: "llorar como la llorona", completed: false },
  { text: "estudiar", completed: true },
];
function App() {
  const [todos,setTodos]=React.useState(defaulttodos)
  const [searchValue,setsearchValue]=React.useState("")

  const completedTodos= todos.filter( todo => !!todo.completed ).length
  const totalTodos= todos.length

  let searchedTodos=[]
  if(!searchValue.length>=1){
    searchedTodos=todos
  }else {
    searchedTodos=todos.filter(todo=>{

      const todoText=todo.text.toLowerCase()
      const searchTtext=searchValue.toLowerCase()
     return todoText.includes(searchTtext)
    })

  }

  return (
    <>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue} 
        setsearchValue={setsearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
