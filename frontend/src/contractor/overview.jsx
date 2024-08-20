
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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

export default function Overview() {
  const { contractorId } = useParams(); // Get contractorId from URL parameters
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/contractors/projects?contractorId=${contractorId}`)
      .then(response => {
        setProjects(response.data.projects || []);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, [contractorId]);

  const handleDelete = (projectId) => {
    axios.delete(`http://localhost:5000/api/projects/${projectId}`)
      .then(() => {
        setProjects(projects.filter(project => project._id !== projectId));
      })
      .catch(error => {
        console.error('Error deleting project:', error);
      });
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
                <Link key={project._id} to={`/contractor/dashboard/${contractorId}/${project._id}`} style={{ textDecoration: 'none' }}>
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
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(project._id);
                      }}
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
          <Link to={`/contractor/newproject/${contractorId}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary">
              Add New Project
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
