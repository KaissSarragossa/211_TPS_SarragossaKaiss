import { useState } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import './assets/App.css'


function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  function addTodo(description) {
    const newTodo = {
      id: nextId,
      description,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setNextId(prev => prev + 1);
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function finishAll() {
    const allDone = todos.every(todo => todo.done);
    setTodos(prev =>
      prev.map(todo => ({ ...todo, done: !allDone }))
    );
  }

  function clearAll() {
    setTodos([]);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ToDoForm onAdd={addTodo} />
      <p>
        Total: {" " + todos.length} |
        À faire:{" " + todos.filter(todo => !todo.done).length} |
        Finis: {" " + todos.filter(todo => todo.done).length}
      </p>
      <div className="finishAndSuppDiv-buttons">
        <button className="finishAndSupp-button" onClick={finishAll}>Finir tous / Réactivé tous</button>
        <button className="finishAndSupp-button" onClick={clearAll}>Effacer tous</button>
      </div>
      <ToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
