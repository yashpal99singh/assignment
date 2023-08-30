// src/components/LoginPage.js
import axios from 'axios';
import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Link,useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttempts] = useState(0);

  const handleEmail=(e)=>{

    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
     setPassword(e.target.value)
  }
 

  const handleApi = () => {
    console.log({email,password})
    axios.post('https://reqres.in/api/login',{
      email:email,
      password:password
    })
    .then(result=>{
      console.log(result.data)
      alert('success')
      localStorage.setItem("token",result.data.token)
      navigate("/Appcalendar")
    })
    .catch(error =>{
      console.log(error)
      alert('error')
    })
    
    
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h1>NCSSR</h1> 
        <h1> 
        Welcome Back!</h1>
      <Link class="forgotPassword" > Forgot Password?</Link>
      <p>Build date: 25-08-2023 12:08</p>
    
        Email:<input 
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmail}/><br/>
  
      
        Password:<input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword} /><br/>
        
      <div className='btn'>
        <button type="submit" onClick={handleApi}>
          <span>Login</span>
          </button>
          </div>
        {loginAttempts >= 3 && (
          <p className="error-message">Maximum login attempts exceeded.</p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
