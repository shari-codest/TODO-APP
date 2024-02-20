import React from "react";
import AddTodo from "./components/add-todo";
import Header from "./components/header";
import Todolist from "./components/todo-list";


 function App() {
  return( 
  <React.Fragment>
     <Header />
     <AddTodo />
     <Todolist />
  </React.Fragment>
  )
 }

 export default App;