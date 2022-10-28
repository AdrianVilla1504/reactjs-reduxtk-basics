import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import TaskForm from './components/TaskForm/index';
import TaskList from './components/TaskList/index';

function App() {

  return (
    <div className="App">
      <h1>Your tasks management App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm/>} />
          <Route path="/edit-task/:id" element={<TaskForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
