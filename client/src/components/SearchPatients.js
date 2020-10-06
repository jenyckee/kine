import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../features/patients/patientsSlice';


function SearchPatients() {
  const dispatch = useDispatch()
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    if (searchString.length > 3)
      dispatch(fetchUsers({query: searchString}))
  }, [dispatch, searchString])

  return (
    <div className="input-group flex-nowrap">
      <input
        className="form-control"
        placeholder="Search patients"
        onChange={e => setSearchString(e.target.value)} value={searchString} type="text"></input>
    </div>
  )
}

export default SearchPatients