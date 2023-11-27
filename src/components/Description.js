



export default function Description(props){
    return (
        <div className="flex between padded bold-small dotted-bottom">
            {props.name ? <div className="flex">{props.name}</div> : ''}            
            {props.price ? <div>{props.price}</div> : ''}
            {props.text ? <div>{props.text}</div> : ''}
        </div>
    )
}