import React from 'react'
import { useParams } from 'react-router-dom'

export default function FacilityDetail(){
  const { id } = useParams()
  return (
    <div>
      <h1>Facility {id}</h1>
      <p>Facility detail, storage logs and batches.</p>
    </div>
  )
}
