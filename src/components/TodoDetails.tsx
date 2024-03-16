import { todoPriority, todoStatus } from "../constant";
import { showDetails } from "../redux/features/todoDetails/todoDetailsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const TodoDetails = () => {
  const todoId = useAppSelector((state) => state.todoDetails.todoId);
  const todos = useAppSelector((state) => state.todo.todoList);
  const todo = todos.find((todo) => todo.id === todoId);
  const dispatch = useAppDispatch();
  return (
    <div className='todo-details-container'>
      <p onClick={() => dispatch(showDetails({ showDetails: false, todoId: "" }))}>Back</p>
      <p>Todo Title: {todo?.title}</p>
      <p>
        Todo Priority:{" "}
        <span
          style={{
            backgroundColor:
              todo?.priority === todoPriority.high
                ? "#F06A6D"
                : todo?.priority === todoPriority.low
                ? "#F2C94C"
                : "#54C1AD",
            color: "white",
            fontWeight: "bold",
            padding: "5px 15px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          {todo?.priority}
        </span>
      </p>
      <p>
        Todo Status:{" "}
        <span
          style={{
            color: todo?.status === todoStatus.completed ? "green" : "#F06A6D",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {" "}
          {todo?.status}
        </span>{" "}
      </p>
      <p>Todo Description: {todo?.description}</p>
    </div>
  );
};

export default TodoDetails;
