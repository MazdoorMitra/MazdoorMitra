
// import { Button, Container, Page } from '../components'


// export default function WelcomeScreen()
// {
//     return <Page title = 'Welcome Screen' addgap={true} topbar={'Bruh'}>
//         <p className='floatmid largefont'>I'm a...</p>
//         <Container >
//             <Button size={'mediumfont'} width={'width80p'}>Supervisor</Button>
//             <Button size={'mediumfont'} width={'width80p'}>Contractor</Button>
//             <Button size={'mediumfont'} width={'width80p'}>Labourer</Button>
//         </Container>
//     </Page>;
// }
import { Button, Page } from '../components';

 function WelcomeScreen() {
    return (
        <Page title='Welcome Screen' addgap={true} topbar={'Bruh'}>
            <p className='floatmid largefont'>I'm a...</p>
            <container>
                <Button size={'mediumfont'} width={'width80p'}>Supervisor</Button>
                <Button size={'mediumfont'} width={'width80p'}>Contractor</Button>
                <Button size={'mediumfont'} width={'width80p'}>Labourer</Button>
            </container>
        </Page>
    );
}

export default WelcomeScreen;
