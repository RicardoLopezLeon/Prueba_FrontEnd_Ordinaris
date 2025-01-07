import { Box, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React from "react";

import LogoFoot from "./LogoDenticsFooter.png"

function Footer(){

    const links = ['Facebook', 'Career', 'Twitter', 'Support', 'Instagram', 'Privacy policy']

    return(
        <Box sx={{backgroundColor:"#516EFF"}}>
            <Grid2 container spacing={0} columns={8} sx={{display:"flex",padding:"1.6vw", justifyContent:"center"}}>
                <Grid2 size={2} sx={{
                    '--Grid-borderWidth': '1px',
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderColor: "white",
                    paddingRight:1,
                    padding:"2vw",
                }}>
                    <img src={LogoFoot} width="50%"/>
                    <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.35em, 1.3vw, 3em)"
                    }}>
                        Dentics is a well-known name in dental and oral care in New York. The journey of this intitution started in 1990
                    </Typography>
                </Grid2>
                <Grid2 size={2} sx={{
                    '--Grid-borderWidth': '1px',
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderColor: "white",
                    padding:"3vw",
                }}>
                    <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.3em, 1.1vw, 3em)",
                    }}>
                        We are welcoming you
                    </Typography>
                    <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.5em, 1.8vw, 4em)",
                        fontWeight: "bold"
                    }}>
                        Want to visit our clinic?
                    </Typography>
                    <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.35em, 1.3vw, 3em)",
                    }}>
                        Saturday - Thursday <br/> 10 am - 9 pm
                    </Typography>
                </Grid2>
                <Grid2 size={2} sx={{
                    '--Grid-borderWidth': '1px',
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderColor: "white",
                    padding:"3vw",
                }}>
                <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.25em, 0.8vw, 2.5em)",
                        whiteSpace: "pre",
                    }}>
                        <Box sx={{display:"flex", flexDirection:"column", gap:"4.2vw"}}>
                            Important link
                            <Box sx={{display:"flex", flexDirection:"column", gap:"2.2vw"}}>
                                <Box sx={{display:"flex", flexDirection:"row", gap:"4.5vw;"}}>
                                    <span>Facebook</span>
                                    <span>Carrer</span>
                                </Box>
                                <Box sx={{display:"flex", flexDirection:"row", gap:"5.7vw;"}}>
                                    <span>Twitter</span>
                                    <span>Support</span>
                                </Box>
                                <Box sx={{display:"flex", flexDirection:"row", gap:"4.2vw;"}}>
                                    <span>Instagram</span>
                                    <span> Privacy policy</span>
                                </Box>
                            </Box>
                        </Box>
                    </Typography>
                </Grid2>
                <Grid2 size={2} sx={{
                    padding:"4vw",
                }}>
                <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.25em, 0.8vw, 2.5em)",
                        paddingBottom:"1vh"
                    }}>
                        Say hello to us
                    </Typography>
                    <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.25em, 0.8vw, 2.5em)",
                        paddingBottom:"1vh"
                    }}>
                        hello@reallygreatsite.com
                    </Typography>
                    <Typography variant="body1" color="white" sx={{m:'1vw',
                        fontSize: "clamp(0.25em, 0.8vw, 2.5em)",
                    }}>
                        Address <br/> 123 Anywhere St., Any City, NY 39200
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Footer;