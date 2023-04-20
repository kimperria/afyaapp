import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SectionA() {
    return (
        <section>
            <h3 className='text-center'>Section A</h3>
            <div className='d-flex justify-content-center'>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicGeneralHealth">
                        <Form.Label>General Health ?</Form.Label>
                        <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            label='Good'
                        />

                        <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            label='Poor'
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicWeight">
                        <Form.Label>Have you ever been on diet to loose weight?</Form.Label>
                        <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            label='Yes'
                        />

                        <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            label='No'
                        />

                        <Form.Group className="mb-3" controlId="formBasicComments">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                    </Form.Group>


                    <Button
                        variant="outline-success"
                        type="submit"
                        style={{width: "100%"}}
                    >
                        Update information
                    </Button>
                </Form>
            </div>
        </section>
    )
}

export default SectionA