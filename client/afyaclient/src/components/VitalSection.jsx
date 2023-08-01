import React, {useState, useRef, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useViewPatientIDQuery } from "../features/patients/patientAPISlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import InputGroup from 'react-bootstrap/InputGroup';
import moment from 'moment';

import { usePostAppointmentDetailMutation } from '../features/patients/patientAPISlice';

function VitalSection() {

    const { id } = useParams();
    const [ appointmentDetails, {isLoading} ] = usePostAppointmentDetailMutation();
    const [ appointmentDate, setAppointmentDate ] = useState(new Date());
    const [ patientWeight, setPatientWeight ] = useState(0);
    const [ patientHeight, setPatientHeight ] = useState(0);
    const [ bmi , setBmi ] = useState(``)
    const patientApppointmentRef = useRef();
    const [patient, setPatient] = useState({});
    const { data, error } = useViewPatientIDQuery(id);
    const patient_id = patient['id']


    // Server date format with moment
    const todaysDate = moment(appointmentDate).format('YYYY/MM/DD')

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
        let newBMI = patientWeight / (patientHeight * patientHeight);
        setBmi(newBMI);
    };

    useEffect(() => {
        if( patientWeight != null && patientHeight !=null){
            handlePatientBMIInput(patientWeight, patientHeight)
        }
        if( data != null){
            setPatient(data)
        }
    }, [patientWeight, patientHeight, data])



    

    const submitAppointmentData = async (e) => {
        e.preventDefault()

        try{
            const appointmentInfo = await appointmentDetails(patient_id, {patientWeight, patientHeight, bmi, patient_id}).unwrap();
    
            console.log(appointmentInfo)
        }catch(error){
            console.log(error)
        }
    };

    return (
        <section className="row mt-4">
            <Alert variant="secondary">
                <h3 className="text-center">Patient's Vital Section</h3>
            </Alert>
            <Form onSubmit={submitAppointmentData}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Today's date</Form.Label>
                    <Form.Control
                        type="text"
                        value={todaysDate}
                        onChange={handleAppointmentDateInput}
                        ref={patientApppointmentRef}
                        disabled
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
                        value={bmi || 0}
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
                    Save
                </Button>
            </Form>
        </section>
    )
}

export default VitalSection