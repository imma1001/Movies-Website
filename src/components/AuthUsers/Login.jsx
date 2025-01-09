import {useState} from 'react'
import './index.css'
import FormComm from './FormComm'
import {component_of_Loginform} from './config'


export default function Login() {
    const [loginFormData,setLoginFormData] = useState({
        email:'',
        pass:''
    })
    
  return (
    <div>
        <h2>Login Form</h2>
      <FormComm 
       formControllers={component_of_Loginform}
       setFormData={setLoginFormData} 
       formData={loginFormData}/>
    </div>
  )
}
