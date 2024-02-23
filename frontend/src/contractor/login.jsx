import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextBox, Page, VContainer } from '../components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import swal from "sweetalert"; // Import swal from sweetalert

function Login() {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('http://localhost:4000/contractor/signin', { number, password })
            .then(result => {
                console.log(result);
                setLoading(false);
                // Display success message using SweetAlert
                swal({
                    title: "Success!",
                    text: "You have successfully logged in.",
                    icon: "success",
                    button: "OK",
                }).then(() => {
                    // Redirect to '/contractor' page
                    window.location.href = '/contractor';
                });
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                // Display error message using SweetAlert
                swal({
                    title: "Error!",
                    text: "Invalid username or password.",
                    icon: "error",
                    button: "OK",
                });
            });
    };

    return (
        <Page title='Login' classes={['textaligncenter']}>
            <form onSubmit={handleSubmit}>
                <VContainer classes={['spaceev']}>
                    <TextBox title='Username' hint='Enter your username' classes={['width80p']} onChange={(e) => setNumber(e.target.value)} />
                    <TextBox title='Password' hint='Enter your password' type='password' classes={['width80p']} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" classes={['width40p']}>
                        {loading ? "Loading..." : "Login"}
                    </Button>
                </VContainer>
            </form>
            <p>Don't have an account? <Link to="/contractor/signup">Sign up</Link></p>
        </Page>
    );
}

export default Login;
