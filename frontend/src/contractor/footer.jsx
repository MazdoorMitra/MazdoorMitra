import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Footer.css'; // Import CSS file for styling

function Footer() {
    return (
        <div className="footer-container">
            <Link to="/contractor/dashboard" className="footer-slot">
                <h3>Overview</h3>
                {/* Add content for Overview slot */}
            </Link>
            <Link to="/labourers" className="footer-slot">
                <h3>Labourers</h3>
                {/* Add content for Labourers slot */}
            </Link>
            <Link to="/contractor/attendance" className="footer-slot">
                <h3>Attendance</h3>
                {/* Add content for Attendance slot */}
            </Link>
            <Link to="/payments" className="footer-slot">
                <h3>Payments</h3>
                {/* Add content for Payments slot */}
            </Link>
        </div>
    );
}

export default Footer;
