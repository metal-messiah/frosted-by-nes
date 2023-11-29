

export default function ImageContainer(props){
    return(
        <div className={`flex evenly padded ${props.classes || ''}`  }>
            {props.children.map((child, i) => {
                return (
                    <div onClick={() => window.location = child.link} key={child.text + i} className="contain-height pointer-hover" style={{marginTop: '50px', minWidth: '200px', width: child.width || '25vw'}}>
                        <img alt={child.text || child.alt} src={child.src} className={`centered-img image-shadow ${child.classes}`} style={{background: 'rgb(138 115 142)', width: '100%'}}></img>
                        <div className='text-center bold-small margin'>
                            {child.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
