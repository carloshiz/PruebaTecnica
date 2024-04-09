import { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate,useLocation} from 'react-router-dom';
import {registrarEmail} from "../api/Email.api.js";

function RegistrarEmail() {

    const [email, setEmail] = useState('');
    const [empleado, setEmpleado] = useState('');
    const navigate = useNavigate();
    
    const location = useLocation();
    const empleadoId = location.state?.empleadoId;

    const obtenerEmail = (event) => {
        setEmail(event.target.value);
    };

    const obtenerEmpleado = (event) => {
        setEmpleado(event.target.value);
    };

    const Submit = async (event) => {
        event.preventDefault();

        const data = {
            email: email,
            empleado: empleadoId,
        }

        try{
            const response = await registrarEmail(data);
            if (response.status === 200 || response.status === 201) {
                alert("CORREO REGISTRADO CON EXITO!");
                navigate('/empleadoAdmin');
            }   
            
        }catch (error){
            if (error.response && error.response.status !== 201) {
                alert("ERROR AL REGISTRAR EL CORREO!");
            }
        }

    };

    return (
        <>
            <Container maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Registro de correo Electronico
                    </Typography>
                    <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            autoComplete="current-email"
                            value={email}
                            onChange={obtenerEmail}
                        />
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="empleado"
                            label="Empleado-ID"
                            type="empleado"
                            id="empleado"
                            autoComplete="current-empleado"
                            value={empleado}
                            onChange={obtenerEmpleado}
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Registrar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default RegistrarEmail;