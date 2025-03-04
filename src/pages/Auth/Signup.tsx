import './login.css'
import OlxLogo from '../../assets/OlxLogo'
import { FormEvent, useState } from 'react'
import { signup } from '../../Firebase'
import { Link, useNavigate } from 'react-router'
import { IoMdArrowRoundBack } from "react-icons/io";

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //login-function
  const user_auth = async (e:FormEvent) => {
    e.preventDefault();
    const res = await signup({name, email, password});
    if(res?.id) navigate('/login');
  }

  return (
    <div className="signupContainer">
      <div className="signup-wrapper">
        <Link to={'/'} className="back-arrow">
          <IoMdArrowRoundBack size={25}/>
        </Link>
        <div className="signupForm">
          <div className="logoContainer">
            <OlxLogo />
          </div>
          <form>
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="signupBtn" onClick={user_auth}>
              Sign Up
            </button>
          </form>
          <div className="loginRedirect">
            <span>Already a user? </span>
            <Link to={'/login'} className="loginBtn">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
  
}
