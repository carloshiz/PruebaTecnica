import axios from 'axios'

export const registrarTelefono = (data) =>{
    return axios.post('http://localhost:8000/api/Telefono/',data);
}

export const getAllTask = () =>{
    return axios.get('http://localhost:8000/api/Telefono/');
}

