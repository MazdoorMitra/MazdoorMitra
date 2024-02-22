import React from 'react';
import { Link } from 'react-router-dom';
import { Tile, Page, VContainer, TextBox, Button, HContainer } from "../components";

function NewProject() {
    return (
        <Page title="New Project" topbar="Project Details">
            <VContainer>
                <TextBox title="Project Name" hint="Enter project name" divclasses={['stdmp']} />
                <TextBox title="Project Description" hint="Enter project description" divclasses={['stdmp']} />
                <VContainer title="Add Supervisor " classes={['stdmp']}>
                    <TextBox title="Supervisor Name" hint="Enter supervisor name" divclasses={['stdmp']} />
                    <TextBox title="Contact Details" hint="Enter supervisor email" divclasses={['stdmp']} />
                </VContainer>
                <Link to="/contractor">
                  <Button classes={['stdmp']} onClick={() => console.log("Project created!")}>Create Project</Button>
                </Link>
            </VContainer>
        </Page>
    );
}

export default NewProject;


