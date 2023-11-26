import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import './style.css';
import {CreateAllToDo,GetAllToDo,UpdateAllToDo,DeleteAllToDo} from './components/crud';
const App=()=> {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [taskIdToUpdate, setTaskIdToUpdate] = useState(null);

  
  useEffect(() => {
    GetAllToDo(setTask);

  }, [])
  

  return (
    <div>
      <Navbar />

      <input placeholder='task' type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} className='input' />

      <button className='button' onClick={()=>(isUpdating ? UpdateAllToDo(taskIdToUpdate,newTask,task,setTask,setNewTask,setIsUpdating,setTaskIdToUpdate) : CreateAllToDo(newTask,setTask,setNewTask))}
      >{isUpdating ? "Update" : "Add"}</button>
      <ul>
        {task.map((task) => (<div key={task._id} className='task'>{task.text}
         <div className='edit-and-delete'><button onClick={() => {
            setNewTask(task.text)
            setIsUpdating(true);
            setTaskIdToUpdate(task._id);
          }} className='edit-delete-buttons'>Edit</button>
          <button onClick={() => DeleteAllToDo(task._id,setTask)} className='edit-delete-buttons'>Delete</button>
          </div>
        </div>

        ))}

      </ul>

    </div>
  );

}

export default App;
