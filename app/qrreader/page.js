'use client'
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Html5Qrcode} from 'html5-qrcode';
// import Html5Qrcode from 'html5-qrcode';

const Page = () => {
    const [scannedData, setScannedData] = useState(null);
    const [scanning, setScanning] = useState(true);
    const [cameraAvailable, setCameraAvailable] = useState(false);
    const [deviceId, setDeviceId] = useState(null); // To store the device ID of the rear camera

    useEffect(() => {
        checkCameraPermission();
        console.log("Library Logs :",Html5Qrcode);
    }, []);

    const checkCameraPermission = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            const rearCamera = videoDevices.find(device => device.label.toLowerCase().includes('back') || device.label.toLowerCase().includes('rear'));
            if (rearCamera) {
                console.log('Rear Camera found:', rearCamera);
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

    useEffect(() => {
        if (cameraAvailable) {
            startQrCodeScanner();
        }
        return () => {
            // Clean up the scanner when component unmounts
            stopQrCodeScanner();
        };
    }, [cameraAvailable]);

    const startQrCodeScanner = () => {
        const qrCodeScanner = new Html5Qrcode('qr-code-reader');
        qrCodeScanner.start(
            deviceId, // Device ID of the rear camera
            {
                fps: 10, // Frames per second
                qrbox: 250 // Size of QR scanning box
            },
            (decodedData) => {
                console.log('Scanned data:', decodedData);
                setScannedData(decodedData);
                setScanning(false);
                stopQrCodeScanner();
            },
            (error) => {
                console.error('QR code scanning error:', error);
            }
        );
    };

    const stopQrCodeScanner = () => {
      Html5Qrcode.getCameras()
            .then(cameras => {
                if (cameras && cameras.length > 0) {
                    cameras.forEach(camera => Html5Qrcode.stop(camera.deviceId));
                }
            })
            .catch(error => {
                console.error('Error stopping QR code scanner:', error);
            });
    };

    return (
        <>
            <Header />
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{}}>
                <Grid item lg={6} md={4} sm={7} xs={11} sx={{ mt: "60px", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box id="qr-code-reader" sx={{ height: "100%", width: "fit-content", height: { lg: "400px", md: "200px", sm: "200px", xs: "200px" } }}>
                        {cameraAvailable && scanning && (
                            <Typography variant="subtitle1" align="center">
                                Scanning QR code...
                            </Typography>
                        )}
                        {!scanning && (
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="subtitle1" align="center">
                                    Scanned Data:
                                </Typography>
                                {/* Render the scanned data */}
                                <Typography>{scannedData}</Typography>
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
