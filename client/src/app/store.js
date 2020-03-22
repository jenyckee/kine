import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

export default configureStore({
  reducer: {
    router: connectRouter(history),
    form: formReducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    routerMiddleware(history),
  ]
});
