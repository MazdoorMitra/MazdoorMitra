
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
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './footer'; // Ensure this path and filename match

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
            {labourer.name.charAt(0)}
          </Avatar>
        </Stack>
        <Typography variant="h5" component="div" align="center">
          {labourer.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
          {labourer.location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
          Job: {labourer.jobType}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
          Wage: ${labourer.wage}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'center',
        }}
      >
        <Button size="small" component={Link} to={`/labourer/${labourer._id}`}>
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Labourers() {
  const [labourers, setLabourers] = React.useState([]);
  const { contractorId, projectId } = useParams();


  React.useEffect(() => {
    const fetchLabourers = async () => {
      try {
        // Construct URL with both projectId and contractorId
        const response = await axios.get(`http://localhost:5000/api/contractors/projects/${projectId}/labourers`, {
          params: {
            contractorId: contractorId,
          },
        });
        // Set the labourers state using the correct key from the response data
        setLabourers(response.data.labourers || []);
      } catch (error) {
        console.error('Error fetching labourers:', error);
      }
    };

    fetchLabourers();
  }, [contractorId, projectId]);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          p: 2,
        }}
      >
        {labourers.map((labourer) => (
          <LabourerCard key={labourer._id} labourer={labourer} />
        ))}
      </Box>
      <Link to={`/contractor/addlabourer/${contractorId}/${projectId}`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Add New Labourer
        </Button>
      </Link>
      <Footer />
    </>
  );
}
