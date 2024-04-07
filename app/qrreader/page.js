'use client'
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import QrReader from 'react-qr-scanner';
import Header from '@/components/Header';
import QRCode from 'qrcode.react';
import Footer from '@/components/Footer';

const Page = () => {
    const [scannedData, setScannedData] = useState(null);
    const [scanning, setScanning] = useState(true);
    const [cameraAvailable, setCameraAvailable] = useState(false);
    const [deviceId, setDeviceId] = useState(null); // To store the device ID of the rear camera

    useEffect(() => {
        checkCameraPermission();
    }, []);

    const checkCameraPermission = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            const rearCamera = videoDevices.find(device => device.label.toLowerCase().includes('back') || device.label.toLowerCase().includes('rear'));
            if (rearCamera) {
                setDeviceId(rearCamera.deviceId);
                setCameraAvailable(true);
            } else {
                console.error('Rear camera not found');
                setCameraAvailable(false);
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
            setCameraAvailable(false);
        }
    };

    const handleScan = (data) => {
        if (data) {
            console.log(data);
            setScannedData(data);
            setScanning(false);
        }
    };

    const handleError = (error) => {
        console.error("Error on loading camera", error);
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
                                facingMode="environment"
                                deviceId={deviceId} // Set the device ID of the rear camera
                                style={{ width: '400px', height: '400px' }}
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
