// // const tasks = [{
// //     id: 1,
// //     text: 'Meditate',
// //     day: '9am',
// //     reminder: true,
// // },
// // {
// //     id: 2,
// //     text: 'Gym',
// //     day: '3pm',
// //     reminder: true,
// // },
// // {
// //     id: 3,
// //     text: 'Study React',
// //     day: '6pm',
// //     reminder: true,
// // },  


// ]
// make global import { useState } from "react"
import Task from "./Task"


const Tasks = ({tasks, onDelete, onToggle}) => {
     
  return (
    <div>
    {tasks.map((task)=>(<Task key={task.id} task = {task} onDelete = {onDelete} onToggle={onToggle}/>
    
    
    
    ))}

    </div>
    //map takes in a function ()=>()
    //{tasks.map(()=>(<h3 key={tasks.id}>{tasks.text}</h3>))} --> change to <Task> component 
  )
}

export default Tasks