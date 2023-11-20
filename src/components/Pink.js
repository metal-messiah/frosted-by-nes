

export default function Pink(props){
    return(
        <div className={'flex center logo-pink-bg padded center-horiz ' + props.componentSize || 'half' }>
            <div className='regular logo-purple-color yanone text-center'>
                {props.children}
            </div>
        </div>
    )
}
