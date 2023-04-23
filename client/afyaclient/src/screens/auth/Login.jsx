import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useLoginMutation } from "../../features/auth/loginAPISlice";
import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken } from "../../features/auth/authSlice";

function Login() {

  const [login, { isLoading }] = useLoginMutation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userRef = useRef();

  const dispatch = useDispatch();


  const handleUserInput = (e) => {
    setUsername(e.target.value)
  };

  const handleUserPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const userData = await login({username, password}).unwrap();
      console.log(userData)
    }catch(error){
      console.log(error)
    }

  };
  return (
    <main className="container container-fluid">
      <section className="row align-items-center register_page_position">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <h3 className="text-center">Login</h3>
          <Form onSubmit={handleSubmit}>

            <Form.Text className="text-muted">
              Please ensure you have an account with us to be authorized.
            </Form.Text>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={handleUserInput}
                value={username}
                ref={userRef}
                placeholder="Enter your username or email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleUserPassword}
                value={password}
                placeholder="password" />
            </Form.Group>

            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long and must not contain spaces or emoji.
            </Form.Text>

            <Button
              variant="outline-success"
              type="submit"
              style={{ width: "100%" }}
            >
              Login
            </Button>
          </Form>
          <small>Having troubles login?  Contact <a href="mailto:kimperriatest@gmail.com?subject = Trouble login in to AfyaAPP&body = Dear Kim, I am having issues accessing AfyaAPP">Admin</a></small>

        </div>
      </section>
    </main>
  );
}

export default Login;
