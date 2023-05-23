import React from "react";
import NavBar from "../components/NavBar";
import VitalSection from "../components/VitalSection";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
function PatientInformation() {
  const { id } = useParams();

  return (
    <main className="container container-fluid">
      <NavBar />

      <section className="mt-3">
        <h3>Patient {id} Record</h3>
      </section>

      <div className="row mt-3">
        <div className="col-md-12">
          <Card variant="light">
            <Card.Header>
              <h3 className="text-center">PATIENT PROFILE</h3>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <h5>Full Name: </h5>
                  <h5>Age: </h5>

                  <h5>BMI Status: </h5>
                </div>
                <div className="col-md-6">
                  <h5>Last appointment: </h5>
                  <div className="row">
                    <div className="col">
                      <h5>Height: </h5>
                    </div>
                    <div className="col">
                      <h5>Weight: </h5>
                    </div>
                  </div>
                  <h5>BMI: </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                {" "}
                <Button
                  variant="success"
                  style={{ width: "100%" }}
                  href={`/appointment/${id}`}
                >
                  Book Appointment
                </Button>
              </div>
              <div className="col-md-4"></div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default PatientInformation;
