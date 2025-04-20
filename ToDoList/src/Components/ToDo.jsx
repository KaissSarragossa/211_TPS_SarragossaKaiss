import '../assets/ToDo.css'

function ToDo({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <p className={`todo-text ${todo.done ? "done" : ""}`}>
        {todo.description}
      </p>
      <div className="todo-buttons">
        <button className={`done-button ${todo.done ? "undone" : ""}`} onClick={() => onToggle(todo.id)}>
          {todo.done ? "↩" : "✔"}
        </button>
        <button className="delete-button" onClick={() => onDelete(todo.id)}>
          ✖
        </button>
      </div>
    </li>
  );
}

export default ToDo;
