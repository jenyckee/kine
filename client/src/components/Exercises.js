import React, { useEffect } from 'react';
import { selectUser } from '../features/auth/authSlice'
import { fetchExercises, selectExercises } from '../features/patients/patientsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';

function Exercises() {
  const exercises = useSelector(selectExercises)
  const user = useSelector(selectUser)
  let match = useRouteMatch();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchExercises(user))
  }, [dispatch, user])

  const renderExerciseList = () => {
    if (!exercises.length) return <p>fetching</p>
    return exercises.map(e => (
      <Link key={e.id} to={`${match.url}/${e.id}`}><li>{e.name}</li></Link>
    ))
  }
  return (
    <ul>
      {renderExerciseList()}
    </ul>
  )
}

export default Exercises