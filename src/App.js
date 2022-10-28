import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import TaskForm from './components/TaskForm/index';
import TaskList from './components/TaskList/index';

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App;
