import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default async function registrationForm (){
   
    const [lastName, setLastname] = useState('')
    const [ password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
//    const navigate = useNavigate()
   const response = await fetch(`localhost:8080/users/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email,
        password
    })
})

const data = response.json({})
return(
    <div classname="FormWrapper">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="First Name" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                required/>
                <input type="text" placeholder="Last Name" 
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}  
                required/>
                <input type="email" placeholder="Email"
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" 
                   onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required/>
                <input id="registerBtn"type="submit" value="Register"/>
            </form>
        </div>
        )
}