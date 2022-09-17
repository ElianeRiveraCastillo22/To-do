import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

/* import logo from './logo.svg';
import './App.css'; */
const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "tomar el curso de intro a react", completed: false },
  { text: "llorar como la llorona", completed: false },
];
function App() {
  return (
    <>
      <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} />
          ))}
        </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
