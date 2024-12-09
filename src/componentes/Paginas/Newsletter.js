import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Box, Button, TextField, Typography } from "@mui/material";

function Newsletter(){

    const user = useSelector((state) => state.user)
    const [Datos,setDatos] = useState({
        firstName: "",
        email: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatos((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    };

    const sendSubscribe = async () => {
        try {
            const response = await axios.post(
              'https://repoapi.ordenaris.com/api/newsletter',
              {
                nombre: Datos.firstName,
                correo: Datos.email,
              },
              {
                headers: {
                  ordProyecto: 'a6093c23ae10457c8t0b8b298fc8b500',
                  ordCandidato: '52d5c5318fa04401ae0e550b9e7f506b'
                },
              }
            );
            console.log('Respuesta:', response.data.mensaje);
        } catch (error) {
            console.error('Error en la petición:', error);
        }
    };

    return(
        <Box sx={{display:"flex", justifyContent:"center", padding:"4vh"}}>
            <Box sx={{justifyContent:"center", padding:"1vh", backgroundColor:"#216583", width:"85vw", borderRadius:4}}>
                <Box sx={{display:"flex", justifyContent:"center", color:"white", padding:"5vh 0 1.5vh 0"}}>
                    <Typography variant="h4" sx={{fontSize: 'clamp(1.1em, 2.5vw, 2.5em)', fontWeight:"bold"}}>
                        Subscribe to our newsletter
                    </Typography>
                </Box>
                <Box sx={{display:"flex", justifyContent:"center", padding:"1.5vh 0 5vh 0"}}>
                    <TextField label={"First name"} margin="normal" size="small"
                        name="firstName"
                        value={Datos.firstName}
                        onChange={handleInputChange}
                        sx={{backgroundColor:"#6493A8", borderRadius:1, margin:1}}
                        slotProps={{
                            inputLabel: {
                                sx: {fontSize: 'clamp(0.7em, 2.5vw, 1.2em)', color:'white'},
                            },
                        }} />
                    <TextField label={"Email address"} margin="normal" size="small"
                        name="email"
                        value={Datos.email}
                        onChange={handleInputChange}
                        sx={{backgroundColor:"#6493A8", borderRadius:1, margin:1}}
                        slotProps={{
                            inputLabel: {
                                sx: {fontSize: 'clamp(0.7em, 2.5vw, 1.2em)', color:'white'},
                            },
                        }} />
                    <Button variant="contained" size="small" sx={{backgroundColor:"white", color:"black" ,marginLeft:"2vw", m:1,
                        fontSize:{
                                xs: '0.55em',
                                sm: '1em',
                                md: '1.05em'
                            }
                        }} onClick={sendSubscribe}>
                            Suscribe Now
                        </Button>
                </Box>
            </Box>
        </Box>
        
    )

}

export default Newsletter;