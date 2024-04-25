import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const contextObj = useContext(TodoItemContext);
  const onDeleteClick = contextObj.deleteItem;
  return (
    <div className="container ">
      <div className="row todo-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
