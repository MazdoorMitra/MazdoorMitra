import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Grid, Typography, Paper, Container } from '@mui/material';
import swal from "sweetalert"; // Import swal from sweetalert

function Register() {
    const [authCode, setAuthCode] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [jobType, setJobType] = useState('');
    const [isAuthCodeMode, setIsAuthCodeMode] = useState(true);

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

    const handleAuthCodeSubmit = (event) => {
        event.preventDefault();
        console.log('Authentication code submitted:', authCode);
        setAuthCode('');
    };

    const handleMobileNumberSubmit = (event) => {
        event.preventDefault();
        console.log('Mobile number submitted:', mobileNumber);
        setMobileNumber('');
    };

    const handleNewRegisterSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/labour/register', {
                name,
                mobileNumber,
                jobType,
                password
            });
            console.log(response.data);
            // Display success message
            swal("Success!", "Labour registered successfully!", "success")
                .then(() => {
                    // Redirect to the /labour/overview page
                    window.location.href = '/labour/overview';
                });
            setName('');
            setMobileNumber('');
            setPassword('');
            setJobType('');
        } catch (error) {
            console.error('Error registering:', error);
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

