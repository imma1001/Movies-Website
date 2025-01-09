import React from 'react'
import './style.css'
import { Link, useParams } from 'react-router-dom'

export default function Ignore() {
    const parm = useParams()
    const {id} = parm
  return (
    <div className="container">
      <div className="card">
      <h1>You're searching for "{id}"</h1>
        <p>Here are the results for your search query. You can use this section to display detailed information related to the ID provided.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}
