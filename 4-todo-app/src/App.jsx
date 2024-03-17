import AddTodo from "./components/Addtodo";
import WellcomeMessage from "./components/WellcomeMessage";
import AppName from "./components/appName";

import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";
import { TodoItemContext } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, dueDate) => {
    setTodoItems((currVal) => [
      ...currVal,
      {
        name: itemName,
        dueDate: dueDate,
      },
    ]);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <TodoItemContext.Provider
      value={{
         todoItems,
         deleteItem,
         addNewItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WellcomeMessage />
        <TodoItems />
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
