import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import InputGroup from 'react-bootstrap/InputGroup';

function VitalSection() {
    return (
        <section className="row mt-4">
            <Alert variant="secondary">
                <h3 className="text-center">Patient's Vital Section</h3>
            </Alert>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Please provide today's date</Form.Label>
                    <Form.Control
                        type="date"
                    />
                </Form.Group>
                <div className="row">
                    <div className="col">
                        {/* <Form.Group className="mb-3" controlId="formBasicWeight">
                            <Form.Label>Weight (kg)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Weight"
                            />
                        </Form.Group> */}
                        <Form.Label>Patient's weight (to the nearest kilogram)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>kg</InputGroup.Text>
                            <Form.Control aria-label="Patient's Weight (to the nearest kilogram)" />
                        </InputGroup>
                    </div>

                    <div className="col">
                        {/* <Form.Group className="mb-3" controlId="formBasicHeight">
                            <Form.Label>Height (cm)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Height"
                            />
                        </Form.Group> */}

                        <Form.Label>Patient's height (to the nearest meter)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>m</InputGroup.Text>
                            <Form.Control aria-label="Patient's height (to the nearest meter)" />
                        </InputGroup>
                    </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicBMI">
                    <Form.Label>Patient's BMI</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Patients BMI"
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