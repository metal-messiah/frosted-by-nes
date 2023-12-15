import Plain from "./Plain";
import HeaderButton from "./Header-Button";


export default function Header(){
    return(
        <>
            <Plain classes='logo-alt-pink-bg'></Plain>
            <div className='flex between padded logo-blue-bg quarter'>
                <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} onClick={() => window.location = '/'} alt="Frosted By Nes Logo" className='contain-height pointer-hover'/>
                <div className='flex evenly'>
                    <HeaderButton linkTo="/about/" text="ABOUT" />
                    <HeaderButton linkTo="/pricing/" text="PRICING" />
                    <HeaderButton linkTo="/contact/" text="CONTACT" />
                    <HeaderButton linkTo="/resources/" text="RESOURCES" />
                </div>
            </div>
        </>
    )
}
