import React from 'react'
import { useLocation } from 'react-router-dom'

const ErrorPage = () => {
    const {pathname}=useLocation()
  return (
    <div>
      <h1>Page Not Found at {pathname}</h1>
    </div>
  )
}

export default ErrorPage
