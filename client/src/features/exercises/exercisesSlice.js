import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const slice = createSlice({
  name: 'exercises',
  initialState: {
    patients: [],
  },
  reducers: {
    fetchExercisesSuccess: (state, action) => {
      state.patients = action.payload
    }
  },
});

export const { fetchExercisesSuccess } = slice.actions;

export const fetchExercises = ({ userId }) => dispatch => {
  Axios.get(`/exercises?user_id=${userId}`).then(response => {
    dispatch(fetchExercisesSuccess(response.data.results))
  })
};

export const selectPatients = state => state.patients.patients;

export default slice.reducer;