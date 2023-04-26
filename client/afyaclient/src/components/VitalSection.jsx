import React, {useState, useRef, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import InputGroup from 'react-bootstrap/InputGroup';

import { usePostAppointmentDetailMutation } from '../features/patients/patientAPISlice';

function VitalSection() {

    const [ appointmentDetails, {isLoading} ] = usePostAppointmentDetailMutation();
    const [ appointmentDate, setAppointmentDate ] = useState({})
    const [ patientWeight, setPatientWeight ] = useState(0)
    const [ patientHeight, setPatientHeight ] = useState(0)
    const [ bmi, setBmi ] = useState(0)
    const patientApppointmentRef = useRef();

    const handleAppointmentDateInput = (e) => {
        setAppointmentDate(e.target.value)
    };

    const handlePatientWeightInput = (e) => {
        setPatientWeight(e.target.value)
    };

    const handlePatientHeightInput = (e) => {
        setPatientHeight(e.target.value)
    };

    const handlePatientBMIInput = (patientWeight, patientHeight) => {
        let newBMI = patientWeight / (patientHeight * patientHeight)

        // console.log('BMI', newBMI)

        // if (newBMI = NaN || newBMI === Infinity ) {
        //    var placeHolderValue = 'Please enter your weight and height'
        // } else {
        //    var  placeHolderValue = 'Patient BMI'
        // }
        setBmi(newBMI)

    }

    useEffect(() => {
        handlePatientBMIInput(patientWeight, patientHeight)
    }, [handlePatientBMIInput])

    

    const submitAppointmentData = async (e) => {
        e.preventDefault()

        const appointmentInfo = await appointmentDetails({appointmentDate, patientWeight, patientHeight, bmi }).unwrap();

        console.log(appointmentInfo)
    };

    return (
        <section className="row mt-4">
            <Alert variant="secondary">
                <h3 className="text-center">Patient's Vital Section</h3>
            </Alert>
            <Form onSubmit={submitAppointmentData}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Please provide today's date</Form.Label>
                    <Form.Control
                        type="date"
                        onChange={handleAppointmentDateInput}
                        ref={patientApppointmentRef}
                    />
                </Form.Group>
                <div className="row">
                    <div className="col">
                        <Form.Label>Patient's weight (to the nearest kilogram)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>kg</InputGroup.Text>
                            <Form.Control 
                            aria-label="Patient's Weight (to the nearest kilogram)" 
                            value={patientWeight} 
                            onChange={handlePatientWeightInput} 
                            ref={patientApppointmentRef} />
                        </InputGroup>
                    </div>

                    <div className="col">
                        <Form.Label>Patient's height (to the nearest meter)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>m</InputGroup.Text>
                            <Form.Control 
                            aria-label="Patient's height (to the nearest meter)" 
                            value={patientHeight} 
                            onChange={handlePatientHeightInput} />
                        </InputGroup>
                    </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicBMI">
                    <Form.Label>Patient's BMI</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder='patientBMI'
                        value={bmi}
                        onChange={handlePatientBMIInput}
                        ref={patientApppointmentRef}
                        disabled
                        size="sm"
                    />
                </Form.Group>

                <Button
                    variant="outline-success"
                    type="submit"
                    style={{ width: "100%" }}
                >
                    Update information
                </Button>
            </Form>
        </section>
    )
}

export default VitalSection