

export default function Purple(props){
    return(
        <div className={'flex center logo-purple-bg padded center-horiz ' + props.componentSize || 'half' }>
            <div className='regular logo-pink-color yanone text-center'>
                {props.children}
            </div>
        </div>
    )
}
