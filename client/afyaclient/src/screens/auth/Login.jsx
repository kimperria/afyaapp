import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <main className="container container-fluid">
      <section className="row align-items-center register_page_position">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <h3 className="text-center">Login</h3>
          <Form>

            <Form.Text className="text-muted">
              Please ensure you have an account with us to be authorized.
            </Form.Text>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username or Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username or email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
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
            <small>Having troubles login?  Contact <a href="mailto:kimperriatest@gmail.com">Admin</a></small>

        </div>
      </section>
    </main>
  );
}

export default Login;
