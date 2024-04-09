import axios from 'axios'

export const obtenerAdmin = (data) =>{
    return axios.post('http://localhost:8000/api/login/',data);
}

export const registrarAdmin = (data) =>{
    return axios.post('http://localhost:8000/api/registro/',data);
}