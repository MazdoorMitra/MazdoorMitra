import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Tile, Page, VContainer, TextBox, Button, HContainer } from "../components";

function NewProject() {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [supervisorName, setSupervisorName] = useState('');
    const [contactDetails, setContactDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/contractor/newproject', {
            projectName,
            projectDescription,
            supervisorName,
            contactDetails
        })
        .then(response => {
            console.log(response.data);
            alert('Project created successfully!');
            window.location.href = '/contractor'; // Navigate to '/contractor' page after clicking OK on the alert
        })
        .catch(error => {
            console.error('Error creating project:', error);
            alert('Failed to create project.');
        });
    };

    return (
        <Page title="New Project" topbar="Project Details">
            <VContainer>
                <TextBox title="Project Name" hint="Enter project name" divclasses={['stdmp']} onChange={(e) => setProjectName(e.target.value)} />
                <TextBox title="Project Description" hint="Enter project description" divclasses={['stdmp']} onChange={(e) => setProjectDescription(e.target.value)} />
                <VContainer title="Add Supervisor " classes={['stdmp']}>
                    <TextBox title="Supervisor Name" hint="Enter supervisor name" divclasses={['stdmp']} onChange={(e) => setSupervisorName(e.target.value)} />
                    <TextBox title="Contact Details" hint="Enter supervisor email" divclasses={['stdmp']} onChange={(e) => setContactDetails(e.target.value)} />
                </VContainer>
                <Button classes={['stdmp']} onClick={handleSubmit}>
                    Create Project
                </Button>
                <Link to="/contractor">
                    <Button classes={['stdmp']} secondary>
                        Cancel
                    </Button>
                </Link>
            </VContainer>
        </Page>
    );
}

export default NewProject;
