import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import NavBar from "./NavBar";
import VitalSection from "./VitalSection";

import { useRegisterNewPatientMutation } from "../features/patients/patientAPISlice";


function RegisterPatient() {

  const [patientInfo, { isLoading }] = useRegisterNewPatientMutation();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [date_of_birth, setDateOfBirth] = useState({});
  const [gender, setGender] = useState(false);
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
    let gender = e.target.value;
    setGender(gender)
  }

  const clearForm = () => {
    setFirstName(''),
    setLastName(''),
    setDateOfBirth({}),
    setGender('')
  };

  const submitPatientInformation = async (e) => {
    e.preventDefault()

    const newPatientData = await patientInfo({first_name, last_name, date_of_birth, gender}).unwrap();
    console.log(newPatientData)
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
              <Form.Control type="text" placeholder="First name" value={first_name} onChange={handleFirstNameInput} ref={patientRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="last name" value={last_name} onChange={handleLastNameInput} ref={patientRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control type="date" placeholder="Enter your DOB" onChange={handleDateOfBirthInput} ref={patientRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Select aria-label="Default select example" onChange={handleGenderInput} ref={patientRef}>
                <option value="">Please select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Non-Binary</option>
              </Form.Select>
            </Form.Group>

            <section className="row">
              <div className="col">
                <Button variant="danger" type="submit" style={{ width: "100%" }} onClick={clearForm}>
                  Clear
                </Button>
              </div>

              <div className="col">
                <Button variant="success" type="submit" onClick={submitPatientInformation} style={{ width: "100%" }}>
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
