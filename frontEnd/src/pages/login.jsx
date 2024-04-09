import { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {obtenerAdmin} from "../api/Admin.api.js";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const obtenerUsername = (event) => {
        setUsername(event.target.value);
    };

    const obtenerPassword = (event) => {
        setPassword(event.target.value);
    };

    
    const Submit = async (event) => {
        event.preventDefault(); 
    
        const data = {
            username: username,
            password: password
        }

        try{
            const response = await obtenerAdmin(data);
            if(response.status===200){
                alert("ADMIN ENCONTRADO");
                navigate('/empleadoAdmin');
            }
            
        }catch (error){
            if (error.response || error.response.status === 404) {
            alert("ADMIN NO ENCONTRADO!!");
        }
        }

    };

    const Register = () => {
        navigate('/registro');
    };

    return (
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
                    Iniciar Sesión
                </Typography>
                <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nombre de Usuario"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={obtenerUsername}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={obtenerPassword}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>

                    <Button
                        color="success"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                        onClick={Register}
                    >
                        Registrarse
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}

export default LoginForm;