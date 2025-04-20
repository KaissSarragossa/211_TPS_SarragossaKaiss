import '../assets/ToDoForm.css'


function ToDoForm({ onAdd }) {
  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const text = formData.get("addToDo").trim();
    if (text !== "") {
      onAdd(text);
      event.target.reset();
    }
  }

  return (
    <form onSubmit={submit} className="todo-input">
      <input
        type="text"
        id="addToDo"
        name="addToDo"
        placeholder="Add a new task..."
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ToDoForm;
