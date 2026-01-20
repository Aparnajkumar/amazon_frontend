import React, { useState } from 'react'
import Sfooter from '../components/Sfooter'
import Hheader from '../components/Hheader'
import { Button, Card, Form } from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'
import { googleloginAPI, loginAPI, registerAPI } from '../services/allapi'
import { auth, provider } from "../firebase/Firebase";
import { signInWithPopup } from "firebase/auth";

function Auth() {
  const [register, setRegister] = useState(false)
  const [details, setDetails] = useState({
    name: "", password: "", email: ""
  })

  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = {
        name: result.user.displayName,
        email: result.user.email,
        profilePic: result.user.photoURL
      };
      const response = await googleloginAPI(userData)

      if (response.status === 200) {
        alert("Google Login Successful!");
        sessionStorage.setItem("existingUser", JSON.stringify(response.data.existingUser));
        sessionStorage.setItem("token", response.data.token);
        navigate("/")
      }
    } catch (error) {
      console.error(error);
      alert("Google Login Failed");
    }
  };

  const reg = async () => {
    try {
      const result = await registerAPI(details)
      if (result.status === 200) {
        alert("Registered Successfully")
        setDetails({ name: "", password: "", email: "" })
        setRegister(false)
      }
    } catch (error) {
      alert(error.response?.data || "Registration failed");
    }
  }

  const log = async () => {
    try {
      const result = await loginAPI(details)
      if (result.status === 200) {
        alert("Login successful");
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token);
        setTimeout(() => { navigate("/"); }, 1500);
      }
    } catch (error) {
      alert(error.response?.data || "Something went wrong");
    }
    setDetails({ ...details, password: "" }) 
  }

  return (
    <>
      <Hheader />
      <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '80vh' }}>
        {!register ? (
          <div>
            <Card className='p-5' style={{ width: '400px' }}>
              <h4 className="mb-3">Sign in</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    value={details.email}
                    onChange={(e) => setDetails({ ...details, email: e.target.value })} 
                    type="email" 
                  />
                  <Form.Label className="mt-2">Password</Form.Label>
                  <Form.Control 
                    value={details.password}
                    onChange={(e) => setDetails({ ...details, password: e.target.value })} 
                    type="password" 
                  />
                </Form.Group>
                <Button onClick={log} variant="warning" className="w-100 mb-3">Continue</Button>
                <Button onClick={handleGoogleLogin} variant="outline-dark" className="w-100 mb-3">
                  ✉ Sign in with Google
                </Button>
              </Form>
            </Card>
            <div className="text-center mt-3">
              <hr />
              <small className="text-muted">New to Amazon?</small>
              <Button onClick={() => setRegister(true)} variant="light" className="w-100 mt-2 border">
                Create your Amazon account
              </Button>
            </div>
          </div>
        ) : (
          <Card className='p-5' style={{ width: '400px' }}>
            <h4 className="mb-3">Create Account</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })} 
                  type="text" 
                />
                <Form.Label className="mt-2">Email</Form.Label>
                <Form.Control 
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })} 
                  type="email" 
                />
                <Form.Label className="mt-2">Password</Form.Label>
                <Form.Control 
                  value={details.password}
                  onChange={(e) => setDetails({ ...details, password: e.target.value })} 
                  type="password" 
                />
              </Form.Group>
              <Button onClick={reg} variant="warning" className="w-100 mb-3">Register</Button>
              <p className='small'>Already have an account? <span style={{cursor:'pointer', color:'blue'}} onClick={() => setRegister(false)}>Login</span></p>
            </Form>
          </Card>
        )}
      </div>
      <Sfooter />
    </>
  )
}

export default Auth