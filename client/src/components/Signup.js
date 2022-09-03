import React,{useState} from 'react';
import logo from "../images/signup.jpg"
import {NavLink,useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        Cpassword:""
    });
    let name,value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }
    
    const postData = async(e) =>{
        e.preventDefault();

        const {name,email,phone,work,password,Cpassword} = user;

        const res = await fetch("/signup",{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,Cpassword
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("invalid !");
            console.log("invalid !");

        }
        else{
            window.alert("valid !");
            console.log("valid !");
            navigate("/Login");
        }
    }


    return (
        <div className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">SignUp!</h2>
                        <form method="POST" className="signup-form" id="signup-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type='text' name='name' id='name' value={user.name}
                                onChange={handleInputs} placeholder='Your name'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type='email' name='email' id='email' value={user.email}
                                onChange={handleInputs} placeholder='Your email'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                    <i className="zmdi zmdi-phone material-icons-name"></i>
                                </label>
                                <input type='number' name='phone' id='phone' value={user.phone}
                                onChange={handleInputs} placeholder='Your mobile number'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">
                                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                <input type='text' name='work' id='work' value={user.work}
                                onChange={handleInputs} placeholder='Your Profession'/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type='password' name='password' id='password' value={user.password}
                                onChange={handleInputs} placeholder='Your Password'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Cpassword">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type='password' name='Cpassword' id='Cpassword' value={user.Cpassword}
                                onChange={handleInputs} placeholder='Confirm password'/>
                            </div>
                            <div className="form-group form-button">
                                <input type='submit' name='signup' id='signup' className="foem-submit" value='signup' onClick={postData} /> 
                            </div> 
                        </form> 
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={logo} className="signupImage" alt='logo' width='430' height='430'/>
                            </figure>
                            <NavLink to='/Login' className='signup-image-link'>already signup!</NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
