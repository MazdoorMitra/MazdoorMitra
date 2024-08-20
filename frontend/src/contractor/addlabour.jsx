// // // import React, { useState } from 'react';
// // // import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Paper } from '@mui/material';
// // // import './addlabour.css'; // Import CSS file for additional styling
// // // import Header from './Header';
// // // import Footer from './footer';
// // // import axios from 'axios'; // Import Axios library

// // // function AddLabourPage() {
// // //     // Sample existing labors
// // //     const existingLabors = ['Anuj', 'Anurag', 'Anuh'];

// // //     // State to manage the selected labor and whether to show the registration form
// // //     const [selectedLabor, setSelectedLabor] = useState('');
// // //     const [showRegistrationForm, setShowRegistrationForm] = useState(false);

// // //     // State to manage registration form data
// // //     const [firstName, setFirstName] = useState('');
// // //     const [lastName, setLastName] = useState('');
// // //     const [phoneNumber, setPhoneNumber] = useState('');
// // //     const [wageRate, setWageRate] = useState('');
// // //     const [wageRateType, setWageRateType] = useState('');
// // //     const [location, setLocation] = useState('');

// // //     // Function to handle the dropdown change
// // //     const handleDropdownChange = (event) => {
// // //         setSelectedLabor(event.target.value);
// // //     };

// // //     // Function to handle form submission for existing labor
// // //     const handleExistingLabourSubmit = () => {
// // //         // Implement logic for submitting form with selected existing labor
// // //         console.log('Selected existing labor:', selectedLabor);
// // //     };

// // //     // Function to handle form submission for new labour
// // //     const handleNewLabourSubmit = () => {
// // //         setShowRegistrationForm(!showRegistrationForm); // Toggle the state
// // //     };

// // //     // Function to handle registration form submission
// // //     const handleRegistrationSubmit = async (event) => {
// // //         event.preventDefault();
// // //         try {
// // //             const response = await axios.post('http://localhost:4000/contractor/newlabour', {
// // //                 firstName,
// // //                 lastName,
// // //                 phoneNumber,
// // //                 wageRate,
// // //                 location
// // //             });
// // //             console.log('Response:', response.data);
// // //             // Reset form fields after successful submission
// // //             setFirstName('');
// // //             setLastName('');
// // //             setPhoneNumber('');
// // //             setWageRate('');
// // //             setWageRateType('');
// // //             setLocation('');
// // //         } catch (error) {
// // //             console.error('Error registering new labor:', error);
// // //         }
// // //     };

