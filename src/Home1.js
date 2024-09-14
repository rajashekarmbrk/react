import React from 'react'
import { Link } from "react-router-dom";
import './Home2.css'

export default function Home1() {
  return (
   <>
   <header className='header' id='header'>
    <img src='https://tse4.mm.bing.net/th?id=OIP.LjV_RiFawk0UrmnOrfkdqgAAAA&pid=Api&P=0&h=220' alt='logo'id='logo'></img>
    <h1 id='mainheader'>WELCOME TO GOVT CPC POLYTECHNIC</h1>
   </header>
   <nav className='nav' id='nav'>
    <ul className="iteams" >

        <li className='liteams'>
            <Link to="/About" className='title'>About</Link>
        </li>

        <li className='liteams'>
            <Link to="/Contact" className='title'>Contact</Link>
        </li> 

        <li className='liteams1'>
            <Link to="/Login" className='title'>Login</Link>
        </li>

        <li className='liteams1'>
            <Link to="/Register" className='title'>Register</Link>
        </li>  
    </ul> 

   </nav>
   <div className='box'>
    <h1>About cpc Polytechnic</h1>
    <p>Government CPC Polytechnic, popularly known as CPC Polytechni c, was established in 1954 under the erstwhile Mysore Government. The institute provides Diploma in Engineering under 6 specializations and also a Diploma in Machine Tools Technology. The admission to the course is based on merit.</p>
    <img src='https://tse1.mm.bing.net/th?id=OIP.TshVSrPeArTbgMaJwCEJJAHaB2&pid=Api&P=0&h=220' alt='cpcimage' id='cpc'></img>
    </div>
   </>
  )
}
