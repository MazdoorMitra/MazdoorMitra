import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, TextBox, Page, HContainer, VContainer } from '../components';

function Register() {
    const [authCode, setAuthCode] = useState('');

  const handleAuthCodeChange = (event) => {
    setAuthCode(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission, perhaps sending the authentication code to a server
    console.log('Authentication code submitted:', authCode);
    // Reset the input field after submission if needed
    setAuthCode('');
  };
  return (
    <div>
      <Page title="Labour Register">
        <VContainer>
          <TextBox
            title="Authentication Code:"
            hint="Enter your authentication code"
            textboxclasses={['stdpadding']}
            divclasses={['stdmp']}
            value={authCode}
            onChange={handleAuthCodeChange}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </VContainer>
      </Page>
    </div>

    
  )
}

export default Register