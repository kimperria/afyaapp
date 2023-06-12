import React from 'react';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';

function ServerError() {
  return (
    <main>
        <NavBar />
        <div className="mt-3"></div>

        <section className="d-flex justify-content-center">
            <Card style={{ width: '50rem' }}>
                <Card.Header>
                    <h2 className='text-center'>Server Error</h2>
                </Card.Header>
                <Card.Body>
                <h5>SHOOT!!!</h5>
                <p>This is unexpected....</p>
                <small>Please contact admin if this persists</small>
                </Card.Body>
            </Card>
        </section>
    </main>
  )
}

export default ServerError