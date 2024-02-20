import { Tile, Page, VContainer, TextBox, Button, HContainer } from "../components";
import right from '../right.svg'


function OverviewSection()
{
    return (
        <VContainer title='Overview' classes={['stdmargin']}>
            <HContainer>
                <Tile classes={['width60p']} style = {{height:'5em', justifyContent : 'space-evenly'}}>
                    <p className="inactive smallfont">Monthly</p>
                    <p>Rs. </p>
                    <p className="mediumfont" style={{fontWeight:'600'}}>2000.0</p>
                </Tile>
                <Tile classes={['width40p']} style = {{height:'5em', justifyContent : 'space-evenly'}}>
                    <p className="inactive smallfont">Weekly</p>
                    <p>Rs. </p>
                    <p className="mediumfont" style={{fontWeight:'600'}}>2000.0</p>
                </Tile>
            </HContainer>
            <HContainer>
                <Tile classes={['width40p']} style = {{height:'5em', justifyContent : 'space-evenly'}}>
                    <p className="inactive smallfont">Daily</p>
                    <p>Rs. </p>
                    <p className="mediumfont" style={{fontWeight:'600'}}>2000.0</p>
                </Tile>
                <Tile classes={['width60p']} style = {{height:'5em', justifyContent : 'space-evenly'}}>
                    <p className="smallfont floatmid autowidth inactive">No. of total workers</p>
                    <p className="mediumfont floatmid" style={{fontWeight:'600'}}>200</p>
                    <p className="floatmid inactive">People</p>
                </Tile>
            </HContainer>
        </VContainer>
    );
}



function ContractorCard({name, info, classes, ...other})
{
    return (
        <Tile style={{'cursor':'pointer'}} classes = {classes} {...other}>
            <HContainer>
                <VContainer classes={['width90p']}>
                    <p className = "mediumfont floatstart" style={{color:'var(--t1)'}}>{name}</p>
                    <p className = "smallfont floatstart" >{info}</p>
                </VContainer>
                <img src = {right} style={{height:'1.3em', transform:'rotate(90deg)',}}
                    className="floatmid" />
            </HContainer>
        </Tile>
    );
}


//Defines a section of contractor cards.
function ContractorsSection()
{
    const handler = () => {console.log('Clicked a card')};
    return (
        <VContainer title = 'Contractors' classes={['stdmargin']} style={{marginTop : '3em'}}>
            <ContractorCard name='Bruh' info='bruh' onClick={handler}/>
            <ContractorCard name='Bruh' info='bruh' onClick={handler}/>
            <ContractorCard name='Bruh' info='bruh' onClick={handler}/>
            <ContractorCard name='Bruh' info='bruh' onClick={handler}/>
        </VContainer>
    );
}



export default function HomePage()
{
    return <Page title = 'Dashboard'>
        <OverviewSection />
        <ContractorsSection />
    </Page>;
}