// // //     return (
// // //         <>
// // //             <Header />
// // //             <Grid container justifyContent="center" spacing={2} className="add-labour-container" style={{ marginTop: '20px' }}>
// // //                 <Grid item xs={12} md={6}>
// // //                     <Paper variant="outlined" sx={{ p: 2 }}>
// // //                         <Typography variant="h5" align="center" gutterBottom>
// // //                             Add Labour
// // //                         </Typography>
// // //                         <FormControl fullWidth variant="outlined" margin="normal">
// // //                             <InputLabel id="selected-labor-label">Select an option...</InputLabel>
// // //                             <Select
// // //                                 labelId="selected-labor-label"
// // //                                 value={selectedLabor}
// // //                                 onChange={handleDropdownChange}
// // //                                 label="Select an option..."
// // //                             >
// // //                                 <MenuItem value="">
// // //                                     <em>Select an option...</em>
// // //                                 </MenuItem>
// // //                                 {existingLabors.map((labor, index) => (
// // //                                     <MenuItem key={index} value={labor}>{labor}</MenuItem>
// // //                                 ))}
// // //                             </Select>
// // //                         </FormControl>
// // //                         <Button variant="contained" className="submit-button" onClick={handleExistingLabourSubmit} disabled={!selectedLabor}>
// // //                             Submit
// // //                         </Button>
// // //                         <Typography variant="h6" align="center" gutterBottom>
// // //                             OR
// // //                         </Typography>
// // //                         <Button variant="contained" className="register-button" onClick={handleNewLabourSubmit}>
// // //                             {showRegistrationForm ? 'Close Form' : 'Register New Labour'}
// // //                         </Button>
// // //                         {showRegistrationForm && (
// // //                             <form onSubmit={handleRegistrationSubmit}>
// // //                                 <TextField
// // //                                     label="First Name"
// // //                                     fullWidth
// // //                                     variant="outlined"
// // //                                     margin="normal"
// // //                                     value={firstName}
// // //                                     onChange={(e) => setFirstName(e.target.value)}
// // //                                 />
// // //                                 <TextField
// // //                                     label="Last Name"
// // //                                     fullWidth
// // //                                     variant="outlined"
// // //                                     margin="normal"
// // //                                     value={lastName}
// // //                                     onChange={(e) => setLastName(e.target.value)}
// // //                                 />
// // //                                 <TextField
// // //                                     label="Phone Number"
// // //                                     fullWidth
// // //                                     variant="outlined"
// // //                                     margin="normal"
// // //                                     value={phoneNumber}
// // //                                     onChange={(e) => setPhoneNumber(e.target.value)}
// // //                                 />
// // //                                 <TextField
// // //                                     label="Wage Rate"
// // //                                     fullWidth
// // //                                     variant="outlined"
// // //                                     margin="normal"
// // //                                     value={wageRate}
// // //                                     onChange={(e) => setWageRate(e.target.value)}
// // //                                 />
// // //                                 <FormControl fullWidth variant="outlined" margin="normal">
// // //                                     <InputLabel id="wage-rate-type-label">Select wage rate type...</InputLabel>
// // //                                     <Select
// // //                                         labelId="wage-rate-type-label"
// // //                                         value={wageRateType}
// // //                                         onChange={(e) => setWageRateType(e.target.value)}
// // //                                         label="Select wage rate type..."
// // //                                     >
// // //                                         <MenuItem value="">
// // //                                             <em>Select wage rate type...</em>
// // //                                         </MenuItem>
// // //                                         <MenuItem value="hourly">Hourly</MenuItem>
// // //                                         <MenuItem value="weekly">Weekly</MenuItem>
// // //                                         <MenuItem value="monthly">Monthly</MenuItem>
// // //                                     </Select>
// // //                                 </FormControl>
// // //                                 <TextField
// // //                                     label="Location"
// // //                                     fullWidth
// // //                                     variant="outlined"
// // //                                     margin="normal"
// // //                                     value={location}
// // //                                     onChange={(e) => setLocation(e.target.value)}
// // //                                 />
// // //                                 <Button type="submit" variant="contained" className="register-submit-button ">
// // //                                     Register
// // //                                 </Button>
// // //                             </form>
// // //                         )}
// // //                     </Paper>
// // //                 </Grid>
// // //             </Grid>
// // //             <Footer />
// // //         </>
// // //     );
// // // }

// // // export default AddLabourPage;



// // import React, { useState } from 'react';
// // import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Paper } from '@mui/material';
// // import './addlabour.css'; // Import CSS file for additional styling
// // import Header from './Header';
// // import Footer from './footer';

// // function AddLabourPage() {
// //     // Sample existing labors
// //     const existingLabors = ['Anuj', 'Anurag', 'Anuh'];

// //     // State to manage the selected labor and whether to show the registration form
// //     const [selectedLabor, setSelectedLabor] = useState('');
// //     const [showRegistrationForm, setShowRegistrationForm] = useState(false);

// //     // State to manage registration form data
// //     const [userName, setUserName] = useState('');
// //     const [firstName, setFirstName] = useState('');
// //     const [lastName, setLastName] = useState('');
// //     const [phoneNumber, setPhoneNumber] = useState('');
// //     const [wageRate, setWageRate] = useState('');
// //     const [wageRateType, setWageRateType] = useState('');
// //     const [location, setLocation] = useState('');

// //     // Function to handle the dropdown change
// //     const handleDropdownChange = (event) => {
// //         setSelectedLabor(event.target.value);
// //     };

