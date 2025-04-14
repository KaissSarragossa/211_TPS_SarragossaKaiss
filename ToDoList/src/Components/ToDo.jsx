import '../assets/ToDo.css'

function ToDo() {
    return (
       <>
       <li className="todo-item">
            <p className="todo-text"> Promener le chien</p>
            <div className="todo-buttons">
                <button className="done-button">✔</button>
                <button className="delete-button" >✖</button>
            </div>
        </li>
        <li className="todo-item">
            <p className="todo-text">Faire le ménage</p>
            <div className="todo-buttons">
                <button className="done-button">✔</button>
                <button className="delete-button">✖</button>
            </div>
        </li>
        <li className="todo-item">
            <p className="todo-text">Faire le TP2</p>
            <div className="todo-buttons">
                <button className="done-button">✔</button>
                <button className="delete-button">✖</button>
            </div>
        </li>
        <li className="todo-item">
            <p className="todo-text done">Maitriser styles dynamiques</p>
            <div className="todo-buttons">
                <button className="done-button undone">↩</button>
                <button className="delete-button">✖</button>
            </div>
        </li>
       </>
    );
  }
  
  export default ToDo;