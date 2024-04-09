import axios from 'axios'

export const registrarEmail = (data) =>{
    return axios.post('http://localhost:8000/api/Correo/',data);
}

export const getAllTask = () =>{
    return axios.get('http://localhost:8000/api/Correo/');
}