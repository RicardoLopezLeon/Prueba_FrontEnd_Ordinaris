import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPage } from "../../redux/pageSlice";
import Logo from "./LogoDentics.png"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function BarraMenu(){

    const selectedPage = useSelector((state) => state.page.numPag)
    const dispatch = useDispatch()
    const pages = ['Home', 'Service', 'About us', 'Register'];

    const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    dispatch(addPage(event.currentTarget.id))
    setAnchorElNav(null);
  };

  const handleSelectMenu = (event) =>{
    dispatch(addPage(event.currentTarget.id))    
  }

    return(
        <AppBar position="static" color="white">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                        {pages.map((page, index) => (
                            <MenuItem key={index} >
                            <Typography sx={{ textAlign: 'center' }}>
                                <Button id={index} onClick={handleCloseNavMenu}>{page}</Button>
                            </Typography>
                            </MenuItem>
                        ))}
                        <MenuItem key={4} >
                            <Typography sx={{ textAlign: 'center' }}>
                                <Button id={4} onClick={handleCloseNavMenu}>Appointment</Button>
                            </Typography>
                        </MenuItem>
                        </Menu>
                    </Box>
                    <Box justifyContent={"center"}>
                        <img src={Logo} display="flex"/>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end'} }}>
                        {pages.map((page, index) => (
                        <Button
                            key={page}
                            id={index}
                            onClick={handleSelectMenu}
                            sx={{ my: 2, 
                                color: parseInt(selectedPage,10) === index ? 'blue' : 'black', 
                                display: 'block', m:1 }}
                        >
                            {page}
                        </Button>
                        ))}
                        <Button id={4}
                                variant="contained"
                                sx={{ my: 2, marginLeft:"3vw", 
                                display: 'block' }}
                                onClick={handleSelectMenu}>
                            Appointment
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default BarraMenu 