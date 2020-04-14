import React, { useEffect } from 'react';
import { selectUser } from '../features/auth/authSlice'
import { fetchPatients, selectPatients } from '../features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';

function Patients() {
  const patients = useSelector(selectPatients)
  const user = useSelector(selectUser)
  let match = useRouteMatch();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPatients(user))
  }, [dispatch, user])

  const renderPatientList = () => {
    if (!patients.length) return <p>fetching</p>
    return patients.map(patient => (
      <Link key={patient.user} to={`${match.url}/${patient.user}`}><li>{patient.user}</li></Link>
    ))
  }
  return (
    <ul>
      {renderPatientList()}
    </ul>
  )
}

export default Patients