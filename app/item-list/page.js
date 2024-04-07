'use client'
import { Badge, Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import PlaceIcon from '@mui/icons-material/Place';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import burger from "../../assests/burger.webp"
import Image from 'next/image';
import dhosa from '../../assests/DHOSA.jpeg'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useRouter } from 'next/navigation';

const ItemList = () => {
    const router = useRouter()
    return (
        <Container disableGutters maxWidth={'xl'}>
            <Grid container sx={{ bgcolor: "#efebe9" }}>
                <Grid item xs={12} sx={{}}>
                    <Paper sx={{ p: "20px" }}>
                        <Typography variant='h6' sx={{ textTransform: "capitalize", fontWeight: 600 }}>
                            Baba Vishwanath
                        </Typography>
                        <Typography sx={{ textTransform: "capitalize", fontSize: "14px" }}>Sweet Home</Typography>
                        <Typography sx={{ textTransform: "capitalize", fontSize: "11px", textTransform: "uppercase", color: "gray" }}>84W+3dfd nagar,varanasi,uttar pradesh</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ textTransform: "capitalize", fontSize: "14px", display: "flex", alignItems: "center" }}><WatchLaterIcon sx={{ fontSize: "16px", mr: "3px" }} />15 min | 9313.54 km away</Typography>
                            <Box>
                                <IconButton sx={{ bgcolor: "#8bc34a", p: "3px", mr: "10px" }}>
                                    <WifiCalling3Icon sx={{ color: "white", fontSize: "15px" }} />
                                </IconButton>
                                <IconButton sx={{ bgcolor: "#8bc34a", p: "3px" }}>
                                    <PlaceIcon sx={{ color: "white", fontSize: "16px" }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} sx={{ mt: "10px" }}>
                    <Paper sx={{ p: "20px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography align='center' sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}><MenuBookIcon sx={{ fontSize: "40px", color: "black", mr: "5px", mt: "-3px" }} /> Menu</Typography>
                        </Box>
                        <Box sx={{ display: "flex", overflow: "auto", mt: "20px" }}>
                            {
                                new Array(5).fill(1).map((ele, i) => (
                                    <Box key={i} sx={{ display: "flex", mr: "15px", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <Box sx={{ height: "50px", position: "relative", overflow: "hidden", width: "50px", borderRadius: "50px" }}>
                                            <Image src={burger} alt='burger' style={{ height: "50px", position: "absolute", width: "auto" }} />
                                        </Box>
                                        <Box sx={{ border: "1px solid #8bc34a", width: "fit-content", p: "3px 5px", mt: "5px", borderRadius: "25px" }}>
                                            <Typography sx={{ textTransform: "capitalize", fontSize: "13px" }}>Rasmalai</Typography>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{ mt: "10px" }}>
                    <Paper sx={{ bgcolor: "#8bc34a", p: "10px 0px" }}>
                        <Typography align='center' sx={{ fontWeight: 600, fontSize: "16px", color: "white" }}>Popular Item</Typography>
                    </Paper>
                </Grid>
                {
                    new Array(10).fill(1).map((ele, i) => (
                        <Grid item xs={12} key={i}>
                            <Paper sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #8bc34a", boxSizing: "border-box", width: "100%", p: "15px 30px 20px 10px" }}>

                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ height: "80px", position: "relative", width: "80px", borderRadius: "10px", overflow: "hidden" }}>
                                        <Box sx={{ position: "absolute", top: "0px", left: "0px", zIndex: 9, height: "17px", bgcolor: "#8bc34a", width: "60px" }}>
                                            <Typography align='center' sx={{ color: "white", fontSize: "10px", mt: "1px", fontWeight: 800 }}>33 %OFF</Typography>
                                        </Box>
                                        <Image src={dhosa} alt='burger' style={{ position: "absolute", width: "100%", height: "100%" }} />
                                    </Box>
                                    <Box sx={{ ml: "10px" }}>
                                        <Typography sx={{ fontSize: "14px" }}>Dosa</Typography>
                                        <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "gray" }}>Category : Rasmalai</Typography>
                                        <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "gray" }}><span style={{ color: "#8bc34a", marginRight: "10px" }}>₹20</span> ₹<span style={{ textDecoration: "line-through" }}>30</span></Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ height: "80px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "fit-content" }}>
                                    <Box>
                                        <StopCircleOutlinedIcon sx={{ color: "#8bc34a" }} />
                                    </Box>
                                    <Box sx={{ border: "1px solid #8bc34a", display: "flex" }}>
                                        <Box sx={{ width: "22px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <DeleteIcon sx={{ color: "#8bc34a", fontSize: "20px" }} />
                                        </Box>
                                        <Box sx={{ bgcolor: "#8bc34a", width: "22px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Typography align='center' sx={{ color: "white", fontSize: "14px" }}>1</Typography>
                                        </Box>
                                        <Box sx={{ width: "22px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <AddIcon sx={{ color: "#8bc34a", fontSize: "20px" }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
            <Paper sx={{ position: "fixed", border: "1px solid #e0e0e0", overflow: "hidden", cursor: "pointer", p: "5px", height: "50px", borderRadius: "50px", width: "50px", bottom: "20px", right: "20px" }} onClick={() => { router.push('/cart-page') }}>
                <Box sx={{ height: "100%", width: "100%", bgcolor: "#424242", display: "flex", alignItems: "center", borderRadius: "50px", justifyContent: "center", }}>
                    <Badge badgeContent={4} sx={{ color: "white" }}>
                        <ShoppingBagIcon sx={{ color: "white" }} />
                    </Badge>
                </Box>
            </Paper>
        </Container>
    )
}

export default ItemList