import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import authReducer from '../features/auth/authSlice'

export const history = createBrowserHistory()

export default configureStore({
  reducer: {
    router: connectRouter(history),
    form: formReducer,
    auth: authReducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    routerMiddleware(history),
  ]
});
