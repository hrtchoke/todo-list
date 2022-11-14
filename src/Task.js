import deleteTask from "./App"
import style from './App.module.css';
import completeTask from "./App"

export const Task = (props) => {
    return (<span><br></br>
        <div className={style.wrapper} >
        <div  className={style.task} style={{animation: "background-color 1s infinite",backgroundColor: props.completed ? "green" : "white",animationIterationCount:"1"}}>
           
               
            <h1>{props.taskName}</h1>
            
            
            </div>
            </div>

            


            
            
            
            <div><button className={style.completeButton} onClick={() => props.completeTask(props.id)}>✓</button></div>
            <div><button className={style.deleteButton}onClick={() => props.deleteTask(props.id)}>X</button></div>
        
       
        
        </span>
    
    );
}