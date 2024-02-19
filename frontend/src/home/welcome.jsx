
import { Button, Container, Page } from './../components'

export default function WelcomeScreen()
{
    return <Page title = 'Welcome Screen' addgap={true} topbar={'Navigate back'}>
        <p className='floatmid largefont'>I am a...</p>
        <Container>
            <Button size={'largefont'}>Supervisor</Button>
            <Button size={'largefont'}>Contractor</Button>
            <Button size={'largefont'}>Labourer</Button>
        </Container>
    </Page>;
}