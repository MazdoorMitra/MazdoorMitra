
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import Avatar from '@mui/material/Avatar';
import YourLogo from './Screenshot 2024-04-07 180733-removebg-preview.jpg'; // Import your logo

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

// Profile link component
function ProfileLink({ labourerId }) {
  return (
    <MenuItem
      component={Link}
      to={`/labour/overview/${labourerId}`}
      sx={{ py: '6px', px: '12px', display: 'flex', alignItems: 'center' }}
    >
      <Avatar alt="User Avatar" src="/path_to_avatar_image" />
      <Typography variant="body2" color="text.primary" sx={{ marginLeft: '10px' }}>
        Profile
      </Typography>
    </MenuItem>
  );
}

ProfileLink.propTypes = {
  labourerId: PropTypes.string.isRequired,
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = useState(false);
  const { labourerId } = useParams(); // Fetching labourerId from the current route params

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link to="/">
                <img
                  src={YourLogo} // Replace with your logo
                  style={logoStyle}
                  alt="logo of your organization"
                />
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  component={Link}
                  to={`/labour/dashboard/${labourerId}`}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Overview
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to={`/labour/scheme/${labourerId}`}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Scheme
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to={`/labour/chat/${labourerId}`}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Chat
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              {/* Removed the Sign in and Sign up buttons */}
              <ProfileLink labourerId={labourerId} /> {/* Include ProfileLink component */}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                    {/* Display profile link in mobile view */}
                    <ProfileLink labourerId={labourerId} />
                  </Box>
                  <MenuItem
                    component={Link}
                    to={`/labour/dashboard/${labourerId}`}
                  >
                    Overview
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to={`/labour/scheme/${labourerId}`}
                  >
                    Scheme
                  </MenuItem>
                  <Divider />
                  {/* Removed the Sign in and Sign up buttons */}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
