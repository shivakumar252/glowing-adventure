
import { useEffect, useState } from 'react';
import Input from '../components/Input';
import {useNavigate,useLocation} from "react-router-dom";

const inlineStyle = {
    color: 'blue',
  }
  const labelInlineStyle = {
    fontSize: '36px',
    color: 'cadetblue',
    fontFamily:'cursive',
    fontWeight:'bold'
  }
function Login(){
    const [email,setEmail]= useState("");
    const [emailError ,setEmailErrorr] = useState('');
    const [passwordError ,setPasswordError]= useState('');
   const [password,setPassword]= useState("");
   const navigate = useNavigate();
   const location = useLocation();
   
   console.log(location);
 const  onChangeEventForPassword =(event)=>{
setPassword(event.target.value);
setPasswordError('');
 }
 const onChangeeventForEmail=(event)=>{
  setEmail(event.target.value);
setEmailErrorr('');
 }
 const  handleSubmit = async ()=>{
  try{
    const loginObject = {
      "email": email ,
       "password":password
    }
if(location.state!=null){
  const firstTimeloginObject = {
    "email": location.state.email ,
   "password":location.state.password
  }
  const res = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(firstTimeloginObject),
  })
  if(res.ok){
      console.log(res);
  navigate("/home",{state:location.state});
  }
    }
else if (loginObject.email && loginObject.password){
    const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginObject),
      })
      if(res.ok){
          console.log(res);
      navigate("/home",{state:location.state});
      }
        }
        else if (loginObject.email == ""){
  setEmailErrorr("Email is required");
        } 
        else{
          setPasswordError("Password is required");
        }
}

  catch(err){
console.log(err);
  }
 }
useEffect (()=>{
 if(location.state!=null){
 setEmail(location.state.email);
 setPassword(location.state.password);
 handleSubmit();
 console.log(location.state)
 }
},[]) 
    return (
        <>
        <div className="App">
        <header className="App-header">
          <img src="image-cart-fotor-bg-remover-20230906123314.png" className="App-logo" alt="logo" />
         <label style={labelInlineStyle}>CATSPETS</label>
          <p style={inlineStyle}>
            Login
          </p>
          <div className='input-blocks'>
          <Input label="Email" type="email" placeholder = "Enter a Email" value={email} onChange={onChangeeventForEmail} ></Input>
         {emailError&&<p style={{color: "red", display: "block",textAlign: "start",margin: "0px",fontSize: "12px"}}>{emailError}</p>}
          <Input label="Password" type= "password" placeholder = "Enter a Password"  value={password} onChange={onChangeEventForPassword}></Input>
          {passwordError&&<p style={{color: "red", display: "block",textAlign: "start",margin: "0px",fontSize: "12px"}}>{passwordError}</p>}
          </div>
  <div>
    <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
    <p style={{fontSize:'18px'}}>if you don't have any account? please create an account &nbsp;
      <span><a href='/register' style={{color:'blue'}}>Register</a></span>
    </p>
  </div>
        </header>
      </div>
        </>
    )
}
export default Login;