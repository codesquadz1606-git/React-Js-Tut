import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    const{id}=useParams()
  return (
    <div>
      <h1>Student Id:{id}</h1>
    </div>
  )
}

export default Student
