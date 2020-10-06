import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchExerciseDetail, selectExercise } from '../features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';

function ExerciseDetail() {
  let { id } = useParams();

  const exercise = useSelector(selectExercise)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchExerciseDetail(id))
  }, [dispatch, id])

  if (!exercise)
    return <span>...</span>
  
  return (
    <div className="my-4">
      <h4>{exercise.name}</h4>
      <div className="row">
        <div className="col-md">
          <video width="100%" controls src={`${exercise.video_url}`}></video>
        </div>
      </div>
    </div>
  )  
}


export default ExerciseDetail