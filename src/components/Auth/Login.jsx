import React, { useEffect, useState } from 'react'
import "./Auth.css"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import { GoEye } from 'react-icons/go'
import { LuEyeClosed } from 'react-icons/lu'
import { login } from '../Global/Slice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailmsg, setEmailMsg] = useState("")
  const [errcheck, setErrcheck] = useState(false)
  const [perrcheck, setPErrcheck] = useState(false)
  const [passwordmsg, setPasswordMsg] = useState("")
  const [passwordCheck, setPasswordCheck] = useState(false)

  const navigate = useNavigate()

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
  const handleEmail =(e)=>{
    const newEmail = e.target.value
    setEmail(newEmail)
    if (newEmail.trim() === "") {
      setErrcheck(false)
      toast.error("Email is required")
      
    } else if(!validateEmail(newEmail)) {
      setEmailMsg("Invalid email format")
      setErrcheck(true)
    } else{
      setErrcheck(false)
      setEmailMsg(null)
    }

  }
  const handlePassword =(e)=>{
    const newPassword = e.target.value
        setPassword(newPassword)
        if (newPassword.trim()==="") {
            toast.error("Password is required")
            setPErrcheck(true)
        }
        if (newPassword.length > 0) {
          setPErrcheck(true)
        }
        if (newPassword.length < 8) {
            setPasswordMsg("Password must be 8 or more characters")
        }
        if (newPassword.length >=8) {
            setPErrcheck(false)
        }
  }

  const isLoggedIn = useSelector((state)=> state.isLoggedIn)
  // console.log(isLoggedIn)

  const dispatch = useDispatch()

  const handleSubmit =(e)=>{
    e.preventDefault

    if (!email || !password) {
      toast.error("Please fill all fields")
    } else {
      dispatch(login({email, password}))
      navigate("/weather")
    }
  }

  // useEffect(()=>{
  //   if (isLoggedIn === true) {
      
  //   } 
  // }, [isLoggedIn])
  return (
    <div className='AuthWrapper'>
      <div className="main-auth">
        <div className="auth-header">
          <div className="logo-auth">
            <img src={logo} alt="" />
          </div>
          <p>WeatherWise</p>
        </div>
        <div className="write-up-auth">
          <p style={{fontSize:"24px"}}>Welcome back!</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="mainform-login">
            <div className="input-holder-login">
            <p>Email<span style={{color:"red"}}>*</span></p>
              <input type="email" onChange={handleEmail} />
            </div>
            <>
              {
                errcheck ?
                <p style={{color:"#c10505"}}>{emailmsg}</p> : null
              }
            </>
            <div className="input-holder-login">
              <p>Password<span style={{color:"red"}}>*</span></p>
            <>
                {
                  passwordCheck ?
                  
                  <div className="passInput">
                    <input type="text" onChange={handlePassword} />
                    <LuEyeClosed onClick={()=>setPasswordCheck(!passwordCheck)} cursor="pointer" />
                </div>
              :
                <div className="passInput">
                <input type="password" onChange={handlePassword} />
                <GoEye cursor="pointer" onClick={()=> setPasswordCheck(!passwordCheck)} />
              </div> 
                }
              </>
            </div>
            <>
              {
                perrcheck ?
                <p style={{color:"#c10505"}}>{passwordmsg}</p> : null
              }
            </>
            {/* <div className='agree'><input type="checkbox"/> <p> I agree to the <span>Terms and condition</span></p> </div> */}
          </div>
          <button type='submit' className='login-button'>Login</button>
        </form>
        <div className="auth-footer">
          <p className='forgot'>Forgot password</p>
          <p>Don't have an account? <span onClick={()=> navigate("/sign-up")}>Sign up</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Login