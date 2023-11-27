import { Link } from "react-router-dom";




export default function HeaderButton(props){    
    const currPath = window.location.pathname
    console.log("currPath...", currPath, 'props.linkTo', props.linkTo)
    return (
        <Link to={props.linkTo}>
            <div className={`button poppins logo-orange-color bold-smaller ${currPath === props.linkTo ? 'selected' : ''}`}>
                {props.text}
            </div>
        </Link>
    )
}