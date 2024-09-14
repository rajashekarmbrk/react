import React from 'react'
import Login from './Login'
import './reg.css'
import { Link } from 'react-router-dom';

function Change(){
  return(
    <Login/>
  );
}


export default function Register() {
  return (
    <>
    <div className='adduser'>
      <h3>SIGN UP</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' autoComplete='off' />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' autoComplete='off' ></input>

          <label htmlFor='Password'>Password:</label>
          <input type='password' id='password' autoComplete='off' ></input>

          <label htmlFor='passwordc'>Conform Password:</label>
          <input type='Password' id='passwordc' ></input>

          <button type="submit" id='but'>Register</button>

        </div>

      </form>

      <div id='d1'>
        <p>Already have a account ?</p>
        <button type="button" id='btn' onClick={Change}>
          <Link to="/Login" className='title'>Login</Link>
          </button>
      </div>

    </div>

    </>
  )
}

