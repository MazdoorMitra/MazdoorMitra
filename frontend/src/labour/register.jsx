
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Grid, Typography, Paper, Container } from '@mui/material';
import swal from 'sweetalert'; // Import swal from sweetalert
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Register() {
    const [authCode, setAuthCode] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [jobType, setJobType] = useState('');
    const [isAuthCodeMode, setIsAuthCodeMode] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAuthCodeChange = (event) => {
        setAuthCode(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    // const handleAuthCodeSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/labourers/login', {
    //             labourerId: authCode
    //         });
    //         console.log(response.data);
    //         if (response.data.message === 'Login successful') {
    //             swal("Success!", "Authentication successful!", "success")
    //                 .then(() => {
    //                     // Assuming response.data includes contractorId
    //                     const contractorId = response.data.contractorId;
    //                     navigate(`/labour/dashboard/${contractorId}`); // Navigate to the dashboard with contractorId
    //                 });
    //         } else {
    //             swal("Error", "Labourer not found", "error");
    //         }
    //     } catch (error) {
    //         console.error('Error verifying authentication code:', error);
    //         swal("Error", "Server error. Please try again later.", "error");
    //     }
    //     setAuthCode('');
    // };
    const handleAuthCodeSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/labourers/login', {
                labourerId: authCode
            });
    
            console.log(response.data);  // Log the entire response to check its structure
    
            if (response.data.message === 'Login successful' && response.data.labourer) {
                const labourerId = response.data.labourer._id;  // Extract the labourerId from the response
    
                swal("Success!", "Authentication successful!", "success")
                    .then(() => {
                        navigate(`/labour/dashboard/${labourerId}`);  // Navigate to the dashboard with the labourerId
                    });
            } else {
                swal("Error", "Labourer not found", "error");
            }
        } catch (error) {
            console.error('Error verifying authentication code:', error);
            swal("Error", "Server error. Please try again later.", "error");
        }
        setAuthCode('');
    };
    

    const handleMobileNumberSubmit = async (event) => {
        event.preventDefault();
        try {
            // Handle mobile number submission logic
            console.log('Mobile number submitted:', mobileNumber);
            setMobileNumber('');
        } catch (error) {
            console.error('Error submitting mobile number:', error);
        }
    };

    const handleNewRegisterSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/labourers/register', {
                name,
                mobileNumber,
                jobType,
                password
            });
            console.log(response.data);
            swal("Success!", "Labour registered successfully!", "success")
                .then(() => {
                    // Extract contractorId from response or use a predefined value
                    const contractorId = response.data.contractorId; // Ensure your backend response includes this field
                    navigate(`/labour/dashboard/${contractorId}`); // Navigate to dashboard with contractorId
                });
            setName('');
            setMobileNumber('');
            setPassword('');
            setJobType('');
        } catch (error) {
            console.error('Error registering:', error);
            swal("Error", "Error registering labourer. Please try again later.", "error");
        }
    };

    const handleNewRegisterClick = () => {
        setIsAuthCodeMode(false);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h5" gutterBottom>
                    Labour Register
                </Typography>
                <Grid container spacing={2}>
                    {isAuthCodeMode ? (
                        <>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Authentication Code"
                                    variant="outlined"
                                    value={authCode}
                                    onChange={handleAuthCodeChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAuthCodeSubmit}
                                >
                                    Submit with Authentication Code
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2" gutterBottom>
                                    OR
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleNewRegisterClick}
                                >
                                    New Register
                                </Button>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mobile Number"
                                    variant="outlined"
                                    value={mobileNumber}
                                    onChange={handleMobileNumberChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Job Type"
                                    variant="outlined"
                                    value={jobType}
                                    onChange={handleJobTypeChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNewRegisterSubmit}
                                >
                                    Register
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Paper>
        </Container>
    );
}

export default Register;
