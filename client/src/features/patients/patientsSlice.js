import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const slice = createSlice({
  name: 'patients',
  initialState: {
    patients: [],
  },
  reducers: {
    fetchPatientsSuccess: (state, action) => {
      state.patients = action.payload
    }
  },
});

export const { fetchPatientsSuccess } = slice.actions;

export const fetchPatients = ({ userId }) => dispatch => {
  Axios.get(`/api/v1/therapist/${userId}/patients`).then(response => {
    dispatch(fetchPatientsSuccess(response.data.results))
  })
};

export const selectPatients = state => state.patients.patients;

export default slice.reducer;