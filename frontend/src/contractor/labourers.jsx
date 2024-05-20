import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./Header";
import Footer from "./footer";

function LabourerCard({ labourer }) {
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        marginRight: 2,
        marginBottom: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding shadow effect
        borderRadius: '12px', // Adding border-radius for rounded corners
        transition: 'transform 0.3s ease-in-out', // Adding transition effect
        '&:hover': {
          transform: 'scale(1.05)', // Scaling up the card on hover
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Increasing shadow on hover
        },
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding shadow effect to avatar
            }}
          >
            {labourer.firstName.charAt(0)}
          </Avatar>
        </Stack>
        <Typography variant="h5" component="div" align="center">
          {`${labourer.firstName} ${labourer.lastName}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
          {labourer.info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
}

function Labourers() {
  const [labourers, setLabourers] = React.useState([]);
  const [showAddButton, setShowAddButton] = React.useState(false);

  React.useEffect(() => {
    const fetchLabourers = async () => {
      try {
        const response = await axios.get('http://10.23.0.155:4000/contractor/labours');
        setLabourers(response.data);
        setShowAddButton(true); // Set showAddButton to true after fetching labourers
        localStorage.setItem('showAddButton', 'true'); // Save showAddButton state to localStorage
      } catch (error) {
        console.error('Error fetching labourers:', error);
      }
    };

    fetchLabourers();

    // Retrieve showAddButton state from localStorage when component mounts
    const storedShowAddButton = localStorage.getItem('showAddButton');
    if (storedShowAddButton) {
      setShowAddButton(JSON.parse(storedShowAddButton));
    }
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3em' }}>
        <Typography variant="h4" gutterBottom>
          Labourers
        </Typography>
        {showAddButton && (
          <Box sx={{ textAlign: 'center', marginBottom: '2em' }}>
            <Link to="/contractor/addlabourer" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Add New Labourer
              </Button>
            </Link>
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', overflowY: 'auto', maxHeight: '80vh' }}>
          {labourers.map((labourer, index) => (
            <LabourerCard key={index} labourer={labourer} />
          ))}
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
}

export default Labourers;
