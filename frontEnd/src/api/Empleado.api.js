import axios from 'axios'

export const getAllTask = () =>{
    return axios.get('http://localhost:8000/api/Empleado/');
}

export const registrarEmpleado = (data) =>{
    return axios.post('http://localhost:8000/api/Empleado/',data);
}

export const deleteEmpleado = (empleadoId) => {
    return axios.delete(`http://localhost:8000/api/Empleado/${empleadoId}/`);
}

export const actualizarEmpleado = (empleadoId, dataActualizada) => {
    return axios.put(`http://localhost:8000/api/Empleado/${empleadoId}/`, dataActualizada);
}