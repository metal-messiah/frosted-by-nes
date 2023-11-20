

export default function Plain(props){
    console.log(props.classes)
    return(
        <div className={`flex center padded center-horiz ${props.classes || ''}` }>
            <div className='regular logo-blue-color poppins text-center'>
                {props.children}
                <div className='bold-smaller logo-blue-color poppins text-center'>{props.secondaryText}</div>
            </div>
        </div>
    )
}
