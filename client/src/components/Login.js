import React,{useState} from 'react'
import logo from '../images/login.jpg';
import {NavLink,useNavigate} from "react-router-dom"
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginsuer = async (e)=>{
    e.preventDefault();
    
    // const res= await fetch('/Login',{
    //   method: "POST",
    //   headers:{
    //     "contentType": 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email,password
    //   })
    // });
    

    // console.log(res)
    try{
      const data = await axios.post("/Login",
      {
        email:email,password:password
      })
      navigate("/");
    
    }catch(err){
       console.log(err);
       window.alert("inv")
    }
    // console.log(email);
    // // const data = res.json();
    // console.log("inner");
    // console.log(data);
    // if(data.status === 400 || !data){
    //   console.log("here2");
    //   window.alert("Invalid credentails");
    // }
    // else{
    //   window.alert("success credentails");
    //   navigate('/');
    // }
  }

  return (
    <div className='signin-box'>
    <div className="signin">
            <div className="container mt-5">
                <div className="signin-content">
                  <div className="signin-image">
                    <figure>
                      <img src={logo} className="signinImage" alt='logo' width='300' height='300'/>
                        </figure>
                          <NavLink to='/Signup' className='signup-image-link'>creat an account!</NavLink>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Signin!</h2>
                        <form method='POST' className="signin-form" id="signin-form">
                            <div className="form-group">
                                <label htmlFor="email">
                                    <i class="zmdi zmdi-email material-icons-name " ></i>
                                </label>
                                <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your email'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Your Password'/>
                            </div>
                            <div className="form-group form-button">
                                <input type='submit' name='signin' id='signin' className="foem-submit" value='Login' onClick={loginsuer} /> 
                            </div> 
                        </form>
                        </div>
                        
                </div>
            </div>
        </div>
        </div>
  )
}
