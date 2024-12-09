import { Box, Card, Typography } from "@mui/material";
import React,{useEffect, useState} from "react";
import axios from "axios";
import Carrete from "./components/GaleriaDoc";

import Personas from "./Imagenes/PersonasAbout.png"

function AboutUs(){

    const [Doctores,setDoctores] = useState([])

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

    return(
        <>
            <Box sx={{display:"flex", padding:"1vh", justifyContent:"space-evenly"}}>
                <Box sx={{width:"45%", justifyContent:"center", display:"flex", m:"1vw"}}>
                    <img src={Personas} width="80%" alt="Placeholder"></img>
                </Box>
                <Box sx={{width:"55%", justifyContent:"center", display:"flex"}}>
                <Card sx={{width:"70%", height:"87%", m:"1vw", borderRadius:5, backgroundColor:"#fcfcfc"}}>
                    <Typography variant="body1" color="black" sx={{m:"1.5vw",
                            fontSize: "clamp(0.8em, 1.5vw, 3em)",
                            fontWeight: "bold"
                        }}>
                            Our history
                    </Typography>
                    <Typography variant="body1" color="black" sx={{m:"1.5vw",
                            fontSize: "clamp(0.5em, 1.1vw, 3em)",
                        }}>
                            Dentics is a well-know name in dental and oral care in New York. The journey of the institution started un 1990
                            under the hands of Dr. Jonathon Doe, Gold Medalist of Harvart University, Dentics dental center has been leading
                            the way in dental treatment in USA for more than 30 years in keeping wuth the evolution of time and tje modernization
                            of the area
                    </Typography>
                </Card>
                </Box>
            </Box>
            <Box sx={{display:"flex", padding:"10vh", justifyContent:"space-evenly"}}>
            <Carrete doctores={Doctores} />
            </Box>
        </>
    )

}

export default AboutUs;