

export default function Frosting(props){
    return(
        <div className={'flex center padded frosting center-horiz ' + props.componentSize || 'full' }>
            <div className='bold white poppins text-center padded shadow'>
                {props.children}
            </div>
        </div>
    )
}
