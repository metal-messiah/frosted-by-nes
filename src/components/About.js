import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import Plain from "./Plain";

export default function About(){
    return(
        <div className="App">
            <Plain title="ABOUT FROSTED BY NES" titleClasses="logo-alt-pink-color pink-shadow" classes='double margin' secondaryText={
            <div className="logo-alt-pink-color">
                <div>Hi! I'm Janesa AKA "Nes", and I created <span className='logo-orange-color italic'>Frosted By Nes</span> to share my love of decorating custom buttercream cakes. I worked in a bakery as a cake decorator where I soon realized that I had a talent for creating beautiful and delicious cakes outside the norms of a typical bakery selection. </div>
                <div>I have always made custom buttercream cakes for my friends and family, to celebrate special occasions. I decided to turn my hobby into a small business that could serve the community I love, by making custom buttercream creations. My cakes only use high quality ingredients and are made to order, decorated with intricate piping, lace, flowers and more. True to my heritage, I specialize in mexican vanilla cakes and buttercreams, but I love to work with my clients and strive to make <span className='logo-orange-color italic'>any cake flavor and design that you can dream up</span>.</div>
                <div>I have <span className='logo-orange-color italic'>celiac disease</span>, so I know how hard it can be to find gluten free cakes that look and taste good. That’s why I specialize in making gluten free cakes that are moist, fluffy, and flavorful. I use delicious gluten free flour blends that feature almond, coconut, rice and tapioca flours, and am diligent to avoid any cross-contamination in my kitchen. I am also available to make standard cakes upon request, however I would not be surprised to find that you may prefer my gluten free cakes, they are that good! I enjoy bringing joy and sweetness to people’s lives through cake. If you are looking for a stunning and scrumptious cake for your next event, please consider supporting my journey by following me on <a href="https://instagram.com/frosted.by.nes">Instagram.</a>To design and order your own custom cakes, please <Link to="/contact">reach out to me directly</Link>. I look forward to meeting you!</div>
            </div>
    }>
        <ImageContainer classes='full' children={[
                {src: 'nes-headshot.jpg', text: ``},
                ]}>
            </ImageContainer>

            </Plain>
            
        </div>
    )
}