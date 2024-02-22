import { useState, useEffect } from 'react';
import { Tile, Page, VContainer, Button, HContainer } from "../components";
import right from '../right.svg';
import Header from "./Header";
import Footer from "./footer";
import { Link } from 'react-router-dom';
import axios from 'axios';

function ContractorCard({ name, info, classes, path, ...other }) {
    return (
        <Tile style={{ cursor: 'pointer' }} classes={classes} {...other}>
            <HContainer>
                <VContainer classes={['width90p']}>
                    <p className="mediumfont floatstart" style={{ color: 'var(--t1)' }}>{name}</p>
                    <p className="smallfont floatstart">{info}</p>
                </VContainer>
                <img src={right} style={{ height: '1.3em', transform: 'rotate(90deg)' }} className="floatmid" />
            </HContainer>
        </Tile>
    );
}

function Labourers() {
    const [labourers, setLabourers] = useState([]);

    useEffect(() => {
        const fetchLabourers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/contractor/labours');
                setLabourers(response.data);
            } catch (error) {
                console.error('Error fetching labourers:', error);
            }
        };

        fetchLabourers();
    }, []);

    return (
        <>
            <Header /> 
            <Page title='Labourers'>
                <VContainer classes={['stdmargin']} style={{ marginTop: '3em' }}>
                    {labourers.map((labourer, index) => (
                        <ContractorCard
                            key={index}
                            name={`${labourer.firstName} ${labourer.lastName}`}
                            info='bruh'
                        />
                    ))}
                    <Link to="/contractor/addlabourer">
                        <ContractorCard name='Add Labourer' />
                    </Link>
                </VContainer>
            </Page>
            <Footer />
        </>
    );
}

export default Labourers;
