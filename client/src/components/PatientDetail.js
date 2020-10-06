import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as patientSlice from '../features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/auth/authSlice';

function PatientDetail() {
  let { patientId } = useParams();

  const patient = useSelector(patientSlice.selectPatient)
  const exercises = useSelector(patientSlice.selectExercises)
  const user = useSelector(selectUser)
  const dispatch = useDispatch(patientSlice.selectExercises)

  useEffect(() => {
    dispatch(patientSlice.fetchPatientDetail(patientId))
    dispatch(patientSlice.fetchExercises(user))
  }, [dispatch, patientId, user])

  const handleAddAssignemt = (patient, exercise) => {
    dispatch(patientSlice.postAssignment(patient, exercise))
  }

  if (!patient)
    return <span>...</span>

  const renderExercises = () => {
    if (!exercises)
    return <span>...</span>
    return (
      <div className="row">{exercises.map(e => 
        <div key={e.id} className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">{e.name}</h4>
              <video src={e.video_url} width="100%"></video>
              <button className="btn btn-primary" onClick={() => handleAddAssignemt(patient, e)}>Add</button>
            </div>
          </div>
        </div>)}
      </div>
    )
  }
  
  return (
    <div className="">
      <h1>{patient.user.first_name + " " + patient.user.last_name}</h1>
      <h2>Complaints:</h2>
      <div className="input-group mb-3">
        <textarea className="form-control" ></textarea>
      </div>
      {patient ? <p className="">{patient.complaints}</p> : ""}
      <h2>Program</h2>
      <div className="row">
        <div className="col-md-6">
          <table className="table">
            <tbody>
            {patient.assignments.map(a => 
              <tr key={a}>
                <th>{a}</th>
                <td><button className="btn btn-dark" onClick={() => dispatch(patientSlice.deleteAssignment(a))}>Delete</button></td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-4">
      {renderExercises()}
      </div>
    </div>
  )  
}


export default PatientDetail