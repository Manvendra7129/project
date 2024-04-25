import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
  const contextObj = useContext(TodoItemContext);
  const todoItems = contextObj.todoItems;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};
export default TodoItems;
