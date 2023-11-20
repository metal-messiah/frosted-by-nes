

export default function ImageContainer(props){
    return(
        <div className={`flex evenly padded ${props.classes || ''}`  }>
            {props.children}
        </div>
    )
}
