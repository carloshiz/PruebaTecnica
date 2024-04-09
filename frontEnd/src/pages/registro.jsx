import { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registrarAdmin } from "../api/Admin.api.js";

function RegistroForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    
    const obtenerUsername = (event) => {
        setUsername(event.target.value);
    };

    const obtenerPassword = (event) => {
        setPassword(event.target.value);
    };

    const obtenerEmail = (event) => {
        setEmail(event.target.value);
    };

    const Submit = async (event) => {
        event.preventDefault();

        const data = {
            username: username,
            password: password,
            email: email
        }

        try{
            const response = await registrarAdmin(data);
            if (response.status === 200 || response.status === 201) {
                alert("ADMIN REGISTRADO CON EXITO!");
                navigate('/login');
            }   
            
        }catch (error){
            if (error.response && error.response.status !== 201) {
                alert("ERROR AL REGISTRAR EL ADMIN!");
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
                        Registro
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
                            Registrarse
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default RegistroForm;