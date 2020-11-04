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
      <li className="list-group-item d-flex justify-content-between align-items-center" key={patient.id}>
        <div>
          <h6 className="my-0">{patient.first_name + " " + patient.last_name}</h6>
        </div>
        <button className="btn btn-primary" onClick={() => dispatch(createPatient(user, patient))}>Add!</button>
      </li>
    ))
  }

  const renderPatientList = () => {
    if (!patients.length) return <p>fetching</p>
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {patients.map(patient => (
          <tr key={patient.id}>
            <th>
              {patient.user.id }
            </th>
            <th>
              <Link to={`${match.url}/${patient.id}`}>
                {patient.user.first_name + " " + patient.user.last_name}
              </Link>
            </th>
          </tr>
        ))}
        </tbody>
      </table>
    )
  }
  return (
    <div>
      <div className="my-4">
        <SearchPatients></SearchPatients>
      </div>
      <div className="my-4">
        <ul className="list-group">
          {renderUserList()}
        </ul>
      </div>
      <h1>My Patients</h1>
      <div className="my-4">
        {renderPatientList()}
      </div>
    </div>
  )
}

export default Patients