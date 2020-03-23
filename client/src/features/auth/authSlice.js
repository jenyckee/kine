import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { push } from 'connected-react-router'

export const slice = createSlice({
  name: 'auth',
  initialState: {
    refreshToken: null,
    accessToken: null
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload.access
      state.refreshToken = action.payload.refresh
    }
  },
});

export const { setToken } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const submitLogin = values => dispatch => {
  axios.post('/auth/jwt/create/', values)
    .then(response => {
      dispatch(push('/app'))
      dispatch(setToken(response.data))
    }).catch(error => console.log(error))
};

export const submitRegister = values => dispatch => {
  axios.post('/auth/users/', values)
    .then(response => {
      dispatch(push('/'))
    }).catch(error => console.log(error))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAccessToken = state => state.accessToken;
export const selectRefreshToken = state => state.refreshToken;

export default slice.reducer;
