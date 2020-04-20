import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPatientDetail, selectPatient } from '../features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';

function PatientDetail() {
  let { patientId } = useParams();

  const patient = useSelector(selectPatient)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatientDetail(patientId))
  }, [dispatch, patientId])
  
  return (
    <div>{patient ? patient.complaints : ""}</div>
  )
}

export default PatientDetail