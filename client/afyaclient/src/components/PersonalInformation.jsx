import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function PersonalInformation() {
    return (
        <Form>

            <div className="row">
                <div className="col">
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                        />
                    </Form.Group>
                </div>

                <div className="col">
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                        />
                    </Form.Group>
                </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email address"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Username"
                />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group> */}

            <Button
                variant="outline-success"
                type="submit"
                style={{ width: "100%" }}
            >
                Update information
            </Button>
        </Form>
    )
}

export default PersonalInformation