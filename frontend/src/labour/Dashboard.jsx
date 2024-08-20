// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Container, Paper, Grid, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
// // import { useParams } from 'react-router-dom';
// // import Header from './Header1'; // Import the Header component

// // function LabourerDashboard() {
// //     const { labourerId } = useParams(); // Get the labourerId from the URL parameters
// //     const [labourerDetails, setLabourerDetails] = useState(null);

// //     useEffect(() => {
// //         const fetchLabourerDetails = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:5000/api/labourers/details/${labourerId}`);
// //                 setLabourerDetails(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching labourer details:', error);
// //             }
// //         };

// //         fetchLabourerDetails();
// //     }, [labourerId]);

// //     if (!labourerDetails) {
// //         return <Typography variant="h5">Loading...</Typography>;
// //     }

// //     return (
// //       <div>
// //         <Header/>
// //         <Container maxWidth="md" style={{ marginTop: '50px' }}>
          
// //             <Paper elevation={3} style={{ padding: '20px' }}>
// //                 <Typography variant="h4" gutterBottom>
// //                     Labourer Dashboard
// //                 </Typography>
// //                 <Divider style={{ marginBottom: '20px' }} />
// //                 <Grid container spacing={3}>
// //                     <Grid item xs={12} sm={6}>
// //                         <Typography variant="h6">Project Information</Typography>
// //                         <List>
// //                             <ListItem>
// //                                 <ListItemText primary="Project Name" secondary={labourerDetails.projectName || "No project assigned"} />
// //                             </ListItem>
// //                         </List>
// //                     </Grid>

// //                     <Grid item xs={12} sm={6}>
// //                         <Typography variant="h6">Attendance</Typography>
// //                         <List>
// //                             {labourerDetails.attendance && labourerDetails.attendance.length > 0 ? (
// //                                 labourerDetails.attendance.map((attendance, index) => (
// //                                     <ListItem key={index}>
// //                                         <ListItemText primary={`Date: ${attendance.date}`} secondary={`Status: ${attendance.status}`} />
// //                                     </ListItem>
// //                                 ))
// //                             ) : (
// //                                 <Typography variant="body1">No attendance records available.</Typography>
// //                             )}
// //                         </List>
// //                     </Grid>
// //                 </Grid>
// //             </Paper>
// //         </Container>
// //         </div>
// //     );
// // }

// // export default LabourerDashboard;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Container, Paper, Typography, Grid } from '@mui/material';

// function LabourerDashboard() {
//     const { labourerId } = useParams();
//     const [labourerDetails, setLabourerDetails] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchLabourerDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/labourers/details/${labourerId}`);
//                 setLabourerDetails(response.data);
//             } catch (err) {
//                 console.error('Error fetching labourer details:', err);
//                 setError('Failed to fetch labourer details.');
//             }
//         };

//         fetchLabourerDetails();
//     }, [labourerId]);

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!labourerDetails) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container maxWidth="md">
//             <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
//                 <Typography variant="h4" gutterBottom>
//                     Labourer Dashboard
//                 </Typography>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Contractor: {labourerDetails.contractorName}</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Project Name: {labourerDetails.projectName}</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Labourer Name: {labourerDetails.labourerName}</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Location: {labourerDetails.location}</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Job Type: {labourerDetails.jobType}</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Wage: ₹{labourerDetails.wage}</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Phone Number: {labourerDetails.phoneNumber}</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="h6">Attendance: {labourerDetails.attendance.length} days</Typography>
//                     </Grid>
//                 </Grid>
//             </Paper>
//         </Container>
//     );
// }

// export default LabourerDashboard;
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
