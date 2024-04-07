'use client'
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import QrReader from 'react-qr-scanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Page = () => {
    const [scannedData, setScannedData] = useState(null);
    const [scanning, setScanning] = useState(true);
    const [cameraAvailable, setCameraAvailable] = useState(false);

    useEffect(() => {
        checkCameraPermission();
    }, []);

    const checkCameraPermission = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            stream.getTracks().forEach(track => track.stop());
            setCameraAvailable(true);
        } catch (error) {
            console.error('Camera permission denied:', error);
            setCameraAvailable(false);
        }
    };

    const handleScan = (data) => {
        if (data) {
            console.log(data)
            setScannedData(data);
            setScanning(false);
        }
    };

    const handleError = (error) => {
        console.error("error on load camera", error);
    };

    return (
        <>
            <Header />
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{}}>
                <Grid item lg={6} md={4} sm={7} xs={11} sx={{ mt: "60px", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ height: "100%", width: "fit-content", height: { lg: "400px", md: "200px", sm: "200px", xs: "200px" } }}>
                        {cameraAvailable && scanning && (
                            <QrReader
                                onScan={handleScan}
                                onError={handleError}
                                showViewFinder={true}
                                facingMode={"environment"}
                                
                                style={{ width: '100%', height: '100%' }}
                            />
                        )}
                        {/* Display scanned QR code image and data if available */}
                        {!scanning && (
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="subtitle1" align="center">
                                    Scanned Data:
                                </Typography>
                                {/* Render the QR code image */}
                                <QRCode value={scannedData} />
                            </Box>
                        )}
                        {!cameraAvailable && (
                            <Typography variant="subtitle1" align="center">
                                Camera permission denied. Please grant camera access to use the QR scanner.
                            </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Page;