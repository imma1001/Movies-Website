import {useState} from 'react'
import './list.css'
import List from'./ListTodo'
import Input from './IputTodo'

function Watchlist() {
  let [todos, setTodos] = useState([])
  const [inputValue,setInputValue] = useState("")
  function AddToList(newItem){
    const adding = [... todos,newItem]
    setTodos(adding)
  }
  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }
  const handleEdit = (index) => {
    const updatedTodos = todos[index] 
    setInputValue(updatedTodos)
    handleDelete(index)
  }
     
  return (
    <div>
    <Input AddToList={AddToList} setInputValue={setInputValue} inputValue={inputValue} />
    <List todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default Watchlist