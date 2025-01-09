import {useState} from 'react'

export default function Input (props) {
  const {AddToList,inputValue,setInputValue} = props
  
  
  function HandelChange(e){
       setInputValue(e.target.value)
        }

  return (
    <div>
      <input value={inputValue} onChange={HandelChange} placeholder="Enter movie title"/> 
      <button class="btn btn-outline-info"  onClick={()=>{
        AddToList(inputValue)
        //to remove what in input 
        setInputValue("")}}>Add</button>
    </div>
  )
}
