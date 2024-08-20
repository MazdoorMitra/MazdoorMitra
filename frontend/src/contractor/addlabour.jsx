
import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './addlabour.css';
import Header from './Header';
import Footer from './footer';

function AddLabourPage() {
    const { contractorId, projectId } = useParams();

    // State to manage registration form data
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [wage, setWage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Function to handle registration form submission
    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:5000/api/contractors/projects/${projectId}/labourers`, {
                contractorId,
                name,
                location,
                jobType,
                wage: parseInt(wage),
                phoneNumber: parseInt(phoneNumber)
            });

            const labourerId = response.data._id; // Assuming the response contains the laborer ID

            // SweetAlert2 for success message
            Swal.fire({
                icon: 'success',
                title: 'Labourer successfully registered',
                text: 'Labourer Id Sent to their registered Mobile Number ',
                confirmButtonText: 'OK'
            });

            // Reset form fields after successful submission
            setName('');
            setLocation('');
            setJobType('');
            setWage('');
            setPhoneNumber('');
        } catch (error) {
            console.error('Error adding laborer:', error);
            Swal.fire({
                icon: 'error',
                title: 'Registration failed',
                text: 'An error occurred while registering the laborer.',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <Header />
            <Grid container justifyContent="center" spacing={2} className="add-labour-container" style={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Add Labour
                        </Typography>
                        <form onSubmit={handleRegistrationSubmit}>
                            <TextField
                                label="Name"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                label="Location"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <TextField
                                label="Job Type"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                            />
                            <TextField
                                label="Wage"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                value={wage}
                                onChange={(e) => setWage(e.target.value)}
                                type="number"
                            />
                            <TextField
                                label="Phone Number"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="number"
                            />
                            <Button type="submit" variant="contained" className="register-submit-button">
                                Register
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default AddLabourPage;
