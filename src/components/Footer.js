import Plain from "./Plain";
import HeaderButton from "./Header-Button";


export default function Footer(){
    return(
        <>
            <Plain classes='logo-alt-pink-bg'></Plain>
            <div className='flex center center-horiz padded logo-blue-bg grow'>
                <div className='flex center certer-horiz'>
                    <HeaderButton linkTo="/privacy/" text="PRIVACY" />
                    <HeaderButton linkTo="/disclosure/" text="DISCLOSURE" />
                    <HeaderButton linkTo="/contact/" text="CONTACT" />
                </div>
            </div>
        </>
    )
}