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
      state.patients = [...state.patients, action.payload.data]
    },
    fetchPatientsSucces: (state, action) => {
      state.patients = action.payload
    },
    fetchPatientSuccess: (state, action) => {
      state.patient = action.payload
    },
    fetchExerciseSuccess: (state, action) => {
      state.exercise = action.payload
    },
    postAssignemtSuccess: (state, action) => {
      state.patient.assignments = [...state.patient.assignments, action.payload.id]
    },
    deleteAssignmentSuccess: (state, action) => {
      state.patient.assignments = state.patient.assignments.filter(a => a !== action.payload)
    }
  },
});

export const { 
  fetchUsersSuccess, 
  fetchExercisesSuccess, 
  fetchExerciseSuccess,
  createPatientSucces, 
  fetchPatientsSucces, 
  fetchPatientSuccess,
  postAssignemtSuccess,
  deleteAssignmentSuccess,
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

export const deleteAssignment = (id) => dispatch => {
  Axios.delete(`/assignments/${id}`).then(_ => {
    dispatch(dispatch(deleteAssignmentSuccess(id)))
  })
}

export const postAssignment = (patient, exercise) => dispatch => {
  Axios.post('/assignments/', {
    completed: false,
    exercise: exercise.id,
    owner: patient.id
  }).then(response => {
    dispatch(postAssignemtSuccess(response.data))
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

export const fetchExerciseDetail = (id) => dispatch => {
  Axios.get(`/exercises/${id}`).then(response => {
    dispatch(fetchExerciseSuccess(response.data))
  })
}

export const fetchPatientDetail = (id) => dispatch => {
  Axios.get(`/patients/${id}`).then(response => {
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
export const selectExercise = state => state.patients.exercise
export const selectPatients = state => state.patients.patients
export const selectPatient = state => state.patients.patient

export default slice.reducer