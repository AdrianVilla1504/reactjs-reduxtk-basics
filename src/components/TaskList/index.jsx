
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteTask } from '../../features/task/taskSlice';


function TaskList() {
  const dispatch = useDispatch();

    const task = useSelector(state => state.tasks)

    const handleDelete = (id) => {
      dispatch(deleteTask(id))
    }
    console.log(task);
    return(
      <div>
        <header>
          <h2>Number of tasks {task.length}</h2>
          <Link to='/create-task'>
          <button>
            Create new task
          </button>
          </Link>
        </header>

        {task.map((task) => (
          <div key={task.id}>
            <h3>{ task.title }</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/edit-task/${task.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    )

}

export default TaskList;
