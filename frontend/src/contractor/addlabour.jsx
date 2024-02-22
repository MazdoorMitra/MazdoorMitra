import React, { useState } from 'react';
import { Button, Page, TextBox } from '../components';
import './addlabour.css'; // Import CSS file for additional styling
import Header from './Header';
import Footer from './footer';

function AddLabourPage() {
    // Sample existing labors
    const existingLabors = ['John Doe', 'Jane Smith', 'Bob Johnson'];

    // State to manage the selected labor and whether to show the registration form
    const [selectedLabor, setSelectedLabor] = useState('');
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    // State to manage registration form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [wageRate, setWageRate] = useState('');
    const [wageRateType, setWageRateType] = useState('');
    const [location, setLocation] = useState('');

    // Function to handle the dropdown change
    const handleDropdownChange = (event) => {
        setSelectedLabor(event.target.value);
    };

    // Function to handle form submission for existing labor
    const handleExistingLabourSubmit = () => {
        // Implement logic for submitting form with selected existing labor
        console.log('Selected existing labor:', selectedLabor);
    };

    // Function to handle form submission for new labour
    const handleNewLabourSubmit = () => {
        setShowRegistrationForm(true);
    };

    // Function to handle registration form submission
    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic for registering new labour
        console.log('Form submitted for new labour:', {
            firstName,
            lastName,
            phoneNumber,
            wageRate,
            wageRateType,
            location
        });
        // Reset form fields after submission if needed
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setWageRate('');
        setWageRateType('');
        setLocation('');
    };

    return (
        <>
        <Header/>
        <Page title="Add Labour">
            
            <div className="add-labour-container">
                <select className="select-dropdown" value={selectedLabor} onChange={handleDropdownChange}>
                    <option value="">Select an option...</option>
                    {existingLabors.map((labor, index) => (
                        <option key={index} value={labor}>{labor}</option>
                    ))}
                </select>
                <Button className="submit-button" onClick={handleExistingLabourSubmit} disabled={!selectedLabor}>Submit</Button>
                <h3>OR</h3>
                <Button className="register-button" onClick={handleNewLabourSubmit}>Register New Labour</Button>
                {showRegistrationForm && (
                    <form className="registration-form" onSubmit={handleRegistrationSubmit}>
                        <TextBox title="First Name" hint="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <TextBox title="Last Name" hint="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <TextBox title="Phone Number" hint="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <TextBox title="Wage Rate" hint="Enter wage rate" value={wageRate} onChange={(e) => setWageRate(e.target.value)} />
                        <select className="wage-rate-type-dropdown" value={wageRateType} onChange={(e) => setWageRateType(e.target.value)}>
                            <option value="">Select wage rate type...</option>
                            <option value="hourly">Hourly</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        <TextBox title="Location" hint="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
                        <Button className="register-submit-button" type="submit">Register</Button>
                    </form>
                )}
            </div>
            
            <Footer/>
        </Page>
        </>
    );
}

export default AddLabourPage;
