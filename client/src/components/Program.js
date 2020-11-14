import React, { useEffect } from 'react';
import { selectUser, authCheckState } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
import * as P from '../features/patients/patientsSlice';
import { push } from 'connected-react-router';

export default function Program() {
  const assignments = useSelector(P.selectAssignments)
  const defaultTherapist = useSelector(P.selectDefaultTherapist)
  const dispatch = useDispatch()

  if (!defaultTherapist) dispatch(push('/'))  

  return (
    <div>
      <video width="100%" autoPlay src={assignments[0].exercise.video_url}></video>
    </div>
  )
}