// //     // Function to handle form submission for existing labor
// //     const handleExistingLabourSubmit = () => {
// //         // Implement logic for submitting form with selected existing labor
// //         console.log('Selected existing labor:', selectedLabor);
// //     };

// //     // Function to handle form submission for new labour
// //     const handleNewLabourSubmit = () => {
// //         setShowRegistrationForm(!showRegistrationForm); // Toggle the state
// //     };

// //     // Function to handle registration form submission
// //     const handleRegistrationSubmit = (event) => {
// //         event.preventDefault();
// //         console.log('New labor data:', {
// //             Name,
// //             location,
// //             jobType,
// //             wage,
// //             phoneNumber
// //         });

// //         // Reset form fields after successful submission
// //         setName('');
        
// //         setPhoneNumber('');
// //         setWageRate('');
// //         setWageRateType('');
// //         setLocation('');
// //     };

// //     return (
// //         <>
// //             <Header />
// //             <Grid container justifyContent="center" spacing={2} className="add-labour-container" style={{ marginTop: '20px' }}>
// //                 <Grid item xs={12} md={6}>
// //                     <Paper variant="outlined" sx={{ p: 2 }}>
// //                         <Typography variant="h5" align="center" gutterBottom>
// //                             Add Labour
// //                         </Typography>
// //                         <FormControl fullWidth variant="outlined" margin="normal">
// //                             <InputLabel id="selected-labor-label">Select an option...</InputLabel>
// //                             <Select
// //                                 labelId="selected-labor-label"
// //                                 value={selectedLabor}
// //                                 onChange={handleDropdownChange}
// //                                 label="Select an option..."
// //                             >
// //                                 <MenuItem value="">
// //                                     <em>Select an option...</em>
// //                                 </MenuItem>
// //                                 {existingLabors.map((labor, index) => (
// //                                     <MenuItem key={index} value={labor}>{labor}</MenuItem>
// //                                 ))}
// //                             </Select>
// //                         </FormControl>
// //                         <Button variant="contained" className="submit-button" onClick={handleExistingLabourSubmit} disabled={!selectedLabor}>
// //                             Submit
// //                         </Button>
// //                         <Typography variant="h6" align="center" gutterBottom>
// //                             OR
// //                         </Typography>
// //                         <Button variant="contained" className="register-button" onClick={handleNewLabourSubmit}>
// //                             {showRegistrationForm ? 'Close Form' : 'Register New Labour'}
// //                         </Button>
// //                         {showRegistrationForm && (
// //                             <form onSubmit={handleRegistrationSubmit}>
// //                                 <TextField
// //                                     label="Name"
// //                                     fullWidth
// //                                     variant="outlined"
// //                                     margin="normal"
// //                                     value={Name}
// //                                     onChange={(e) => setUserName(e.target.value)}
// //                                 />
// //                                 <TextField
// //                                     label="location"
// //                                     fullWidth
// //                                     variant="outlined"
// //                                     margin="normal"
// //                                     value={location}
// //                                     onChange={(e) => setFirstName(e.target.value)}
// //                                 />
                                
                                
// //                                 <TextField
// //                                     label="JobType"
// //                                     fullWidth
// //                                     variant="outlined"
// //                                     margin="normal"
// //                                     value={wageRate}
// //                                     onChange={(e) => setWageRate(e.target.value)}
// //                                 />
// //                                 <FormControl fullWidth variant="outlined" margin="normal">
// //                                     <InputLabel id="wage-rate-type-label">Select Job type...</InputLabel>
// //                                     <Select
// //                                         labelId="wage-rate-type-label"
// //                                         value={wageRateType}
// //                                         onChange={(e) => setWageRateType(e.target.value)}
// //                                         label="Select wage rate type..."
// //                                     >
// //                                         <MenuItem value="">
// //                                             <em>Select Job type...</em>
// //                                         </MenuItem>
// //                                         <MenuItem value="Plumber">Hourly</MenuItem>
// //                                         <MenuItem value="Electrician">Weekly</MenuItem>
// //                                         <MenuItem value="Helper">Monthly</MenuItem>
// //                                     </Select>
// //                                 </FormControl>
// //                                 <TextField
// //                                     label="Location"
// //                                     fullWidth
// //                                     variant="outlined"
// //                                     margin="normal"
// //                                     value={location}
// //                                     onChange={(e) => setLocation(e.target.value)}
// //                                 />
// //                                 <TextField
// //                                     label="Location"
// //                                     fullWidth
// //                                     variant="outlined"
// //                                     margin="normal"
// //                                     value={location}
// //                                     onChange={(e) => setLocation(e.target.value)}
// //                                 />
// //                                 <Button type="submit" variant="contained" className="register-submit-button">
// //                                     Register
// //                                 </Button>
// //                             </form>
// //                         )}
// //                     </Paper>
// //                 </Grid>
// //             </Grid>
// //             <Footer />
// //         </>
// //     );
// // }

