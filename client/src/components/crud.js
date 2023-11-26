import  axios from "axios";
const baseUrl = 'http://localhost:8000/api/todos';
const CreateAllToDo = async (newTask,setTask,setNewTask) => {
    if (newTask.trim() === '') return;
    try {
      const response = await axios.post(baseUrl, { text: newTask });
      setTask((task) => [...task, response.data]);
      setNewTask('')
    } catch (error) { console.log(error) }
  }
  const GetAllToDo = async (setTask) => {
    const response = await axios.get(baseUrl);
    setTask(response.data)
  };

  const DeleteAllToDo = async (taskId,setTask) => {
    try {
      await axios.delete(`${baseUrl}/${taskId}`,{taskId}).then(()=>{ 
        GetAllToDo(setTask);
    })
     
    } catch (err) { console.log(err) };

  }
  const UpdateAllToDo = async (taskIdToUpdate,newTask,task,setTask,setNewTask,setIsUpdating,setTaskIdToUpdate) => {
    if (taskIdToUpdate) {
      try {
        await axios.put(`${baseUrl}/${taskIdToUpdate}`, { text: newTask }).then(() => {
          const updatedTask = task.map((task) =>
            task._id === taskIdToUpdate ? { ...task, text: newTask } : task
          );
          setTask(updatedTask);
          setNewTask('');
          setIsUpdating(false);
          setTaskIdToUpdate(null);
          GetAllToDo(setTask);

        })
      } catch (err) { console.log(err); }
    }
  }

  export {CreateAllToDo,GetAllToDo,DeleteAllToDo,UpdateAllToDo};
