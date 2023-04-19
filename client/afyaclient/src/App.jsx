import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./screens/auth/Login";
import RegisterPatient from "./screens/RegisterPatient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register-patient' element={ <RegisterPatient /> } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
