import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./screens/auth/Login";
import RegisterPatient from "./components/RegisterPatient";
import Dashboard from "./screens/Dashboard";
import PatientReports from "./screens/PatientReports";
import PatientInformation from "./screens/PatientInformation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register-patient' element={<RegisterPatient />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='/reports' element={<PatientReports />} />
        <Route path="/patient/:id" element={<PatientInformation />}/>
        <Route path='*' element={<Navigate to='/' />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
