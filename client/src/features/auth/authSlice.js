import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { push } from 'connected-react-router'

export const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logout: (state, _) => {
      state.user = null
    }
  },
});

export const { setUser, tryAutoSignIn, logout } = slice.actions;

export const authCheckState = () => dispatch => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user === undefined || user === null) {
    dispatch(submitLogout());
  } else {
    const expirationDate = new Date(user.expirationDate);
    if (expirationDate <= new Date()) {
      dispatch(submitLogout());
    } else {
      dispatch(setUser(user));
      dispatch(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
};

export const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => {
    dispatch(submitLogout());
  }, expirationTime * 1000);
};


export const submitLogin = ({ username, password }) => dispatch => {
  axios.post('/rest-auth/login/', {
    username,
    password
  })
    .then(res => {
      dispatch(push('/app'))
      const user = {
        token: res.data.key,
        username,
        userId: res.data.user,
        is_patient: res.data.user_type.is_patient,
        is_therapist: res.data.user_type.is_therapist,
        expirationDate: new Date(new Date().getTime() + 3600 * 1000)
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setUser(res.data))
    }).catch(error => console.log(error))
};

export const submitLogout = () => dispatch => {
  axios.post('/rest-auth/logout/')
    .then(response => {
      localStorage.removeItem("user");
      dispatch(logout())
      dispatch(push('/'))
    })
}

export const submitRegister = ({username, email, password}) => dispatch => {
  const user = {
    username,
    email,
    password1: password,
    password2: password,
    is_patient: false,
    is_therapist: true,
  }
  axios.post('/rest-auth/registration/', user)
    .then(response => {
      dispatch(push('/'))
    }).catch(error => console.log(error))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = state => state.auth.user;

export default slice.reducer;
