import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const slice = createSlice({
  name: 'patients',
  initialState: {
    exercises: [],
    patients: [],
    users: [],
    patient: null
  },
  reducers: {
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload
    },
    fetchExercisesSuccess: (state, action) => {
      state.exercises = action.payload
    },
    createPatientSucces: (state, action) => {
      state.patients = [...state.patients, action.payload]
    },
    fetchPatientsSucces: (state, action) => {
      state.patients = action.payload
    },
    fetchPatientSuccess: (state, action) => {
      state.patient = action.payload
    }
  },
});

export const { 
  fetchUsersSuccess, 
  fetchExercisesSuccess, 
  createPatientSucces, 
  fetchPatientsSucces, 
  fetchPatientSuccess
} = slice.actions;

export const createPatient = (user, patient) => dispatch => {
  Axios.post('/patients/', {
    therapist: user.userId,
    user_id: patient.id,
    complaints: ""
  }).then(response => {
    dispatch(createPatientSucces(response))
  })
}


export const fetchUsers = ({ query }) => dispatch => {
  Axios.get(`/users/?full_name=${query}`).then(response => {
    dispatch(fetchUsersSuccess(response.data.results))
  })
};

export const fetchExercises = ({ userId }) => dispatch => {
  Axios.get(`/exercises/?user_id=${userId}`).then(response => {
    dispatch(fetchExercisesSuccess(response.data.results))
  })
}

export const fetchPatientDetail = (id) => dispatch => {
  Axios.get(`/patients/${id}`).then(response => {
    console.log(response)
    dispatch(fetchPatientSuccess(response.data))
  })
}

export const fetchPatients = ({ userId }) => dispatch => {
  Axios.get(`/patients/?therapist_id=${userId}`).then(response => {
    dispatch(fetchPatientsSucces(response.data.results))
  })
}

export const selectUsers = state => state.patients.users;
export const selectExercises = state => state.patients.exercises
export const selectPatients = state => state.patients.patients
export const selectPatient = state => state.patients.patient

export default slice.reducer