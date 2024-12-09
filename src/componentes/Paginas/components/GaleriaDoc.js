import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPage} from "../../../redux/pageSlice";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Box, Avatar, Button, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


function Carrete({doctores}){

    const selectedPage = useSelector((state) => state.page.numPag)
    const dispatch = useDispatch()
    const [Indice, setIndice] = useState(0)
    const isSmallScreen = useMediaQuery("(max-width:750px)");
    const visibleCount = isSmallScreen ? 1 : 4;

    const siguiente = () => {
        setIndice((prev) => (prev + 1) % doctores.length);
    }

    const anterior = () => {
        setIndice((prev) => (prev - 1 + doctores.length) % doctores.length);
    }

    const getVisibleDoctores = () => {
        const endIndex = Indice + visibleCount;
        if (endIndex <= doctores.length) {
          return doctores.slice(Indice, endIndex);
        } else {
          return [
            ...doctores.slice(Indice),
            ...doctores.slice(0, endIndex - doctores.length),
          ];
        }
      };

    if (!doctores || doctores.length === 0) {
        return <Typography variant="h6">No hay doctores para mostrar.</Typography>;
      }

    const handleSelectMenu = (event) =>{
        dispatch(addPage(event.currentTarget.id))    
    }

    return(
        <Box
            sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "1vw", justifyContent:"center",

            }}>
            <Box
                sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "2vw",
            }}>
                <Button variant="rounded" onClick={anterior} sx={{backgroundColor:"#e8e8e8", width:"1vw"}}>
                    <ArrowBackIosRoundedIcon sx={{width:"2vw"}}/>
                </Button>
                <Box
                    sx={{display: "flex", gap: "1vw", overflow: "hidden", justifyContent: "center", textAlign: "center",

                }}>
                    {getVisibleDoctores().map((doctor, idx) => (
                        <Box
                            key={idx}
                            sx={{width: "30vh", textAlign: "center",

                        }}>
                            <Avatar
                                src={doctor.photo}
                                alt={doctor.name}
                                sx={{width: "10vw", height: "10vw", margin: "0 auto", border: "2px solid #ccc",
                            }}/>
                            <Typography variant="h6" sx={{ marginTop: 1 }}>
                                {doctor.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {doctor.specialty}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {doctor.university}
                            </Typography>
                            <Button id={4} variant="outlined" onClick={handleSelectMenu} sx={{width:"10vw", marginTop:"3vh"}}>
                                Appointment
                            </Button>
                        </Box>
                    ))}
                </Box>
                <Button variant="rounded" onClick={siguiente} sx={{backgroundColor:"#e8e8e8", width:"1vw"}}>
                    <ArrowForwardIosRoundedIcon sx={{width:"2vw"}}/>
                </Button>
            </Box>
        </Box>
    )

}

export default Carrete;