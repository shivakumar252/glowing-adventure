import { useState } from 'react';
import Input from '../components/Input';
import '../css/register.css';
import {useNavigate} from "react-router-dom";
const inlineStyle = {
    color: 'blue',
  }
  const labelInlineStyle = {
    fontSize: '36px',
    color: 'cadetblue',
    fontFamily:'cursive',
    fontWeight:'bold'
  }
function Registerpage(){
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async ()=>{
    try{
      const registerObject = {
        firstName,lastName,email,password
       }
       const res = await fetch('https://reqres.in/api/register',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(registerObject)
       })
       if(res.id!=undefined || res.id != null || res.id !=""){
        navigate("/",{state:registerObject});
       }
    }catch(error)
      {
      console.log('error')
      }
    }
return(
    <>
    <div className="App">
        <header className="App-header">
          <img src="image-cart-fotor-bg-remover-20230906123314.png" className="App-logoImg" alt="logo" />
         <label style={labelInlineStyle}>CATSPETS</label>
          <p style={inlineStyle}>
            Register
          </p>
          <div className='input-blocks'>
          <Input label="First Name" type="text" placeholder="Enter a First Name" value={firstName} onChange={(event)=>{
           setFirstName(event.target.value)
          }}>
          </Input>
          <Input label="Last Name" type="text" placeholder="Enter a Last Name" value={lastName} onChange={(event)=>{
           setLastName(event.target.value)
          }}>
          </Input>
          <Input label="Email" type="text" placeholder="Enter Email" value={email} onChange={(event)=>{
           setEmail(event.target.value)
          }}>
          </Input>
          <Input label="Password" type="password" placeholder="Enter Password" value={password} onChange={(event)=>{
           setPassword(event.target.value)
          }}>
          </Input>
            </div>
            <div>
    <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
    </div>
          </header>
          </div>
    </>
)
}

export default Registerpage;