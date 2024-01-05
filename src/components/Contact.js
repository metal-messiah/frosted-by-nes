import { Helmet } from "react-helmet";
import Description from "./Description";
import Plain from "./Plain";
import EmailIcon from "./icons/EmailIcon";
import InstagramIcon from "./icons/InstagramIcon";
import PhoneIcon from "./icons/PhoneIcon";
import InstagramLink from "./InstagramLink";

export default function Contact(){
    return(
        <div className="App">
            <Helmet>
                <title>Contact Us | Order Now or View Our Socials | Utah</title>
                <link rel="canonical" href="https://frostedbynes.com/contact/" />
                <meta name="description" content="Contact us by phone, email or social media. Submit a request to order or check out our portfolio of custom buttercream cakes." />
            </Helmet>
            <Plain classes='logo-purple-bg' secondaryText='We are located in the Sugar House neighborhood of Salt Lake City, Utah. We serve customers throughout the Wasatch Front, and regularly attend local events like markets and conventions! We hope to see you soon!'>
            </Plain>
            <Plain title="CONTACT" classes='logo-purple-bg three-quarters margin' secondaryText="Feel free to reach out to me directly to help get your custom cake needs met!" >
                <Description name={<EmailIcon />} text={<a href="mailto:nes@frostedbynes.com">nes@frostedbynes.com</a>} />
                <Description name={<PhoneIcon />} text="‪(385) 202-3285" />
                <Description name={<InstagramIcon />} text={<InstagramLink>@frosted.by.nes</InstagramLink>} />
            </Plain>
        </div>
    )
}