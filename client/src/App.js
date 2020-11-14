import React, { useEffect } from 'react';
import { selectUser, authCheckState } from './features/auth/authSlice'
import { fetchTherapists, selectTherapists, setdefaultTherapist, selectDefaultTherapist, fetchPatientAssignments } from './features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';
import Patients from './components/Patients'
import Header from './components/Header'
import PatientDetail from './components/PatientDetail'
import ExerciseDetail from './components/ExcerciseDetail'
import Exercises from './components/Exercises'
import { Switch, Route, Link } from 'react-router-dom';
import Program from './components/Program'

function Home() {
  const user = useSelector(selectUser)
  const therapists = useSelector(selectTherapists)
  const defaultTherapist = useSelector(selectDefaultTherapist)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTherapists(user))
    if (defaultTherapist) {
      dispatch(fetchPatientAssignments(defaultTherapist))
    }
  }, [dispatch, user, defaultTherapist])

  if (user.is_patient) return (
    <div>
      {!defaultTherapist ? 
      <>
      <h1>Please select your therapist</h1>
      <ul>
        {therapists.map(relation => {
          return <li 
            key={relation.id} 
            onClick={() => dispatch(setdefaultTherapist(relation.id))}>
              {relation.therapist.email}</li>
        })}
      </ul>
      </>
      : <div>
          <Link to="program">Start program</Link>
        </div>}
    </div>
  )
  else return (
    <div></div>
  )
}

function App() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authCheckState())
  }, [dispatch])

  const renderTherapistView = () => {
    if (!user) return <p>Autenticating ...</p>
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path={`/program`} component={Program}></Route>
            <Route path={`/patients/:patientId`} component={PatientDetail}></Route>
            <Route path={`/patients`} component={Patients}></Route>
            <Route path={`/exercises/:id`} component={ExerciseDetail}></Route>
            <Route path={`/exercises`} component={Exercises}></Route>
            <Route path={`/`} component={Home}></Route>
          </Switch>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {renderTherapistView()}
    </div>
  );
}

export default App;
