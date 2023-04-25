import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import NavBar from "./NavBar";
import VitalSection from "./VitalSection";

import { usePatientRegistrationMutation } from "../features/patients/patientAPISlice";

function RegisterPatient() {

  const [patientInfo, { isLoading }] = usePatientRegistrationMutation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState({});
  const [gender, setGender] = useState('');
  const patientRef = useRef();

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value)
  };

  const handleLastNameInput = (e) => {
    setLastName(e.target.value)
  };

  const handleDateOfBirthInput = (e) => {
    setDateOfBirth(e.target.value)
  };

  const handleGenderInput = (e) => {
    setGender(e.target.value)
  }

  const submitPatientInformation = async (e) => {
    e.preventDefault()

    const newPatientData = await patientInfo({firstName, lastName, dateOfBirth, gender}).unwrap();
    console.log(newPatientData)
    try{
      console.log()
    }catch (error) {
      console.log(error)
    }
  };

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
              <Form.Control type="text" placeholder="First name" value={firstName} onChange={handleFirstNameInput} ref={patientRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="last name" value={lastName} onChange={handleLastNameInput} ref={patientRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control type="date" placeholder="Enter your DOB" onChange={handleDateOfBirthInput} ref={patientRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Select aria-label="Default select example" onChange={handleGenderInput} ref={patientRef}>
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
