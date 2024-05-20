import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';

function NewProject() {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [supervisorName, setSupervisorName] = useState('');
    const [contactDetails, setContactDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://10.23.0.155:4000/contractor/newproject', {
            projectName,
            projectDescription,
            supervisorName,
            contactDetails
        })
        .then(response => {
            console.log(response.data);
            alert('Project created successfully!');
            window.location.href = '/contractor'; // Navigate to '/contractor' page after clicking OK on the alert
        })
        .catch(error => {
            console.error('Error creating project:', error);
            alert('Failed to create project.');
        });
    };

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        New Project
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Project Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                        <TextField
                            label="Project Description"
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="normal"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                        />
                        <Typography variant="subtitle1" gutterBottom>
                            Add Supervisor
                        </Typography>
                        <TextField
                            label="Supervisor Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={supervisorName}
                            onChange={(e) => setSupervisorName(e.target.value)}
                        />
                        <TextField
                            label="Contact Details"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={contactDetails}
                            onChange={(e) => setContactDetails(e.target.value)}
                        />
                        <Button variant="contained" type="submit" sx={{ mr: 2 }}>
                            Create Project
                        </Button>
                        <Link to="/contractor" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="secondary">
                                Cancel
                            </Button>
                        </Link>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default NewProject;
