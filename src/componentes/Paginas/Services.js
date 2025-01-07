import React from "react";

import { Box, Card, Grid2, Typography } from "@mui/material";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

import Dentista from "./Imagenes/DentistService.png"

function Services(){
    return(
        <Box sx={{display:"flex", flexDirection:"column", paddingTop:"4vh"}}>
            <Grid2 columns={2} sx={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#516EFF", p:"4vw", width:"100%"}}>
                <Grid2 size={1} sx={{justifyContent:"center",width:"80%"}}>
                    <Typography variant="body1" color="white" sx={{
                        fontSize: "clamp(1.4em, 3vw, 5em)",
                        fontWeight: "bold"
                    }}>
                        How to get our service?
                    </Typography>
                    <Typography variant="body1" color="white" sx={{
                        fontSize: "clamp(0.6em, 1vw, 2.5em)",
                        fontWeight: "bold"
                    }}>
                        Just follow theese simple steps
                    </Typography>
                </Grid2>
                <Grid2 size={1} sx={{display:"flex", justifyContent:"space-evenly", alignItems:"center", width:"100%"}}>
                    <Card sx={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center",width:"clamp(5em,10em,12em)", height:"clamp(5em,10em,12em)", borderRadius:4}}>
                        <CallOutlinedIcon fontSize="large"/>
                        <Typography variant="body1" color="black" sx={{textAlign:"center",
                            fontSize: "clamp(0.6em, 1vw, 2.5em)",
                            paddingTop:"1vw"
                        }}>
                            Call for appointment
                        </Typography>
                    </Card>
                    <Card sx={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center",width:"10em", height:"10em", borderRadius:4}}>
                        <EventAvailableOutlinedIcon fontSize="large"/>
                        <Typography variant="body1" color="black" sx={{textAlign:"center",
                            fontSize: "clamp(0.6em, 1vw, 2.5em)",
                            paddingTop:"1vw"
                        }}>
                            Get a Date & Serial
                        </Typography>
                    </Card>
                    <Card sx={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center",width:"10em", height:"10em", borderRadius:4}}>
                        <AddBoxOutlinedIcon fontSize="large"/>
                        <Typography variant="body1" color="black" sx={{textAlign:"center",
                            fontSize: "clamp(0.6em, 1vw, 2.5em)",
                            paddingTop:"1vw"
                        }}>
                            Consult Yuor dentist
                        </Typography>
                    </Card>
                </Grid2>
            </Grid2>
            <Grid2 columns={2} sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}>
                <Grid2 size={1} sx={{justifyContent:"center",width:"80%"}}>
                    <Card sx={{borderBottomRightRadius:"5em", display:"flex",flexDirection:"column" , alignItems:"center",
                        backgroundColor:"#F8FAFC", paddingTop:"3vw"
                        }}>
                        <Box sx={{borderBottom:1, borderColor:"#516EFF",
                            paddingRight:"5vw", height:"11.5em", paddingLeft:"3vw",
                            paddingBottom:"2vw"
                        }}>
                            <Typography variant="body1" color="black" sx={{
                                fontSize: "clamp(1.4em, 3vw, 5em)",
                                fontWeight: "bold"
                            }}>
                                Always <span style={{color:"#FFD700"}}>Lough</span> Whenever Its Posible
                            </Typography>
                        </Box>
                        <img src={Dentista} width="80%" alt="Placeholder"></img>
                    </Card>
                </Grid2>
                <Grid2 size={1} sx={{display:"flex",flexDirection:"column", justifyContent:"center",width:"100%"}}>
                    <Box sx={{borderBottom:1, borderColor:"grey.500",
                        paddingLeft:"3vw", paddingRight:"7vw", height:"10.2em",
                        paddingBottom:"2vw", paddingTop:"3vw"
                    }}>
                        <Typography variant="body1" color="grey" sx={{
                            fontSize: "clamp(0.8em, 1.4vw, 3em)"
                        }}>
                            We also offer treatments that improve the appearance of you smile giving you the confidence boost you deserve.
                            The process or our treatment below.
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", paddingLeft:"3vw", paddingRight:"3vw"}}>
                        <Typography variant="body1" color="black" sx={{
                            fontSize: "clamp(1.1em, 2vw, 4em)",
                            fontWeight: "bold", paddingBottom:"3vw"
                        }}>
                            WHAT WE PROVIDE
                        </Typography>
                        <Typography variant="body1" color="black" sx={{
                            fontSize: "clamp(0.8em, 1.78vw, 3em)",
                            fontWeight: "bold"
                        }}>
                            <Box sx={{display:"flex", flexDirection:"column", gap:"2.2vw"}}>
                                <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap:"14vw;"}}>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Check ups</span>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Emergencies</span>
                                </Box>
                                <Box sx={{display:"flex", flexDirection:"row", gap:"7vw;"}}>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Cosmetic dentistry</span>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Dental implants</span>
                                </Box>
                                <Box sx={{display:"flex", flexDirection:"row", gap:"12vw;"}}>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Orthodonties</span>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Chiuldren's dentistry</span>
                                </Box>
                                <Box sx={{display:"flex", flexDirection:"row", gap:"6vw;"}}>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Preventative checks</span>
                                    <span><GppGoodOutlinedIcon fontSize="medium"/> Telephone consultations</span>
                                </Box>
                            </Box>
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Services;