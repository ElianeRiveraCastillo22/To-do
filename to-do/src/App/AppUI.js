import React from "react";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";

const AppUI = ({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setsearchValue,
  searchedTodos,
  completeTodo,
  delateTodo,
}) => {
  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            delateTodo={() => {
              delateTodo(todo.text);
            }}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
export { AppUI };
