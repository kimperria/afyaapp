import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./screens/auth/Login";
import RegisterPatient from "./components/RegisterPatient";
import Dashboard from "./screens/Dashboard";
import PatientReports from "./screens/PatientReports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register-patient' element={<RegisterPatient />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='/reports' element={<PatientReports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
