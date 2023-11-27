import Description from "./Description";
import Plain from "./Plain";
import EmailIcon from "./icons/EmailIcon";
import InstagramIcon from "./icons/InstagramIcon";
import PhoneIcon from "./icons/PhoneIcon";

export default function Contact(){
    return(
        <div className="App">
            <Plain title="CONTACT" classes='logo-purple-bg three-quarters margin' secondaryText="Feel free to reach out to me directly to help get your custom cake needs met!" >
                <Description name={<EmailIcon />} text={<a href="mailto:frostedbynes@gmail.com">frostedbynes@gmail.com</a>} />
                <Description name={<PhoneIcon />} text="‪(385) 202-3285" />
                <Description name={<InstagramIcon />} text={<a href="https://instagram.com/frosted.by.nes">@frosted.by.nes</a>} />
            </Plain>
        </div>
    )
}