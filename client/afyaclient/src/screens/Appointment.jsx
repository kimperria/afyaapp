import React from 'react'
import VitalSection from '../components/VitalSection';
import NavBar from '../components/NavBar';

export default function Appointment() {
  return (
    <main className='container container-fluid'>
        <NavBar />
        <div className="mt-3">
          <VitalSection />
        </div>
    </main>
  )
}
