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

  if (!patient)
    return <span>...</span>
  
  return (
    <div className="card my-4">
      <div className="card-body">
        <h1>{patient.user.first_name + " " + patient.user.last_name}</h1>
        <h2>Complaints:</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{patient ? patient.complaints : ""}</li>
        </ul>
        <h2>Program</h2>
      </div>
    </div>
  )  
}


export default PatientDetail