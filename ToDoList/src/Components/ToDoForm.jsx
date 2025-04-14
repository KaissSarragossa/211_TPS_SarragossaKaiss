import '../assets/ToDoForm.css'
import ToDoList from './ToDoList';

function TodoForm(props) {

    function addToDo(formData) {
        const textToDo = formData.get("addToDo")
        alert(textToDo)
    }

    return (
       <div className="container">
            <h1>Todo List</h1>
            <form action={addToDo} className="todo-input">
                <input 
                    type="addToDo"
                    id='addToDo'
                    name='addToDo'
                    placeholder="Add a new task..."
                />
                <button>Ajouter</button>
            </form>
            <ToDoList/>
        </div>

    );
  } 
  
  export default TodoForm;
  