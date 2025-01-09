import {useState} from 'react'
import CardTodo from './CardTodo'

export default function ListTodo(props) {
   const {todos ,handleDelete,handleEdit} =props

  return ( 
    <ul className='fun-main'>
  {todos.map((todo, index) => (
    <li key={index} className='item-todo'>
      <span className="todo-text">{todo}</span>
      <div className="button-group">
        <button onClick={() => handleEdit(index)} className="btn btn-outline-info">
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDelete(index)} className="btn btn-outline-info">
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </div>
    </li>
  ))}
</ul>
  )
}
