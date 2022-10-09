import React from "react";
import { AppUI } from "./AppUI";

/* const defaulttodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "tomar el curso de intro a react", completed: false },
  { text: "llorar como la llorona", completed: false },
  { text: "estudiar", completed: true },
]; */
const useLocalStorage = (itemName, initialValue) => {
  const [loading,setLoading]=React.useState(true)
  const [error,setError]=React.useState(false)
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(()=>{
    setTimeout(()=>{
    try{
      const localStorageTodosItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageTodosItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageTodosItem);
      }
      setItem(parsedItem)
      setLoading(false)
    }catch(error){
      setError(error)
    }

    },1000)
  })


  const saveItem = (newItem) => {
    try{
      const stringfiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringfiedItem);
      setItem(newItem);
    }catch(error){
      setError(error)
    }

  };

  return {item, saveItem,loading,error};
};
function App() {
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setsearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchTtext = searchValue.toLowerCase();
      return todoText.includes(searchTtext);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const delateTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setsearchValue={setsearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      delateTodo={delateTodo}
    />
  );
}

export default App;
