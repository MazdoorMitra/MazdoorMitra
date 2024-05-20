import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects when component mounts
    axios.get('http://10.23.0.155:4000/contractor/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleDelete = (projectId) => {
    // Implement delete functionality
    console.log('Deleting project with ID:', projectId);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" align="center">
            My Projects
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Demo>
            <List>
              {projects.map(project => (
                <Link key={project._id} to="/contractor/dashboard" style={{ textDecoration: 'none' }}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={project.projectName}
                      secondary={project.info}
                    />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(project._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12}>
          <Link to="/contractor/newproject" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary">
              Add New Project
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

