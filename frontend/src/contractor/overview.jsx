import { Tile, Page, VContainer, TextBox, Button, HContainer } from "../components";
import right from '../right.svg';
import Header from "./Header";
import Footer from "./footer";
import { Link } from 'react-router-dom'; // Import Link for navigation

// function OverviewSection() {
//     return (
//         <></>
//     );
// }

function ContractorCard({ name, info, classes, path, ...other }) {
    return (
        <Tile style={{ cursor: 'pointer' }} classes={classes} {...other}>
            <HContainer>
                <VContainer classes={['width90p']}>
                    <p className="mediumfont floatstart" style={{ color: 'var(--t1)' }}>{name}</p>
                    <p className="smallfont floatstart">{info}</p>
                </VContainer>
                <img src={right} style={{ height: '1.3em', transform: 'rotate(90deg)' }} className="floatmid" />
            </HContainer>
        </Tile>
    );
}

//Defines a section of contractor cards.
function ContractorsSection() {
    const handler = () => { console.log('Clicked a card') };
    return (
        <VContainer  classes={['stdmargin']} style={{ marginTop: '3em' }}>
            <Link to="/contractor/dashboard">
             <ContractorCard name='Construction Site A' info='bruh' onClick={handler} />
            </Link>
            <ContractorCard name='Construction Site B' info='bruh' onClick={handler} />
            <ContractorCard name='Construction Site C' info='bruh' onClick={handler} />
            <Link to="/contractor/newproject">
                <ContractorCard name='Add New Project' onClick={handler} />
            </Link>
        </VContainer>
    );
}

export default function Overview() {
    return (
        <>
            <Header /> 
            <Page title='My Projects'>
                {/* <OverviewSection /> */}
                <ContractorsSection />
            </Page>
            {/* <Footer /> */}
        </>
    );
}


<Link to="/contractor">
                  <Button classes={['stdmp']} onClick={() => console.log("Project created!")}>Create Project</Button>
                </Link>