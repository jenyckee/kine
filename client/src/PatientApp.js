import React, { useEffect } from 'react';
import { selectUser } from './features/auth/authSlice'
import { fetchPatients, selectPatients } from './features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';
import TherapistHeader from './components/TherapistHeader'

function PatientApp() {
  const patients = useSelector(selectPatients)
  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPatients(user))
  }, [dispatch, user])

  const renderPatientList = () => {
    if (!patients.length) return <p>fetching</p>
    return patients.map(patient => <li key={patient.user}>{patient.user}</li>)
  }

  return (
    <div>
      <TherapistHeader></TherapistHeader>
      <ul>
        {renderPatientList()}
      </ul>
    </div>
  )
}


export default PatientApp;
