import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodoStart } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Todos</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm"
          >
            <span className="text-gray-700">{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(updateTodoStart(todo))}
                className="text-green-500 hover:text-green-700 font-semibold transition-colors duration-200"
              >
                Update
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 font-semibold transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
