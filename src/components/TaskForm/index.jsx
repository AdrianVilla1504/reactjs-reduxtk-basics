import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {addTask} from '../../features/task/taskSlice';
import {v4 as uuid} from 'uuid';


function TaskForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }
  console.log('taskform');

  const stateTask = useSelector((state) => state.tasks);
  console.log(stateTask);

  const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(addTask({...task, id: uuid(),}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="title" onChange={handleChange}/>
      <textarea name="description" placeholder="description" onChange={handleChange}></textarea>
      <button type="submit">Save</button>
    </form>
  )
}

export default TaskForm
