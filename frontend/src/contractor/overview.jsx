import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tile, Page, VContainer, Button } from "../components";
import right from '../right.svg';
import Header from "./Header";
import { Link } from 'react-router-dom'; // Import Link for navigation

function ContractorCard({ name, info, classes, path, ...other }) {
    return (
        <Link to="/contractor/dashboard"> {/* Added Link to navigate to /contractor/dashboard */}
            <Tile style={{ cursor: 'pointer' }} classes={classes} {...other}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <p className="mediumfont" style={{ color: 'var(--t1)' }}>{name}</p>
                        <p className="smallfont">{info}</p>
                    </div>
                    <img src={right} style={{ height: '1.3em', transform: 'rotate(90deg)' }} alt="Right arrow" />
                </div>
            </Tile>
        </Link>
    );
}

function ContractorsSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects when component mounts
        axios.get('http://localhost:4000/contractor/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    return (
        <VContainer classes={['stdmargin']} style={{ marginTop: '3em' }}>
            {projects.map(project => (
                <ContractorCard key={project._id} name={project.projectName} info={project.info} />
            ))}
            <Link to="/contractor/newproject">
                <Button classes={['stdmp']}>Add New Project</Button>
            </Link>
        </VContainer>
    );
}

export default function Overview() {
    return (
        <>
            <Header /> 
            <Page title='My Projects'>
                <ContractorsSection />
            </Page>
        </>
    );
}
