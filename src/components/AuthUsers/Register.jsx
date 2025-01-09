import {useState} from 'react'
import './index.css'
import {component_of_Registerform} from './config'
import FormComm from './FormComm'

export default function Register() {
  const [regFormData,setRegFormData] = useState({
    name:'',
    email:'',
    pass:'',
    addr:'',
    phone:''

})
  
  return (
    <div>
      <h2>Register Form</h2>
      <FormComm
      formControllers={component_of_Registerform}
      formData={regFormData}
      setFormData={setRegFormData}
      />
    </div>
  )
}
