import {useState} from 'react'

export default function Button(props) {
        const { isShown,setIsshown}=props

    function toggleShow(){
        setIsshown(prevshow => !prevshow)
      }
        
  return (
    
    <button className="btn btn-outline-info"onClick={toggleShow}>{isShown?"Hide":"Show"} Description</button>
  )
}
