import React from 'react'
import InputComm from './InputComm'

export default function FormComm(props) {
    const {formControllers = [],formData, setFormData } = props
    /*if (!Array.isArray(formControllers)) {
        console.error("It is not");
        return null;
    }*/

    function HandleChange(event){
            const {value,name} = event.target
            setFormData(prevdata=>({
                ...prevdata,
               [name]: value
            }))
        }
    function HandleSubmit(event){
        event.preventDefault()
        console.log("form submit : ", formData)
    }
        
    console.log("formControllers:", formControllers);
    
  return (
    <form className='input-add' onSubmit={HandleSubmit}>
    {formControllers.map(item => (
        <InputComm
            key={item.id}
            label={item.label}
            name={item.name}
            id={item.id}
            placeholder={item.placeholder}
            value={formData[item.name]}
            type={item.type}
            onChange={HandleChange}
        />
    ))}
    <button class="btn btn-outline-info">Submit</button>
</form>
  )
}
