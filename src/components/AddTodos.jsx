import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodoCancel,
  updateTodo,
} from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const isUpdating = useSelector((state) => state.isUpdating);
  const currentTodoId = useSelector((state) => state.currentTodoId);

  useEffect(() => {
    if (isUpdating && currentTodoId) {
      setInput(currentTodoId.text);
    }
  }, [isUpdating, currentTodoId]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (isUpdating) {
        dispatch(updateTodo({ id: currentTodoId.id, text: input }));
        setInput("");
      } else {
        dispatch(addTodo(input));
        setInput("");
      }
    }
  };

  const cancelTodoHandler = () => {
    dispatch(updateTodoCancel());
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center gap-4 p-4 bg-white shadow-md rounded-md max-w-md mx-auto mt-10"
    >
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
      >
        {isUpdating ? "Update" : "Add"}
      </button>
      {isUpdating && (
        <button
          onClick={cancelTodoHandler}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddTodo;
