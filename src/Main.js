import Frosting from './components/Frosting';
import Plain from './components/Plain';
import ImageContainer from './components/ImageContainer';
import InstagramIcon from './components/icons/InstagramIcon';
import { Helmet } from 'react-helmet';
import InstagramLink from './components/InstagramLink';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Helmet>
        <title>Frosted By Nes | Gluten Free Buttercream Cakes | Utah</title>
        <link rel="canonical" href="https://frostedbynes.com/" />
        <meta name="description" content="Gluten free buttercream cakes made with fresh ingredients and hand-piped decorations. Located in Salt Lake City, Utah - We can make your dreams become cake!" />
      </Helmet>
      <Frosting componentSize='grow'>
        CUSTOM BUTTERCREAM CAKES
      </Frosting>
      <ImageContainer classes='full mobile-squish' children={[
        {src: process.env.PUBLIC_URL+'/lamberth_transparent.png', text: 'CAKES', classes:'contain-height', link:'/pricing#6-inch-rounds', alt:"Lambeth Style Buttercream Cake"},
        {src: process.env.PUBLIC_URL+'/tildeath.png', text: 'SPECIALTY CAKES', classes:'contain-height', link: '/pricing#custom-cakes', alt:"Coffin Shaped Specialty Buttercream Cake" },
        {src: process.env.PUBLIC_URL+'/cutiecakes.png', text: 'CUTIE CAKES', classes:'contain-height', link: '/pricing#cutie-cakes', alt:'4 Inch Lunchbox Style Cakes Called Cutie Cakes'},
        ]}>
      </ImageContainer>
      <Plain title="WHAT WE DO" classes='logo-alt-pink-bg grow margin' secondaryText={<>
          <div>Hi Salt Lake City! We are a gluten-free custom cake shop run by an at-home baker with Celiac disease who loves to make custom style buttercream cakes to order. We use high-quality gluten-free ingredients and home-made buttercream frosting to make our cakes moist, delicious, and beautiful to look at. We also offer a variety of flavors and fillings to suit your taste buds and create our cakes from scratch to match your unique vision. But that’s not all. We also make miniature “cutie cakes”, which are a 4 inch version of our classic buttercream cakes. These are ideal for smaller servings, gifts, or party favors. They are cute, adorable, and just as delicious as our regular cakes. If you are looking for a unique, tasty way to celebrate your next event with gluten-free options, contact us today and let us know your requirements. We will work with you to design and create a custom cake or cutie cakes that will make your day extra special. Thank you for choosing Frosted By Nes!</div>
          <br />
          <div className="bold-mid">
            <InstagramLink classes="logo-purple-color pointer-hover flex between center center-horiz contain-width"><InstagramIcon fill="#724777" classes="padded" /> Check out a few of my cakes!</InstagramLink>
          </div>
        </>} >
      </Plain>
      {/* <Plain title="UPCOMING EVENTS" classes='logo-alt-pink-bg grow margin' secondaryText='Catch us at live events'>
        <div className="bold-mid">
          • 12/9/2023 | <Link className="logo-purple-color pointer-hover" to="https://millcreekcommon.org/">Holiday Shoppes Saturday Market</Link><br />Millcreek City Hall Public Market | 11-3pm
        </div>
      </Plain> */}
    </div>
  );
}

export default Main;
