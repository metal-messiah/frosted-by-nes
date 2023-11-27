

export default function Plain(props){
    return(
        <div id={props.hash || ''} className={`flex center padded center-horiz ${props.classes || ''}` }>
            <div className='regular logo-blue-color poppins text-center contain-width padded'>
                {props.title ? <div className={'bold-mid ' + props.titleClasses || ''}>{props.title}</div> : ''}
                <div className='bold-smaller logo-blue-color poppins text-center'>{props.secondaryText}</div>
                {props.children}
            </div>
        </div>
    )
}
