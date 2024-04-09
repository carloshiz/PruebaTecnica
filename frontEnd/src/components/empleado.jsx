import React from "react";
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {deleteEmpleado} from "../api/Empleado.api.js";
import { useNavigate } from 'react-router-dom';

export function Empleado({ empleado }) {

    const navigate = useNavigate();

    const Delete = async() => {
        try {
            const response = await deleteEmpleado(empleado.id);
            if (response.status === 200) {
                alert("Empleado eliminado con éxito");
                navigate('/empleadoAdmin');
            }
        } catch (error) {
            alert("Hubo un error al eliminar el empleado", error.response);
        }
    };

    const Edit = () => {
        navigate('/actualizarEmpleado', { state: { empleadoId: empleado.id } });
        console.log("Editar", empleado.id);
    };

    const RegisterEmail = () => {
        navigate('/registrarEmail', { state: { empleadoId: empleado.id } });
    };
    
    const RegisterPhone = () => {
        navigate('/registrarTelefono', { state: { empleadoId: empleado.id } });
    };

    return (
        
        <List dense={true}>
            <ListItem>
                <ListItemText
                    primary={`${empleado.nombres} ${empleado.apellidos}`}
                    secondary={`ID: ${empleado.id} - Cedula: ${empleado.identificacion} - FechaIngreso: ${empleado.fechaIngreso} - Cargo:${empleado.cargo}`}
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="email" onClick={RegisterEmail}>
                        <EmailIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="phone" onClick={RegisterPhone}>
                        <PhoneIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={Edit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={Delete}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}
