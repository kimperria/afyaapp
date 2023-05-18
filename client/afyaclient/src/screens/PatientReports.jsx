import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import NavBar from "../components/NavBar";
import { useViewAllPatientsQuery } from "../features/patients/patientAPISlice";

function PatientReports() {
  const { data, isLoading, isFetching, error } = useViewAllPatientsQuery({
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const [patientList, setPatientList] = useState([])

  if (data?.status == 200) {
     useEffect(() => {
      const patientList = data.data.data
      setPatientList(patientList)
     }, [])
  } else {

    console.log('Unable to fetch endpoint')
  }

  // const patientAge = (date_of_birth) => {
  //   const today = new Date();
  //   const age = today.getFullYear() - date_of_birth.getFullYear() - 
  //   (today.getMonth() < date_of_birth.getMonth() || 
  //   (today.getMonth() === date_of_birth.getMonth() && today.getDate() < date_of_birth.getDate()));
  //   return age;
  // }

  // let date_of_birth = new Date(2000, 2, 5); 
  // const ageValue = patientAge(date_of_birth)
  // console.log("Age", ageValue)

  //   if (isLoading) return <div>Is loading</div>;

  //   if (error) return <div>Error</div>;

  return (
    <main className="container container-fluid">
      <NavBar />
      <div className="mt-3"></div>
      <Alert variant="secondary" className="text-center">
        <h4>Patient Report</h4>
      </Alert>

      <section className="d-flex flex-row-reverse">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Filter by date</Form.Label>
            <Form.Control type="date" placeholder="Enter appointment date" />
          </Form.Group>
        </Form>
      </section>

      <section className="mt-2">
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Age</th>
              <th>BMI Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {isFetching ? 'Fetching list' : ''} */}
            {patientList.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.first_name + ' ' + patient.last_name}</td>
                <td>{patient.date_of_birth}</td>
                <td>Overweight</td>
                <td>
                  <Button variant="secondary" style={{ width: "100%" }}>View</Button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Mark</td>
              <td>24</td>
              <td>Overweight</td>
              <td>
                <Button variant="secondary" style={{ width: "100%" }}>View</Button>
              </td>
            </tr> */}
            {/* <tr>
              <td>Jacob</td>
              <td>65</td>
              <td>Normal</td>
              <td>
                <Button variant="secondary" style={{width: "100%"}}>View</Button>
              </td>
            </tr>

            <tr>
              <td>Terry</td>
              <td>36</td>
              <td>Underweight</td>
              <td>
                <Button variant="secondary" style={{width: "100%"}}>View</Button>
              </td>
            </tr> */}
          </tbody>
        </Table>
      </section>
    </main>
  );
}

export default PatientReports;
