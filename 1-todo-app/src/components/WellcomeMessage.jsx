import { TodoItemContext } from "../store/todo-items-store";
import styles from "./WellcomeMessage.module.css";
import { useContext } from "react";
const WellcomeMessage = () => {
  const contextObj = useContext(TodoItemContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.Wellcome}>Enjoy Your Day</p>
  );
};
export default WellcomeMessage;
