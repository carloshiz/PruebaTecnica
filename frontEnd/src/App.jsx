import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes, Route,Navigate} from "react-router-dom";
import LoginForm from "./pages/login.jsx";
import RegistroForm from "./pages/registro.jsx";
import {EmpleadoAdmin} from "./pages/EmpleadoAdmin.jsx";
import RegistroEmpleado from "./pages/registrarEmpleado.jsx";
import RegistrarEmail from "./pages/registrarEmail.jsx";
import RegistrarTelefono from "./pages/registrarTelefono.jsx";
import ActualizarEmpleado from "./pages/actualizarEmpleado.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/empleadoAdmin" element={<EmpleadoAdmin/>}/>
          <Route path="/registro" element={<RegistroForm/>}/>
          <Route path="/registroEmpleado" element={<RegistroEmpleado/>}/>
          <Route path="/registrarEmail" element={<RegistrarEmail/>}/>
          <Route path="/registrarTelefono" element={<RegistrarTelefono/>}/>
          <Route path="/actualizarEmpleado" element={<ActualizarEmpleado/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
