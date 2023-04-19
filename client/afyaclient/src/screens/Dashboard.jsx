import React from 'react';
import PersonalInformation from '../components/PersonalInformation';
import NavBar from '../components/NavBar';
import AboutAfya from '../components/AboutAfya';

function Dashboard() {
    return (
        <main className='container container-fluid'>
            <NavBar />
            <div className="row mt-3">
                <div className="col-md-6">
                    <AboutAfya />
                </div>
                <div className="col-md-6">
                    <PersonalInformation />
                </div>
            </div>
        </main>
    )
}

export default Dashboard