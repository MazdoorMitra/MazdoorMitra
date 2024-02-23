import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextBox, Page, VContainer } from '../components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import swal from "sweetalert"; // Import swal from sweetalert

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('http://localhost:4000/contractor/signup', { firstName, lastName, number, password })
            .then(result => {
                console.log(result);
                setLoading(false);
                // Display success message using SweetAlert
                swal({
                    title: "Success!",
                    text: "You have successfully signed up.",
                    icon: "success",
                    button: "OK",
                }).then(() => {
                    // Redirect to '/contractor' page using Link
                    window.location.href = '/contractor';
                });
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <Page title='Sign Up' classes={['textaligncenter']}>
            <form onSubmit={handleSubmit}>
                <VContainer classes={['spaceev']}>
                    <TextBox title='First Name' hint='Enter your first name' classes={['width80p']} onChange={(e) => setFirstName(e.target.value)} />
                    <TextBox title='Last Name' hint='Enter your last name' classes={['width80p']} onChange={(e) => setLastName(e.target.value)} />
                    <TextBox title='Phone Number' hint='Enter your phone number' classes={['width80p']} onChange={(e) => setNumber(e.target.value)} />
                    <TextBox title='Password' hint='Enter your password' type='password' classes={['width80p']} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" classes={['width40p']}>
                        {loading ? "Loading..." : "Sign Up"}
                    </Button>
                    <p>Already have an account? <Link to="/contractor/login">Log in</Link></p>
                </VContainer>
            </form>
        </Page>
    );
}

export default Signup;

