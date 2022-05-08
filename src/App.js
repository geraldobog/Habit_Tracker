import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import About from './components/About';
import TaskDetails from './components/TaskDetails';

function App() {
  const[showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(()=>{

    const getTasks = async()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)


    }
    

    getTasks()



  }, [])
//Fetch Tasks
  const fetchTasks = async () =>{
    const res = await fetch(`http://localhost:3000/tasks`)
    const data = await res.json()
    console.log(data)
    
    return data
  }
   //Add Task
   const addTask = async (task)=>{
     //console.log(task)
   const res = await fetch(`http://localhost:3000/tasks/`,{method:'POST', 
    
    headers:{'Content-type': 'application/json'

    },
    body: JSON.stringify(task)
    }) 

   

    const data = await res.json()
    setTasks([...tasks, data])
    //setTasks([...AddTask, data])


     //const id = Math.floor(Math.random()*1000)+1
     //const newTask = {id, ...task}
     //setTasks([...tasks, newTask])
    }

     //Fetch Tasks 
     const fetchTask = async (id) =>{
      const res = await fetch(`http://localhost:3000/tasks/${id}`)
      const data = await res.json()
      console.log(data)
      
      return data
    }
   //Delete
   const deleteTask = async (id)=>{
     await fetch(`http://localhost:3000/tasks/${id}`,{method:'DELETE',})
    //console.log('delete', id) check delete function
    setTasks(tasks.filter((task)=>task.id !==id))
   }
   const toggleReminder = async (id)=>{
     const taskToToggle = await fetchTask(id)
     const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder} 

     const res = await fetch(`http://localhost:3000/tasks/${id}`,{method:'PUT', 
    
    headers:{'Content-type': 'application/json',

    },
    body: JSON.stringify(updatedTask)
    })

    const data = await res.json()
      //console.log(id, 'hello')
      setTasks(tasks.map((task)=> task.id=== id?{...task,reminder: data.reminder}:task))

   }
     


  
    


  return (
    
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <Routes>
     <Route path ='/about' element={<About/>}/>
     <Route path ='/task/:id' element={<TaskDetails/>}/>
     <Route path='/' element ={<>
     {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks 
      tasks = {tasks} 
      onDelete = {deleteTask} 
      onToggle = {toggleReminder}
      />): ('No Habits to Track ')}
     
     
     
     </>}
     />
     </Routes>
    <Footer/>

    </div>
    </Router>
  );

  

}
//class App extends React.Component{
  //render (){
   // return <h1>Hello I am from a class </h1>
  //}
//}
//Delete task

export default App
