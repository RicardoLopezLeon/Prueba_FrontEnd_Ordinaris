import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import Home from "../Paginas/Home";
import Newsletter from "../Paginas/Newsletter";
import Appointment from "../Paginas/Appointment";
import AboutUs from "../Paginas/AboutUs";

function Dashboard(){

    const page = useSelector((state) => state.page)
    const paginas = [<Home/>,<Home/>,<AboutUs/>,<Newsletter/>,<Appointment/>]

    return(
        <Box>
            {paginas[page.numPag]}
        </Box>
    )

}

export default Dashboard