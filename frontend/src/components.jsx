import './components.css'



//Simple tile
export function Tile({ heading, width, children }) {
    const head = heading ? <h2>{heading}</h2> : null;

    return <div className={`tile shadow ${width} fitheight squircle`}>
        {head}
        {children}
    </div>;
}

//simple textbox
export function TextBox({ hint, title })
{
    const titlep = title ? <p className='smallfont startfloat'>{title}</p> : null;
    
    return <div className='vertical fitwidth'>
        {titlep}
        <input type='text' className='textinput border1 mediumfont squircle' placeholder={hint}/>
    </ div>;
}


//simple Container
export function Container({ children, title, bordered, })
{
    const titlep = title ? <p className='largefont startfloat'>{title}</p> : null;
    const classes = 'vertical fillwidth fitheight ' + (bordered === true ? 'border1 squircle stdmp' : '');
    
    return <div className={classes}>
        {titlep}
        {children}
    </div>;
}


export function Badge({ value, state, title, on, })
{
    const titlep = title ? <p className='smallfont startfloat'>{title}</p> : null;
    const onstatus = on === true ? 'active' : 'inactive';
    return <p className={`border1 mediumfont vertical badgepad squircle ${onstatus}`}>{titlep}{value}</p>;
}


export function Button({children, size, onClick})
{
    let sizev = size ? size : 'mediumfont';
    return <button onClick = {onClick} className={`floatmid stdmargin ${sizev} fillwidth fitheight`}>{children}</button>;
}



export function Page({ children, title, topbar, addgap})
{
    const top = topbar ? <div className='topbar'><div className='bb'>◁</div>{topbar}</div> : null;
    const tit = title ? <h1 className='floatmid'><bold>{title}</bold></h1> : null;
    const end = addgap === true ? <Container /> : null;

    return <div className={`page ${top ? 'spacebw' : 'spaceev'}`}>
        {top}
        {tit}
        {children}
        {end}
    </div>;
}

