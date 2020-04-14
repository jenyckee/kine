import React, { useEffect } from 'react';
import { selectUser, authCheckState } from './features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
import TherapistApp from './TherapistApp'
import PatientApp from './PatientApp'

function App() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authCheckState())
  }, [dispatch])

  const renderTherapistView = () => {
    if (!user) return <p>Autenticating ...</p>
    if (user.is_therapist) return <TherapistApp></TherapistApp>
    if (user.is_patient) return <PatientApp></PatientApp>
    else throw Error("Unknown user role")
  }

  return (
    <div className="App">
      {renderTherapistView()}
    </div>
  );
}

export default App;
