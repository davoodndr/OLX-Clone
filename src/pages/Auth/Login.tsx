import './login.css'
import OlxLogo from '../../assets/OlxLogo'
import { FormEvent, useContext, useState } from 'react'
import { login } from '../../Firebase'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Utils/AuthProvider'
import { IoMdArrowRoundBack } from "react-icons/io";

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const context = useContext(AuthContext);
  if(!context) throw new Error("AuthContext must be used within an AuthProvider");
    
  const { setLogState, setLoading }  = context;
  const navigate = useNavigate();

  //login-function
  const user_auth = async (e:FormEvent) => {
    e.preventDefault();
    setLoading(true)
    if(email && password){
      const user = await login({email, password})
      if(user){
        setLogState('logged')
        navigate('/');
      }
    }else{
      toast.error('Please provide email and password')
    }
    setLoading(false)
  }

  return (
    <div className="signupContainer">
      <div className="signup-wrapper">
        <div className="back-arrow" onClick={() => navigate('/')}>
          <IoMdArrowRoundBack size={25}/>
        </div>
        <div className="signupForm">
          <div className="logoContainer">
            <OlxLogo />
          </div>
          
          <form>
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
              Login
            </button>
          </form>
          <div className="loginRedirect">
            <span>New to OLX? </span>
            <Link to={'/signup'} className="loginBtn">SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  );
  
}
