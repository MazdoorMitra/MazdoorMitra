import './components.css'



/**
 * A simple tile component.
 * `other` is applied on the root div.
 * `classes` is applied on the root div.
 */
export function Tile({ title, children, classes, ...other }) {

    title = title && <h4>{title}</h4>;

    let cssclasses = 'vertical tile shadow fitheight squircle';
    if (classes)
    {
        classes.forEach(element => {
            cssclasses += (' ' + element);
        });
    }

    return <div className={cssclasses} {...other}>
        {title}
        {children}
    </div>;
}

/**
 * Simple textbox.
 * `other` is applied on the inner `<input>` element.
 * `textboxclasses` is applied on the `<input>` element.
 * `divclasses` is applied on the root div.
 */
export function TextBox({ title, hint, textboxclasses, divclasses, ...other })
{
    title = title && <p className='smallfont startfloat'>{title}</p>;
    
    let textclasses = 'textinput border1 squircle';
    if (textboxclasses)
    {
        textboxclasses.forEach(element => {
            textclasses += (' ' + element);
        });
    }

    let divboxclasses = 'vertical';
    if (divclasses)
    {
        divclasses.forEach(element => {
            divboxclasses += (' ' + element);
        });
    }

    return <div className={divboxclasses}>
        {title}
        <input type='text' className={textclasses} placeholder={hint} {...other}/>
    </ div>;
}


/**
 * A container that holds stuff vertically.
 * `classes` is applied on the root div.
 * `other` is applied on the root div.
 */
export function VContainer({ title, children, classes, ...other})
{
    title = title && <p className='largefont startfloat'>{title}</p>;
    
    let cssclasses = 'vertical autowidth fitheight';
    if (classes)
    {
        classes.forEach(element => {
            cssclasses += (' ' + element);
        });
    }
    
    return <div className={cssclasses} {...other}>
        {title}
        {children}
    </div>;
}


/**
 * A container that holds stuff horizontally.
 * `classes` is applied on the root div.
 * `other` is applied on the root div.
 */
export function HContainer({ title, children, classes, ...other})
{
    title = title && <p className='largefont startfloat'>{title}</p>;
    
    let cssclasses = 'horizontal autowidth fitheight';
    if (classes)
    {
        classes.forEach(element => {
            cssclasses += (' ' + element);
        });
    }
    
    return <div className={cssclasses} style={{margin : 0}} {...other}>
        {title}
        {children}
    </div>;
}





export function Badge({ value, state, title, on, })
{
    const titlep = title ? <p className='smallfont startfloat'>{title}</p> : null;
    const onstatus = on === true ? 'active' : 'inactive';
    return <p className={`border1 mediumfont vertical badgepad squircle ${onstatus}`}>{titlep}{value}</p>;
}



/**
 * A simple button.
 * `classes` is applied on the root `<button>` element.
 * `other` is applied on the root `<button>` element.
 */
export function Button({children, classes, ...other})
{
    let cssclasses = 'shadow floatmid stdmargin fitheight mediumfont fitwidth';
    if (classes)
    {
        classes.forEach(element => {
            cssclasses += (' ' + element);
        });
    }

    return <button className={cssclasses} {...other}>
        {children}
    </button>;
}


/**
 * A simple top navigation bar
 */
export function TopBar({ title })
{
    return <div className='topbar shadow'>
        <div className='pointer horizontal width10p squircle'><p className='floatmid textaligncenter fillwidth'>❮</p></div>
        <p className='floatmid mediumfont width90p textaligncenter'>{title}</p>
    </div>;
}


/**
 * Main page component. Put everything else inside this.
 * @param {title} title string value to display as the title.
 * @param {topbar} topbar string value to display in the top nav bar. if not given, the bar is not shown.
 * @param {gap} gap boolean value. if true, a gap is added at the end of the page.
 * 
 * `classes` is applied to the root div.
 * `other` is applied to the root div.
 */
export function Page({ title, children, topbar, gap, classes, ...other })
{
    title = title && <h1 className='floatmid' style={{margin:'0.5em'}}>{title}</h1>;
    topbar = topbar && <TopBar title = {topbar}></TopBar>;
    gap = gap && <VContainer />;

    //${topbar ? 'spacebw' : 'spaceev'}`
    let cssclasses = `page`;
    if (classes)
    {
        classes.forEach(element => {
            cssclasses += (' ' + element);
        });
    }


    return <div className={cssclasses} {...other}>
        {topbar}
        {title}
        {children}
        {gap}
    </div>;
}

