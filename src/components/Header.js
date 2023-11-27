import { Link } from "react-router-dom";
import Plain from "./Plain";
import HeaderButton from "./Header-Button";


export default function Header(){
    return(
        <>
            <Plain classes='logo-alt-pink-bg'></Plain>
            <div className='flex between padded logo-blue-bg quarter'>
                <img src="logo.jpeg" onClick={() => window.location = '/'} alt="logo" className='contain-height pointer-hover'/>
                <div className='flex evenly'>
                    {/* <HeaderButton linkTo="/" text="HOME" /> */}
                    <HeaderButton linkTo="/about" text="ABOUT" />
                    <HeaderButton linkTo="/pricing" text="PRICING" />
                    <HeaderButton linkTo="/contact" text="CONTACT" />
                </div>
            </div>
        </>
    )
}