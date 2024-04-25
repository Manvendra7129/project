import { useContext, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemContext } from "../store/todo-items-store";

function AddTodo() {
  const contextObj = useContext(TodoItemContext);

  const onNewItem = contextObj.addNewItem;
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container ">
      <div>
        <form
          className="row todo-row"
          onSubmit={(event) => handleAddButtonClicked(event)}
        >
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter todo here"
              ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary todo-btn">
              <IoMdAddCircleOutline />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTodo;
