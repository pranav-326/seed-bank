import React from 'react'
import { useParams } from 'react-router-dom'

export default function VarietyDetail(){
  const { id } = useParams()
  return (
    <div>
      <h1>Variety {id}</h1>
      <p>Variety details and inventory view.</p>
    </div>
  )
}
