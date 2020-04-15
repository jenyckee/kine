import React from 'react';
import Patients from './components/Patients'
import TherapistHeader from './components/TherapistHeader'
import PatientDetail from './components/PatientDetail'
import Exercises from './components/Exercises'
import TherapistHome from './components/TherapistHome'
import { Switch, Route, useRouteMatch } from 'react-router-dom';


function TherapistApp() {
  let { path } = useRouteMatch();
  return (
    <div>
      <TherapistHeader></TherapistHeader>
      <Switch>
        <Route path={`${path}/patients/:patientId`} component={PatientDetail}></Route>
        <Route path={`${path}/patients`} component={Patients}></Route>
        <Route path={`${path}/exercises`} component={Exercises}></Route>
        <Route path={path} component={TherapistHome}></Route>
      </Switch>
    </div>
  )
}

export default TherapistApp;