import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from './Header1'; // Import Header component
import axios from 'axios';

function ProfilePage() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [jobType, setJobType] = useState('');
  const [photo, setPhoto] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch profile data from backend
    axios.get('http://10.23.0.155:4000/api/labour/profile')
      .then(response => {
        const { name, mobileNumber, jobType, photoUrl } = response.data;
        setName(name);
        setMobileNumber(mobileNumber);
        setJobType(jobType);
        if (photoUrl) {
          setPhoto(photoUrl);
        }
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleSaveProfile = () => {
    // Implement save profile logic here
    console.log('Name:', name);
    console.log('Mobile Number:', mobileNumber);
    console.log('Job Type:', jobType);
    console.log('Photo:', photo);
    setEditMode(false); // Disable edit mode after saving
  };

  return (
    <>
      <Header /> {/* Include Header component */}
      <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            {/* Avatar and file input */}
            <Avatar alt="Profile Picture" src={photo ? photo : ''} sx={{ width: 120, height: 120, marginBottom: 2 }} />
            <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ marginBottom: '10px' }} />

            {/* Profile form */}
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
              margin="normal"
              sx={{ fontSize: '1.2rem', marginBottom: '10px' }}
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              margin="normal"
              sx={{ fontSize: '1.2rem', marginBottom: '10px' }}
            />
            <TextField
              label="Job Type"
              variant="outlined"
              fullWidth
              value={jobType}
              onChange={handleJobTypeChange}
              margin="normal"
              sx={{ fontSize: '1.2rem', marginBottom: '10px' }}
            />

            {/* Save button */}
            <Button variant="contained" color="primary" onClick={handleSaveProfile} sx={{ fontSize: '1.2rem' }}>Save Profile</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfilePage;