// // export default AddLabourPage;
// import React, { useState } from 'react';
// import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
// import axios from 'axios'; // Add axios for making HTTP requests
// import { useParams } from 'react-router-dom'; // Use useParams to get route parameters
// import './addlabour.css';
// import Header from './Header';
// import Footer from './footer';

// function AddLabourPage() {
//     // Get contractorId and projectId from the URL parameters
//     const { contractorId, projectId } = useParams();

//     // State to manage registration form data
//     const [name, setName] = useState('');
//     const [location, setLocation] = useState('');
//     const [jobType, setJobType] = useState('');
//     const [wage, setWage] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');

//     // Function to handle registration form submission
//     const handleRegistrationSubmit = async (event) => {
//         event.preventDefault();

//         // Backend API call to add new laborer
//         try {
//             const response = await axios.post(`http://localhost:5000/api/contractors/projects/${projectId}/labourers`, {
//                 contractorId,
//                 name,
//                 location,
//                 jobType,
//                 wage: parseInt(wage), // Ensure wage is an integer
//                 phoneNumber: parseInt(phoneNumber) // Ensure phoneNumber is an integer
//             });

//             console.log('Laborer added successfully:', response.data);

//             // Reset form fields after successful submission
//             setName('');
//             setLocation('');
//             setJobType('');
//             setWage('');
//             setPhoneNumber('');
//         } catch (error) {
//             console.error('Error adding laborer:', error);
//         }
//     };

//     return (
//         <>
//             <Header />
//             <Grid container justifyContent="center" spacing={2} className="add-labour-container" style={{ marginTop: '20px' }}>
//                 <Grid item xs={12} md={6}>
//                     <Paper variant="outlined" sx={{ p: 2 }}>
//                         <Typography variant="h5" align="center" gutterBottom>
//                             Add Labour
//                         </Typography>
//                         <form onSubmit={handleRegistrationSubmit}>
//                             <TextField
//                                 label="Name"
//                                 fullWidth
//                                 variant="outlined"
//                                 margin="normal"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                             <TextField
//                                 label="Location"
//                                 fullWidth
//                                 variant="outlined"
//                                 margin="normal"
//                                 value={location}
//                                 onChange={(e) => setLocation(e.target.value)}
//                             />
//                             <TextField
//                                 label="Job Type"
//                                 fullWidth
//                                 variant="outlined"
//                                 margin="normal"
//                                 value={jobType}
//                                 onChange={(e) => setJobType(e.target.value)}
//                             />
//                             <TextField
//                                 label="Wage"
//                                 fullWidth
//                                 variant="outlined"
//                                 margin="normal"
//                                 value={wage}
//                                 onChange={(e) => setWage(e.target.value)}
//                                 type="number"
//                             />
//                             <TextField
//                                 label="Phone Number"
//                                 fullWidth
//                                 variant="outlined"
//                                 margin="normal"
//                                 value={phoneNumber}
//                                 onChange={(e) => setPhoneNumber(e.target.value)}
//                                 type="number"
//                             />
//                             <Button type="submit" variant="contained" className="register-submit-button">
//                                 Register
//                             </Button>
//                         </form>
//                     </Paper>
//                 </Grid>
//             </Grid>
//             <Footer />
//         </>
//     );
// }

// export default AddLabourPage;
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
