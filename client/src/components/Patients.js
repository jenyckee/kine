import React, { useEffect } from 'react';
import { selectUser } from '../features/auth/authSlice'
import { fetchPatients, selectUsers, createPatient, fetchUsers, selectPatients } from '../features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import SearchPatients from '../components/SearchPatients'

function Patients() {
  const patients = useSelector(selectPatients)
  const users = useSelector(selectUsers)
  const user = useSelector(selectUser)
  let match = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers(user))
    dispatch(fetchPatients(user))
  }, [dispatch, user])

  const renderUserList = () => {
    if (!users.length) return null
    return users.map(patient => (
      <li key={patient.id}>{patient.first_name + " " + patient.last_name}<button onClick={() => dispatch(createPatient(user, patient))}>Add!</button></li>
    ))
  }

  const renderPatientList = () => {
    if (!patients.length) return <p>fetching</p>
    return patients.map(patient => (
      <Link key={patient.id} to={`${match.url}/${patient.id}`}><li>{patient.user.first_name + " " + patient.user.last_name}</li></Link>
    ))
  }
  
  return (
    <ul>
      <SearchPatients></SearchPatients>
      {renderUserList()}
      {renderPatientList()}
    </ul>
  )
}

export default Patients