import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./screens/auth/Login";
import RegisterPatient from "./components/RegisterPatient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register-patient' element={<RegisterPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
