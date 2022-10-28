import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter} from 'react-router-dom';
import taskReducer from '../features/task/taskSlice'

export const store =  configureStore({
  reducer:{
    tasks: taskReducer,
  },
});
