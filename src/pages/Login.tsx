import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"
import "../index.css"
const Login = () => {
 
  const [phone_error, set_phone_error] = useState(false);
  const [email_error, set_email_error] = useState(false);
  const [name, set_name] = useState('');
  const [phone, set_phone] = useState('');
  const [email, set_email] = useState('');

  const navigate = useNavigate();

  function phone_validation(): boolean {
    if (phone.length !== 10) {
      set_phone_error(true);
      return true;
    }
    return false;
  }

  function email_validation(): boolean {
    if (email.search('@') === -1) {
      set_email_error(true);
      return true;
    }
    return false;
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (phone_validation() || email_validation()) {
      console.log('Validation failed');
      return false;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);

    navigate('/data_table');
  };

  return (
    <>
    <div className="full_page">
      <h1 className="heading">Login Form</h1>
      <div className="login-box">
        <h2 className="heading-2">Login</h2>
      <form name="details_form" className="details_form" onSubmit={submitForm}>
        <TextField 
        style={{marginBottom: "10px"}}
        className="custom-textfield"
          required
          id="name"
          label="Name"
          name="details_form"
          value={name}
          onChange={(e) => set_name(e.target.value)}
        />
        <TextField className="custom-textfield"
        style={{marginBottom: "10px"}}
          error={phone_error}
          onInput={() => set_phone_error(false)}
          required
          id="phone"
          label="Phone Number"
          
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          name="details_form"
          value={phone}
          onChange={(e) => set_phone(e.target.value)}
        />
        <TextField
        style={{marginBottom: "30px"}}
        className="custom-textfield"
          error={email_error}
          onInput={() => set_email_error(false)}
          required
          id="email"
          label="Email"
          type="email"
          name="details_form"
          value={email}
          onChange={(e) => set_email(e.target.value)}
        />

        <Button style={{display:"block",margin:"0 auto",width:"200px",padding:"0.5rem",cursor:"pointer",borderRadius:"1rem",border:"none",fontSize:"1.1rem",fontWeight:"bolder",color:"#fff",background:"linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)"}} variant="contained" name="details_form" type="submit">
          Submit
        </Button>
      </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
