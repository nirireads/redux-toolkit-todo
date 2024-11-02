import AddTodo from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800">
      <header className="mt-10">
        <h1 className="text-3xl font-bold text-blue-600">
          Todo/Learning Redux
        </h1>
      </header>
      <main className="w-full max-w-lg mt-6">
        <AddTodo />
        <Todos />
      </main>
    </div>
  );
}

export default App;
