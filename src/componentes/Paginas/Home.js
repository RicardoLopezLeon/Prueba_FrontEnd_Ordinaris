import React from "react";

import Persona from "./Imagenes/PersonaHome.png"
import { Box, Button, Typography } from "@mui/material";

function Home(){
    return(
        <Box sx={{display:"flex", padding:"1vh", justifyContent:"space-around", height:"100%"}}>
            <Box sx={{ width:"50%", marginTop:"4vh" }}>
                <Box>
                    <Typography variant="body1" color="black" sx={{m:1,
                        fontSize: "clamp(1.4em, 4vw, 5em)",
                        fontWeight: "bold"
                    }}>
                        We Provide High Quality <span style={{color:"#FFD700"}}>Dental</span> Services
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body1" color="gray" sx={{m:1,
                        fontSize: "clamp(0.65em, 1.4vw, 3em)",
                    }}>
                        Appropriately embrace transparent materials via turnkey nice markets
                    </Typography>
                </Box>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained" size="large" sx={{m:{
                        xs: '0.8vh',
                        sm: '2vh',
                        md: '4vh'}, fontSize:{
                        xs: '0.55em',
                        sm: '0.8em',
                        md: '1.05em'
                    }}} >Get Started</Button>
                    <Button variant="outlined" size="large" sx={{m:{
                        xs: '0.8vh',
                        sm: '2vh',
                        md: '4vh'}, color:"black", borderColor:"black", fontSize:{
                        xs: '0.55em',
                        sm: '0.8em',
                        md: '1.05em'}}} >Learn More</Button>            
                </Box>
            </Box>
            <Box sx={{display:"flex", width:"50%", justifyContent:"center"}}>
                <img src={Persona} width="90%" alt="Placeholder"></img>
            </Box>
        </Box>
    )
}

export default Home;