import React from 'react'
import { useParams } from 'react-router-dom'

export default function BatchDetail(){
  const { id } = useParams()
  return (
    <div>
      <h1>Batch {id}</h1>
      <p>Batch metadata, distributions and viability checks.</p>
    </div>
  )
}
