
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Typography, Grid, Divider, List, ListItem, ListItemText, Chip, Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from './Header1'; // Import the Header component

function Dashboard() {
    const { labourerId } = useParams(); // Get the labourerId from URL params
    const [labourerDetails, setLabourerDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLabourerDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/labourers/details/${labourerId}`);
                setLabourerDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching labourer details:', error);
                setError('Failed to fetch labourer details.');
                setLoading(false);
            }
        };

        fetchLabourerDetails();
    }, [labourerId]);

    if (loading) {
        return (
            <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
                <CircularProgress />
                <Typography variant="h6" gutterBottom>Loading...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h6" color="error" gutterBottom>{error}</Typography>
            </Container>
        );
    }

    return (
      <div>
        <Header/>
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Labourer Dashboard
                </Typography>
                <Divider style={{ margin: '10px 0' }} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Labourer Details
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Name" secondary={labourerDetails.labourerName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Location" secondary={labourerDetails.location} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Job Type" secondary={labourerDetails.jobType} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Wage" secondary={`₹${labourerDetails.wage}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Phone Number" secondary={labourerDetails.phoneNumber} />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Project Information
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Project Name" secondary={labourerDetails.projectName} />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h6" gutterBottom>
                    Attendance Records
                </Typography>
                {labourerDetails.attendance.length > 0 ? (
                    <List>
                        {labourerDetails.attendance.map((record, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`Date: ${record.date}`} secondary={`Status: ${record.status}`} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography variant="body1">No attendance records found.</Typography>
                )}
            </Paper>
        </Container>
        </div>
    );
}

export default Dashboard;
