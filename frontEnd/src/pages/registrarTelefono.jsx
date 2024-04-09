import { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate,useLocation } from 'react-router-dom';
import { registrarTelefono } from "../api/Telefono.api.js"; 

function RegistrarTelefono() {
    const [tipo, setTipo] = useState('');
    const [numero, setNumero] = useState('');
    const [indicativo, setIndicativo] = useState('');
    const [empleado, setEmpleado] = useState(''); 
    const navigate = useNavigate();
    
    const location = useLocation();
    const empleadoId = location.state?.empleadoId;

    const obtenerTipo = (event) => {
        setTipo(event.target.value);
    };

    const obtenerNumero = (event) => {
        setNumero(event.target.value);
    };

    const obtenerIndicativo = (event) => {
        setIndicativo(event.target.value);
    };

    const obtenerEmpleado = (event) => {
        setEmpleado(event.target.value);
    };

    const Submit = async (event) => {
        event.preventDefault();

        const data = {
            tipo: tipo,
            numero: numero,
            indicativo: indicativo,
            empleado: empleadoId, 
        };

        try {
            const response = await registrarTelefono(data);
            if (response.status === 200 || response.status === 201) {
                alert("TELÉFONO REGISTRADO CON ÉXITO!");
                navigate('/empleadoAdmin');
            }  
        } catch (error) {
            console.error(error);
            alert("ERROR AL REGISTRAR EL TELÉFONO!");
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
                        Registro de Teléfono
                    </Typography>
                    <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            select
                            name="tipo"
                            label="Tipo"
                            id="tipo"
                            value={tipo}
                            onChange={obtenerTipo}
                            SelectProps={{ native: true }}
                        >
                            <option value=""></option>
                            <option value="Cell">Celular</option>
                            <option value="Tel">Teléfono</option>
                        </TextField>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="numero"
                            label="Número"
                            type="text"
                            id="numero"
                            value={numero}
                            onChange={obtenerNumero}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="indicativo"
                            label="Indicativo"
                            type="text"
                            id="indicativo"
                            value={indicativo}
                            onChange={obtenerIndicativo}
                        />
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="empleado"
                            label="Empleado-ID"
                            type="text"
                            id="empleado"
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
    );
}

export default RegistrarTelefono;
