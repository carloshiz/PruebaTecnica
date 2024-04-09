import { useEffect, useState } from "react";
import { getAllTask } from "../api/Empleado.api";
import { Empleado } from "./empleado";
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function EmpleadoList() {

    const [empleados, setEmpleados] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        async function obtenerEmpleados() {
            const response = await getAllTask();
            setEmpleados(response.data);
        }
        obtenerEmpleados();
    }, []);

    const Register = () => {
        navigate('/registroEmpleado');
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lista de Empleados
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mb: 2, alignSelf: 'center' }}
                    onClick={Register}
                >
                    Registrar Empleado
                </Button>
            </Box>
            <div>
                {empleados.map((empleado) => (
                    <Empleado key={empleado.id} empleado={empleado} />
                ))}
            </div>
        </>
    );
}