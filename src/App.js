import logo from './logo.svg';
import style from './App.module.css';
import { useState } from "react";
import { User } from './User'
import { Task } from "./Task"
import {completeTask} from "./Task"


function App() {
 
const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState(""); 
function myFunction() {
  window.location.reload();
}


const handleChange = (event) => {
setNewTask(event.target.value);

};
const addTask = () => {
  const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    taskName: newTask,
    completed: false,
  };
  setTodoList([...todoList, task]);
};
const deleteTask = (id) => {
  setTodoList(todoList.filter((task) => task.id !== id));
  
  };
 const completeTask = (id) => {
  setTodoList(
    todoList.map((task) => {
      if (task.id === id){
        return { ...task, completed: true };
      } else {
        return task;
      }
    })
  );
  
 };
function disableButton(){
  this.disabled = true;
}
return (
  <div className={style.App}>
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a className="navbar-brand mx-auto" href="#">To-Do List</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/hrtchoke/todo-list">Github</a>
          </li>
        
        </ul>
        <form class="d-flex mt-3" role="search">

        </form>
      </div>
    </div>
  </div>
</nav>
<br></br>
<br></br>
<br></br>
   <div className={style.addTask}>
    <input size="15" className = {style.textBox}onChange={handleChange}/>
    <br></br>
    <br></br>
    <button className={style.addTaskButton} onClick={addTask}>Add Task<br></br></button>
    <h1></h1>
    <h1></h1>
    
   </div>
   
   <div className={style.list}> 
    {todoList.map((task) => {
      return (
      <Task 
      taskName={task.taskName} 
      id = {task.id} 
      completed = {task.completed}
      deleteTask = {deleteTask}
      completeTask  ={completeTask}
        />
      );
    })}
   </div>
   
    </div>
  );
}



export default App;
