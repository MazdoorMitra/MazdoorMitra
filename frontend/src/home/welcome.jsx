import React from 'react';
import { Button, Page } from '../components';

function WelcomeScreen() {
    const handleContractorClick = () => {
        // Redirect to contractor signup page
        window.location.href = '/contractor/signup';
    };

    return (
        <Page title='Welcome Screen' topbar='Bruh' gap>
            <p className='floatmid largefont'>I'm a...</p>
            <div className='vertical'>
                <Button size='mediumfont' width='width80p'>Supervisor</Button>
                {/* Use onClick event handler for Contractor button */}
                <Button size='mediumfont' width='width80p' onClick={handleContractorClick}>Contractor</Button>
                <Button size='mediumfont' width='width80p'>Labourer</Button>
            </div>
        </Page>
    );
}

export default WelcomeScreen;
