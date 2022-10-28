
import React from 'react';
import {useSelector} from 'react-redux';

function TaskList() {

    const task = useSelector(state => state.tasks)

    const handleDelete = (id) => {
      console.log(id)
    }
    console.log(task);
    return(
      <div>
        {task.map((task) => (
          <div key={task.id}>
            <h3>{ task.title }</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    )

}

export default TaskList;
