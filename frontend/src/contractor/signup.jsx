import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextBox, Page, VContainer } from '../components';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/contractor/signup', { firstName, lastName, number, password })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    return (
        <Page title='Sign Up' classes={['textaligncenter']}>
            <form onSubmit={handleSubmit}>
                <VContainer classes={['spaceev']}>
                    <TextBox title='First Name' hint='Enter your first name' classes={['width80p']} onChange={(e) => setFirstName(e.target.value)} />
                    <TextBox title='Last Name' hint='Enter your last name' classes={['width80p']} onChange={(e) => setLastName(e.target.value)} />
                    <TextBox title='Phone Number' hint='Enter your phone number' classes={['width80p']} onChange={(e) => setNumber(e.target.value)} />
                    <TextBox title='Password' hint='Enter your password' type='password' classes={['width80p']} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" classes={['width40p']}>Sign Up</Button>
                </VContainer>
            </form>
        </Page>
    );
}

export default Signup;
