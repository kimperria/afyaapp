import React, { useEffect, useState }  from 'react'
import VitalSection from '../components/VitalSection';
import NavBar from '../components/NavBar';
import { useParams } from "react-router-dom";
import { useViewPatientIDQuery } from "../features/patients/patientAPISlice";

export default function Appointment() {

  const { id } = useParams();

  const [patient, setPatient ] = useState({});

  const { data, isLoading, error } = useViewPatientIDQuery(id);

  useEffect(() => {
    if(data != null){
      setPatient(data)
    }
  }, [data])

  return (
    <main className='container container-fluid'>
        <NavBar />
        <div className="mt-3">
          <VitalSection />
        </div>
    </main>
  )
}
