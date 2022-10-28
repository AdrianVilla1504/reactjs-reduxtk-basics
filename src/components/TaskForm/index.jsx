/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {addTask, updateTask} from '../../features/task/taskSlice';


function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }
  console.log('taskform');

  const stateTask = useSelector((state) => state.tasks);


  const handleSubmit = (e) =>{
      e.preventDefault();

      if (params.id) {
        dispatch(updateTask(task))
        navigate('/')
      }else{
      dispatch(addTask({...task, id: uuid(),}));
      navigate('/')
    }
  }

  useEffect(()=>{
    if(params.id){
      setTask(stateTask.find(task => task.id === params.id))
    }

  },[])

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="title" onChange={handleChange} value={task.title}/>
      <textarea name="description" placeholder="description" onChange={handleChange} value={task.description}></textarea>
      <button type="submit">Save</button>
    </form>
  )
}

export default TaskForm
