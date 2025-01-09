import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='text-center'>
    <h3>This page is Not found back to Main Page </h3>
    <Link className="btn btn-outline-info" to ="/">The Home Page</Link>
    </div> 
  )
}
