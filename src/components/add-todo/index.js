import {useState} from "react";
import styles from "./index.module.css"
import { useLocalStorage } from "usehooks-ts";

function AddTodo() {
    const [todos, setTodos] = useLocalStorage
    ("TODO_KEY",[]);
    
    // let todo;
    const [todo, setTodo] = useState("");

    function collectInput(event) {
        setTodo(event.target.value);

    }

    // const collectInput = ( event)=> setTodo{}
    function saveTodo () {
        // Get existing list of todos from local storage
        // let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
        // Add new todo to existing list of todos
        // todos.push(todo);
        // Set all todos in local storage
        setTodos([...todos,todo]);
        setTodo("");
        // localStorage.setItem("TODO_KEY",JSON.stringify(todos));
    }
    return (
    <section className={styles.addTodo}>
        <input
        value={todo}
        onChange={collectInput}
        className={styles.addTodoInput}
        placeholder="Start typing..." />
        <button className={`btn ${styles.btn}`} onClick={saveTodo}>Create New</button>
    </section>
    );
}

export default AddTodo;