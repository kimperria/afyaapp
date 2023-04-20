import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import NavBar from "./NavBar";
import VitalSection from "./VitalSection";

function RegisterPatient() {
  return (
    <main className="container container-fluid">
      <NavBar />
      <section className="row align-items-center register_page_position">
        <Alert variant="primary">
          <h3 className="text-center">Patient Registration Page</h3>
        </Alert>
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control type="date" placeholder="Enter your DOB" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Select aria-label="Default select example">
                <option>Please select your gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Non-Binary</option>
              </Form.Select>
            </Form.Group>

            <section className="row">
              <div className="col">
                <Button variant="danger" type="submit" style={{ width: "100%" }}>
                  Clear
                </Button>
              </div>

              <div className="col">
                <Button variant="success" type="submit" style={{ width: "100%" }}>
                  Save
                </Button>
              </div>
            </section>
          </Form>
        </div>
      </section>

      <section>
        <VitalSection />
      </section>
    </main>
  );
}

export default RegisterPatient;
