import { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate,useLocation } from 'react-router-dom';
import { actualizarEmpleado } from "../api/Empleado.api.js";

function ActualizarEmpleado() {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [tipoIdentificacion, setTipoIdentificacion] = useState('CC');
    const [identificacion, setIdentificacion] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [cargo, setCargo] = useState('');
    const [departamento, setDepartamento] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const empleadoId = location.state?.empleadoId;

    const obtenerNombres = (event) => {
        setNombres(event.target.value);
    };

    const obtenerApellidos = (event) => {
        setApellidos(event.target.value);
    };

    const obtenerTipoIdentificacion = (event) => {
        setTipoIdentificacion(event.target.value);
    };

    const obtenerIdentificacion = (event) => {
        setIdentificacion(event.target.value);
    };

    const obtenerFechaIngreso = (event) => {
        setFechaIngreso(event.target.value);
    };

    const obtenerCargo = (event) => {
        setCargo(event.target.value);
    };

    const obtenerDepartamento = (event) => {
        setDepartamento(event.target.value);
    };

    const Submit = async (event) => {
        event.preventDefault();

        const data = {
            nombres: nombres,
            apellidos: apellidos,
            tipoIdentificacion: tipoIdentificacion,
            identificacion: identificacion,
            fechaIngreso: fechaIngreso,
            cargo: cargo,
            departamento: departamento
        }

        try {
            const response = await actualizarEmpleado(empleadoId,data);
            if (response.status === 200 || response.status === 201) {
                alert("EMPLEADO ACTUALIZADO CON EXITO!");
                navigate('/empleadoAdmin');
            }

        } catch (error) {
            if (error.response && error.response.status !== 201) {
                alert("ERROR AL ACTUALIZAR EMPLEADO!");
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
                        Actualizar Empleado
                    </Typography>
                    <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nombres"
                            label="Nombres"
                            name="nombres"
                            autoComplete="name"
                            autoFocus
                            value={nombres}
                            onChange={obtenerNombres}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="apellidos"
                            label="Apellidos"
                            name="apellidos"
                            autoComplete="family-name"
                            value={apellidos}
                            onChange={obtenerApellidos}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="tipoIdentificacion"
                            label="Tipo de Identificación"
                            name="tipoIdentificacion"
                            autoComplete="tipo-identificacion"
                            value={tipoIdentificacion}
                            onChange={obtenerTipoIdentificacion}
                            select
                            SelectProps={{ native: true }}
                        >
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="NIT">NIT</option>
                        </TextField>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="identificacion"
                            label="Identificación"
                            name="identificacion"
                            autoComplete="identificacion"
                            value={identificacion}
                            onChange={obtenerIdentificacion}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="fechaIngreso"
                            label="Fecha de Ingreso"
                            name="fechaIngreso"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={fechaIngreso}
                            onChange={obtenerFechaIngreso}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="cargo"
                            label="Cargo"
                            name="cargo"
                            autoComplete="cargo"
                            value={cargo}
                            onChange={obtenerCargo}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="departamento"
                            label="Departamento"
                            name="departamento"
                            autoComplete="departamento"
                            value={departamento}
                            onChange={obtenerDepartamento}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Actualizar
                        </Button>
                    </Box>
                </Box>
            </Container>

        </>
    )
}

export default ActualizarEmpleado;