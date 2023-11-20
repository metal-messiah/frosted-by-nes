

export default function Header(){
    return(
        <div className='flex between padded logo-blue-bg quarter'>
            <img src="logo.jpeg" alt="logo" className='contain-height'/>
            <div className='flex evenly'>
                <div className='button poppins logo-orange-color bold-smaller'>ABOUT</div>
                <div className='button poppins logo-orange-color bold-smaller'>PRICING</div>
                <div className='button poppins logo-orange-color bold-smaller'>CONTACT</div>
            </div>
        </div>
    )
}
