import React, { useEffect } from 'react';
import { selectUser, authCheckState } from './features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
import Patients from './components/Patients'
import TherapistHeader from './components/TherapistHeader'
import PatientDetail from './components/PatientDetail'
import ExerciseDetail from './components/ExcerciseDetail'
import Exercises from './components/Exercises'
import { Switch, Route } from 'react-router-dom';

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
        <TherapistHeader></TherapistHeader>
        <div className="container">
          <Switch>
            <Route path={`/patients/:patientId`} component={PatientDetail}></Route>
            <Route path={`/patients`} component={Patients}></Route>
            <Route path={`/exercises/:id`} component={ExerciseDetail}></Route>
            <Route path={`/exercises`} component={Exercises}></Route>
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
