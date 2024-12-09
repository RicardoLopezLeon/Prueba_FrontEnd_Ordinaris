import React, { useState } from "react";
import Persona from "./Imagenes/PersonaCita.png"
import axios from "axios";

import { useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { Button, Box, Typography, Grid2, TextField, MenuItem, Checkbox } from "@mui/material";

function Appointment(){

    const [Doctores,setDoctores] = useState([])
    const [Datos,setDatos] = useState({
        nombre:"",
        phone:"",
        date:null,
        doctor:"",
        message:"",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatos((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    };

    const handleDateChange = (newDate) => {
        setDatos((prevValues) => ({
            ...prevValues,
            date: newDate,
        }));
    };

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const response = await axios.get(
                'https://repoapi.ordenaris.com/api/listaDoctores',
                {
                    headers: {
                    ordProyecto: 'a6093c23ae10457c8t0b8b298fc8b500',
                    ordCandidato: '52d5c5318fa04401ae0e550b9e7f506b'
                    },
                }
                );
                //console.log('Respuesta:', response.data.list);
                setDoctores(response.data.list)
            } catch (error) {
                console.error('Error en la petición:', error);
            }
        };
        getDoctors();
    },[])

    const sendAppointment = async () => {
        try {
            const response = await axios.post(
              'https://repoapi.ordenaris.com/api/mensaje',
              {
                nombre:Datos.nombre,
                telefono:Datos.phone,
                fecha:Datos.date ? Datos.date.format('YYYY-MM-DD') : "",
                doctor:Datos.doctor,
                mensaje:Datos.message
              },
              {
                headers: {
                  ordProyecto: 'a6093c23ae10457c8t0b8b298fc8b500',
                  ordCandidato: '52d5c5318fa04401ae0e550b9e7f506b'
                },
              }
            );
            //console.log('Respuesta:', response.data.mensaje);
        } catch (error) {
            console.error('Error en la petición:', error);
        }
    };

    return(
        <Box sx={{display:"flex", padding:"1vh", justifyContent:"space-around"}}>
            <Box sx={{display:"flex", width:"40%", justifyContent:"center"}}>
                <img src={Persona} width="90%" alt="Placeholder"></img>
            </Box>
            <Grid2 container spacing={2} sx={{width:"60%"}}>
                <Grid2 xs={6}>
                    <Typography variant="body1" color="black" sx={{m:1,
                        fontSize: "clamp(0.8em, 1.3vw, 3em)",
                    }}>
                        Name
                    </Typography>
                    <TextField label={"Full name"} margin="normal" variant="outlined"
                        name="nombre"
                        value={Datos.nombre}
                        onChange={handleInputChange}
                        sx={{borderRadius:1, margin:1, width:{
                            xs: '54vw',
                            sm: '26vw',
                            md: '26vw'
                        }}}
                        slotProps={{
                            inputLabel: {
                                sx: {fontSize: 'clamp(0.7em, 2.5vw, 1.2em)', color:'gray'},
                            },
                    }} />
                </Grid2>
                <Grid2 xs={6}>
                    <Typography variant="body1" color="black" sx={{m:1,
                        fontSize: "clamp(0.8em, 1.3vw, 3em)",
                    }}>
                        Phone
                    </Typography>
                    <TextField label={"(555) 000-000"} margin="normal" variant="outlined"
                        name="phone"
                        value={Datos.phone}
                        onChange={handleInputChange}
                        sx={{borderRadius:1, margin:1, width:{
                            xs: '54vw',
                            sm: '26vw',
                            md: '26vw'
                        }}}
                        slotProps={{
                            inputLabel: {
                                sx: {fontSize: 'clamp(0.7em, 2.5vw, 1.2em)', color:'gray'},
                            },
                    }} />
                </Grid2>
                <Grid2 xs={6}>
                    <Typography variant="body1" color="black" sx={{m:1,
                        fontSize: "clamp(0.8em, 1.3vw, 3em)",
                    }}>
                        Date
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="DD/MM/AAAA"
                            name="date"
                            value={Datos.date}
                            onChange={handleDateChange}
                            sx={{ borderRadius: 1, margin: 1, width: { xs: '54vw', sm: '26vw', md: '26vw' }}}
                            renderInput={(params) => (
                                <TextField
                                    {...params} label={"DD/MM/AAAA"} margin="normal" variant="outlined"
                                    slotProps={{ inputLabel: { sx: { fontSize: 'clamp(0.7em, 2.5vw, 1.2em)', color: 'gray' }}}}
                                />
                              )}
                        />
                    </LocalizationProvider>
                    
                </Grid2>
                <Grid2 xs={6}>
                    <Typography variant="body1" color="black" sx={{m:1,
                        fontSize: "clamp(0.8em, 1.3vw, 3em)",
                    }}>
                        Doctor
                    </Typography>
                    <TextField label={"Dr. Pritis Barua"} margin="normal" variant="outlined"
                        name="doctor"
                        select
                        value={Datos.doctor}
                        onChange={handleInputChange}
                        sx={{borderRadius:1, margin:1, width:{
                            xs: '54vw',
                            sm: '26vw',
                            md: '26vw'
                        }}}
                        slotProps={{
                            inputLabel: {
                                sx: {fontSize: 'clamp(0.7em, 2.5vw, 1.2em)', color:'gray'},
                            },
                    }} >
                        {Doctores.map((doctors) => (
                            <MenuItem key={doctors.name} value={doctors.name}>
                                Dr. {doctors.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid2>
                <Grid2 xs={12}>
                    <Typography variant="body1" color="black" sx={{m:1,
                        fontSize: "clamp(0.8em, 1.3vw, 3em)",
                    }}>
                        Message
                    </Typography>
                    <TextField label={"Introduce a message..."} margin="normal" variant="outlined"
                        name="message"
                        fullWidth
                        multiline
                        value={Datos.message}
                        onChange={handleInputChange}
                        sx={{borderRadius:1, margin:1, width:"54.2vw"}}
                        slotProps={{
                            inputLabel: {
                                sx: {fontSize: 'clamp(0.7em, 2.5vw, 1.2em)', color:'gray'},
                            },
                    }} />
                </Grid2>
                <Grid2 xs={12} sx={{display:"felx"}}>
                    <Typography variant="body1" color="black" sx={{m:1,
                        fontSize: "clamp(0.55em, 1.3vw, 3em)",
                    }}>
                        <Checkbox/>
                        You agree to our friendly privacy policy
                    </Typography>
                    <Button variant="contained" size="large" onClick={sendAppointment} sx={{width:"54vw",
                        fontSize:{
                            xs: '0.7em',
                            sm: '1em',
                            md: '1.05em'
                        }
                    }}>
                        Confirm Apppoinment
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Appointment;