import React from 'react'
import  { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
export default function RegisterForm() {
        const [lastName, setLastname] = useState('');
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const [firstName, setFirstName] = useState('');
      const navigate = useNavigate()
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const response = await fetch(`http://localhost:8080/users/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        password,
                    }),
                });
    if(response.ok){
        const data = await response.json();
        console.log("registration successful");
        console.log(data)
        
        navigate('/login')
    }
              
             
    
                
               
            } catch (error) {
                console.error('Error during registration:', error);
            }
        };
    
        return (
            <div className="FormWrapper">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input type="text" placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input id="registerBtn" type="submit" value="Register" />
                </form>
            </div>
        );
    }
    
  

