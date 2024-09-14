import React from 'react'
import './Login1.css'
import Register from './Register';
import { Link } from 'react-router-dom';
import Home1 from './Home1';

function Changes(){
  return(
    <Register/>
  );
}

export default function Login() {
  return (
    <>
    <div className='adduser'>
      <h3>LOGIN</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' autoComplete='off' />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' autoComplete='off' ></input>

          <label htmlFor='Password'>Password:</label>
          <input type='password' id='password' autoComplete='off' ></input>
          <div id='d1'>
        <button type="button" id='btn'>Login</button>
            </div>
        </div>

      </form>

      <div id='d1'>
        <p>Click to register</p>
        <button type="button" id='btn1' onClick={Changes}>
        <Link to="/Register" className='title'>Register</Link>
          </button>
      </div>
      <div id='d1'>
  
        <button type="button" id='btn2' onClick={Home1}>
        <Link to="/" className='title'>CLOSE</Link>
          </button>
      </div>

    </div>

    </>
  );
}
