
import React from 'react'

export default function CardTodo(props) {
  const {children} = props
  return (
    <header>
      {children}
      <li  className='item-todo'>
      <div className="button-group">
        <button className="btn btn-outline-info">
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button className="btn btn-outline-info">
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </div>
    </li>
    </header>
  )
}
