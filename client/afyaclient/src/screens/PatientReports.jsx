import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form";
import NavBar from '../components/NavBar';
import { useViewAllPatientsQuery } from '../features/patients/patientAPISlice';

function PatientReports() {

    const { data, isLoading, error} = useViewAllPatientsQuery();

    useEffect(()=>{
        console.log(data, isLoading, error)
    },[])

    if(isLoading) return <div>Is loading</div>;

    if(error) return <div>Error</div>;

    return (
        <main className="container container-fluid">
            <NavBar />
            <div className="mt-3"></div>
            <Alert variant='secondary' className='text-center'>
                <h4>Patient Report</h4>
            </Alert>

            <section className='d-flex flex-row-reverse'>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Filter by date</Form.Label>
                        <Form.Control type="date" placeholder="Enter appointment date" />
                    </Form.Group>
                </Form>
            </section>

            <section className='mt-2'>
                <Table striped bordered hover variant='success'>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Age</th>
                            <th>BMI Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>24</td>
                            <td>Overweight</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>65</td>
                            <td>Normal</td>
                        </tr>

                        <tr>
                            <td>Terry</td>
                            <td>36</td>
                            <td>Underweight</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </main>
    )
}

export default PatientReports