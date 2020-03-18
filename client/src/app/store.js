import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { reducer as formReducer } from 'redux-form'

export default configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
  },
});
