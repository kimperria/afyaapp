import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/NavBar';
import AboutAfya from '../components/AboutAfya';
// import RegisterIMG from '../../public/register_patient.svg'

function Dashboard() {
    return (
        <main className='container container-fluid'>
            <NavBar />

            <section className='mt-3'>
                <h3>Overview Dashboard</h3>
            </section>
            <div className="row mt-3">
                <div className="col-md-3 col-sm-4 mt-4">
                        <Card variant='light' className='text-center'>
                            {/* Write media querry on small devices */}
                            <Card.Img variant='top' src='../../public/register_patient.svg' style={{height: "200px"}}/>
                            <Card.Footer>
                                <h5>Patient Registration</h5>
                            </Card.Footer>
                        </Card>
                    </div>
                <div className="col-md-3 col-sm-4 mt-4">
                        <Card variant='light' className='text-center'>
                            {/* Write media querry on small devices */}
                            <Card.Img variant='top' src='../../public/triage.svg' style={{height: "200px"}}/>
                            <Card.Footer>
                                <h5>Triage/Appointments </h5>                       
                            </Card.Footer>
                        </Card>
                </div>
                <div className="col-md-3 col-sm-4 mt-4">
                    <Card variant='light' className='text-center'>
                            {/* Write media querry on small devices */}
                            <Card.Img variant='top' src='../../public/appointments.svg' style={{height: "200px"}}/>
                            <Card.Footer>
                                <h5>Patients Information</h5>                       
                            </Card.Footer>
                        </Card>
                </div>
                <div className="col-md-3 col-sm-4 mt-4">
                    <Card variant='light' className='text-center'>
                            {/* Write media querry on small devices */}
                            <Card.Img variant='top' src='../../public/account.svg' style={{height: "200px"}} />
                            <Card.Footer>
                                <h5>Account</h5>                       
                            </Card.Footer>
                        </Card>
                </div>
            </div>
        </main>
    )
}

export default Dashboard