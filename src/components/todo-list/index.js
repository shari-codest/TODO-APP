import {useState,useEffect} from 'react'
import {useLocalStorage} from "usehooks-ts";

function TodoList() {
    // let todos [] ;
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    // function getTodos(){
    //     // Get all todos from local storage and store it.
    //     let todos =JSON.parse(localStorage.getItem
    //         ("TODO_KEY")) || [];
    //         // update React State
    //         setTodos(todos);

    // }
    // useEffect(getTodos, []);
    
    // return (
    //     <ul>
    //         <li>Complete online javascript course</li>
    //         <li>jog around the park 4 times</li>
    //         <li>prepare break fast</li>
    //         <li>go for a studio section</li>
    //         <li>meet up with a client</li>
    //     </ul>
    // );

    return (
        <ul>
        {todos.map(function(todo, index){
            return<li key={index}>{todo}</li>
    })}
            </ul>
            );
}

export default TodoList;