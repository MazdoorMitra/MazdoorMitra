import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextBox, Page, HContainer, VContainer } from '../components';

function Login() {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/contractor/signin', { number, password })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    return (
        <Page title='Login' classes={['textaligncenter']}>
            <form onSubmit={handleSubmit}>
                <VContainer classes={['spaceev']}>
                    <TextBox title='Username' hint='Enter your username' classes={['width80p']} onChange={(e) => setNumber(e.target.value)} />
                    <TextBox title='Password' hint='Enter your password' type='password' classes={['width80p']} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" classes={['width40p']}>Login</Button>
                </VContainer>
            </form>
        </Page>
    );
}

export default Login;


