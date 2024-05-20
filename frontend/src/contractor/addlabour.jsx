import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Paper } from '@mui/material';
import './addlabour.css'; // Import CSS file for additional styling
import Header from './Header';
import Footer from './footer';
import axios from 'axios'; // Import Axios library

function AddLabourPage() {
    // Sample existing labors
    const existingLabors = ['Anuj', 'Anurag', 'Anuh'];

    // State to manage the selected labor and whether to show the registration form
    const [selectedLabor, setSelectedLabor] = useState('');
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    // State to manage registration form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [wageRate, setWageRate] = useState('');
    const [wageRateType, setWageRateType] = useState('');
    const [location, setLocation] = useState('');

    // Function to handle the dropdown change
    const handleDropdownChange = (event) => {
        setSelectedLabor(event.target.value);
    };

    // Function to handle form submission for existing labor
    const handleExistingLabourSubmit = () => {
        // Implement logic for submitting form with selected existing labor
        console.log('Selected existing labor:', selectedLabor);
    };

    // Function to handle form submission for new labour
    const handleNewLabourSubmit = () => {
        setShowRegistrationForm(!showRegistrationForm); // Toggle the state
    };

    // Function to handle registration form submission
    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://10.23.0.155:/contractor/newlabour', {
                firstName,
                lastName,
                phoneNumber,
                wageRate,
                location
            });
            console.log('Response:', response.data);
            // Reset form fields after successful submission
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setWageRate('');
            setWageRateType('');
            setLocation('');
        } catch (error) {
            console.error('Error registering new labor:', error);
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
                        <FormControl fullWidth variant="outlined" margin="normal">
                            <InputLabel id="selected-labor-label">Select an option...</InputLabel>
                            <Select
                                labelId="selected-labor-label"
                                value={selectedLabor}
                                onChange={handleDropdownChange}
                                label="Select an option..."
                            >
                                <MenuItem value="">
                                    <em>Select an option...</em>
                                </MenuItem>
                                {existingLabors.map((labor, index) => (
                                    <MenuItem key={index} value={labor}>{labor}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button variant="contained" className="submit-button" onClick={handleExistingLabourSubmit} disabled={!selectedLabor}>
                            Submit
                        </Button>
                        <Typography variant="h6" align="center" gutterBottom>
                            OR
                        </Typography>
                        <Button variant="contained" className="register-button" onClick={handleNewLabourSubmit}>
                            {showRegistrationForm ? 'Close Form' : 'Register New Labour'}
                        </Button>
                        {showRegistrationForm && (
                            <form onSubmit={handleRegistrationSubmit}>
                                <TextField
                                    label="First Name"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <TextField
                                    label="Last Name"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <TextField
                                    label="Phone Number"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <TextField
                                    label="Wage Rate"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    value={wageRate}
                                    onChange={(e) => setWageRate(e.target.value)}
                                />
                                <FormControl fullWidth variant="outlined" margin="normal">
                                    <InputLabel id="wage-rate-type-label">Select wage rate type...</InputLabel>
                                    <Select
                                        labelId="wage-rate-type-label"
                                        value={wageRateType}
                                        onChange={(e) => setWageRateType(e.target.value)}
                                        label="Select wage rate type..."
                                    >
                                        <MenuItem value="">
                                            <em>Select wage rate type...</em>
                                        </MenuItem>
                                        <MenuItem value="hourly">Hourly</MenuItem>
                                        <MenuItem value="weekly">Weekly</MenuItem>
                                        <MenuItem value="monthly">Monthly</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Location"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <Button type="submit" variant="contained" className="register-submit-button ">
                                    Register
                                </Button>
                            </form>
                        )}
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default AddLabourPage;
