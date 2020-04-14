import React from 'react';
import { useParams } from 'react-router-dom';

function PatientDetail() {
  let { patientId } = useParams();

  return (
    <div>{patientId}</div>
  )
}

export default PatientDetail