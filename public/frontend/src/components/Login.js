//-=+=- to properly run this code please enter npm start-=+=- this applies for everyfile in the src folder aka the frontend
import React from 'react'
import  { useState } from 'react';

//     import { useNavigate } from 'react-router-dom';


export default function Login(){ 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')//Lines 8 through 10 are using state to track if were logging a password/email from the server or creating one

    const handleSubmit = async (e) => {//Async function to await FETCH

        e.preventDefault();//Prevent default is needed for every form submission
        try {
            const response = await fetch(`http://localhost:8080/users/login`, {//This is a complex variable fetching from the server, then confrimng the https request, and determing the body type through headers
                method: 'POST',// Using the POST method for sending data
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({// Converting the data to JSON format
                    email,// User's email
                    password,// User's password
                  }),
                });
        const data = await response.json();//parsing the data into something that looks like a JSON object
        console.log(response.ok)//ensuring the response to is okay
        if(response.ok){   //If the response from our server is correct
            setEmail('')//This clears the email input field on execution 
            setPassword('')//This clears the password inputfield on execution
            localStorage.setItem('token', data.token)//Authenticates the token
            alert('login successful')//Shows an alert indicating a successful login
            window.location.href = '/'//redirect user the home page
        }else{
//if the response from the server is not okay
            console.log("login failed")//Logging for debug 
            alert('login failed')//Shows an alert indicating a failed login
            window.location.href = '/login'//redirect user to the login page
        }
        console.log(data);
    } catch (error) {
        console.log(error);//instead of user feedback its developer feedback in order to show the developer theirs an error message readable through the console
    }
}

return(//Our login form is extremley important for granting accsess to the user from the server to the front end, involving tokens,email and password
        <div>
            <h2 className='h2' >Login</h2>
            <form className='container' onSubmit={handleSubmit}>
                <label>email:</label>
                <input type="text" value={email} onChange={(e)=> setEmail (e.target.value)} required/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword (e.target.value)} required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );   
}






