// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
// import './Header.css'; // Import CSS file for styling

// function Header() {
//     return (
//         <div className="header-container">
//             <div className="header-left">
//                 <Link to="/" className="header-logo">Logo</Link>
//             </div>
//             <div className="header-right">
//                 <Link to="/profile" className="header-option">Profile</Link>
//                 <Link to="/signout" className="header-option">Sign Out</Link>
//             </div>
//         </div>
//     );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Header.css'; // Import CSS file for styling

function Header() {
    return (
        <div className="header-container">
            <div className="header-left">
                <Link to="/" className="header-logo">Logo</Link>
            </div>
            <div className="header-right">
                <Link to="/profile" className="header-option">Profile</Link>
                <Link to="/contractor/login" className="header-option">Sign Out</Link>
            </div>
        </div>
    );
}

export default Header;

