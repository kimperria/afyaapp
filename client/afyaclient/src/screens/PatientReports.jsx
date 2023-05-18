import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useViewAllPatientsQuery } from "../features/patients/patientAPISlice";

function PatientReports() {
  // const { data, isLoading, isFetching, error } = useViewAllPatientsQuery({
  //   pollingInterval: 3000,
  //   refetchOnMountOrArgChange: true,
  //   skip: false,
  // });

  const patientList = [
    {
      id: 1,
      first_name: 'Kimani',
      last_name: 'John',
      date_of_birth: "1947-04-26",
      bmi: 20
    },
    {
      id: 2,
      first_name: 'Terry',
      last_name: 'Njoki',
      date_of_birth: "1987-04-26",
      bmi: 18
    },
    {
      id: 3,
      first_name: 'Joy',
      last_name: 'Wairimu',
      date_of_birth: "1964-04-26",
      bmi: 28
    },
    {
      id: 4,
      first_name: 'Michael',
      last_name: 'Owiso',
      date_of_birth: "2000-04-26",
      bmi: 16
    },
    {
      id: 5,
      first_name: 'Nyevu',
      last_name: 'Karisa',
      date_of_birth: "1997-04-26",
      bmi: 30
    },
  ]

  const bmiState = (patientWeight) => {
    if( patientWeight < 18.5) return 'Underweight';
    if( patientWeight > 18.5 && patientWeight < 25) return 'Normal';
    if( patientWeight > 25 || patientWeight == 25) return 'Overweight';
  };

  const patientAge = (date_of_birth) => {
    const today = new Date();
    const age = today.getFullYear() - date_of_birth.getFullYear() - 
    (today.getMonth() < date_of_birth.getMonth() || 
    (today.getMonth() === date_of_birth.getMonth() && today.getDate() < date_of_birth.getDate()));
    return age;
  }

  const convertPatientDOB = (api_date) => {
    const patient_DOB = new Date(api_date)
    return patient_DOB
  }
  patientAge(convertPatientDOB("1997-04-26"))


  // const [patientList, setPatientList] = useState();



  // try {
  //   if (data?.status == 200) {
  //     useEffect(() => {
  //       console.log(data)
  //       const patientList = data.data.data
  //       setPatientList(patientList)
  //     }, [])
  //   } else if (error) {

  //     console.error(error, 'Unable to fetch endpoint')
  //   }
  // } catch (e) {
  //   console.log(e)
  // }

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
            {patientList.length === 0 ? 
              <tr>
                <td colSpan={4}><h4 className="text-center">Unable to populate patient's data</h4></td>
              </tr> :
              <>
                {patientList.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.first_name + ' ' + patient.last_name}</td>
                    <td>{ patientAge(convertPatientDOB(patient.date_of_birth))}</td>
                    <td>{ bmiState(patient.bmi)}</td>
                    <td>
                      <Button variant="success" style={{ width: "100%" }} href={`/patient/${patient.id}`}>View</Button>
                    </td>
                  </tr>
                ))}
              </>
            }
          </tbody>
        </Table>
      </section>
    </main>
  );
}

export default PatientReports;
