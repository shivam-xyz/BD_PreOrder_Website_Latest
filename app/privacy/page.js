'use client'
import { Box, Button, Container, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';


const page = () => {
    const router = useRouter()
    return (
        <>
            <Container disableGutters maxWidth='xl'>
                <Grid container justifyContent={'center'} >

                <Grid item xs={12} sx={{ height: "50px",position:"fixed",top:0,width:"100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center", color: "white", height: "100%", bgcolor: "#8bc34a" }}>
                            <IconButton sx={{ mr: "20px" }} onClick={()=>{router.back()}}>
                                <KeyboardBackspaceIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Typography variant='h6' sx={{ fontSize: "17px" }}>Privacy Policy</Typography>
                        </Box>
                    </Grid>
                    <Grid container justifyContent={'center'} alignItems={'center'} sx={{mb:"15px",mt:"60px",p:"15px"}}>
                        <Grid item xs={12} sx={{}}>
                            <Typography><span style={{ borderBottom: "3px solid #424242", paddingBottom: "2px",fontWeight:"bold"}}>SECTION 1</span> - WHAT DO WE DO WITH YOUR INFORMATION?</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px"  }}>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address, mobile number and email address.
                                When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                                Email and WhatsApp marketing (if applicable): With your permission, we may send you emails and WhatsApp Messages about our store, new products and other updates.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",mt:"10px" }}>SECTION 2 - CONSENT</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>How do you get my consent?</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px"  }}>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
                                If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px"  }}>How do I withdraw my consent?</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px"  }}>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us on WhatsApp at 9336969302 or mailing us at info@badidukkan.com.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>SECTION 3 - DISCLOSURE</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px",fontWeight:"bold", color: "black",mt:"10px" }}>SECTION 4 - PAYMENT</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only
                                used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black", }}>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
                                PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
                                For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>SECTION 5 - THIRD-PARTY SERVICES:</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black", }}>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.
                                For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black", }}>In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your
                                information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
                                Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>Links:</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of
                                other sites and encourage you to read their privacy statements.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>SECTION 6-SECURITY:</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not
                                inappropriately lost, misused, accessed, disclosed, altered or destroyed.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>SECTION 7 - COOKIES</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>We use cookies to maintain the session of your/ user. It is not used to personally identify you on other websites.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>SECTION 8 - AGE OF CONSENT</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the
                                age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents
                                to use this site.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>SECTION 9 - CHANGES TO THIS PRIVACY POLICY:</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take
                                effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it
                                has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we
                                use and/or disclose it.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black", }}>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may
                                continue to sell products to you.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "15px", color: "black",fontWeight:"bold",mt:"10px" }}>QUESTIONS AND CONTACT INFORMATION</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or
                                simply want more information contact our Privacy Compliance Officer at WhatsApp at 9336969302 or mailing us at
                                info@badidukkan.com.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black",mt:"10px" }}>[Re: Privacy Compliance Officer]</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black", }}>Name- Abhishek Kasaudhan</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: "black", }}>Email:<a href=''>abhishek@badidukkan.com</a> </Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default page