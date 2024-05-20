import React from 'react';
import { Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

// const RootContainer = styled(Container)({
//   backgroundImage: `url('https://media.licdn.com/dms/image/C5122AQEZuXFwk9lXGQ/feedshare-shrink_800/0/1559217919878?e=2147483647&v=beta&t=vfyXHZOqbTgG5-LwnkcHOqorQWW7QlpvFK1M8hqEAJA')`,
//   backgroundSize: 'cover',
//   height: '100vh',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexDirection: 'column',
// });
const RootContainer = styled(Container)({
    backgroundImage: `url('https://media.licdn.com/dms/image/C5122AQEZuXFwk9lXGQ/feedshare-shrink_800/0/1559217919878?e=2147483647&v=beta&t=vfyXHZOqbTgG5-LwnkcHOqorQWW7QlpvFK1M8hqEAJA')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // This ensures that the background image remains fixed while scrolling
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor:'black'
  });
  

const AnimatedTypography = styled(Typography)({
  animation: '$fadeIn 1.5s ease-in-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
});

function WelcomeScreen() {
    const handleContractorClick = () => {
        // Redirect to contractor signup page
        window.location.href = '/contractor/signup';
    };
    const handleLabourerClick= ()=>{
        window.location.href='/labour/overview'
    }
    
    return (
        <RootContainer maxWidth="xs">
            <Typography variant="h5" align="center" gutterBottom color={'white'}>
                Welcome Screen
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <AnimatedTypography variant="body1" align="center" color={'white'} >
                        I'm a...
                    </AnimatedTypography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" fullWidth>
                        Supervisor
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" fullWidth onClick={handleContractorClick}>
                        Contractor
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" fullWidth onClick={handleLabourerClick}>
                        Labourer
                    </Button>
                </Grid>
            </Grid>
        </RootContainer>
    );
}

export default WelcomeScreen;
