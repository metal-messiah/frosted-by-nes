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
        <title>Frosted By Nes | Traditional and Gluten Free Cakes | Utah</title>
        <link rel="canonical" href="https://frostedbynes.com/" />
        <meta name="description" content="Gluten free and traditional buttercream cakes made with fresh ingredients and hand-piped decorations. Located in Salt Lake City, Utah - We turn dreams into cake!" />
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
          <div>Hi Salt Lake City! We are a custom cake shop run by an at-home baker with Celiac disease who loves to make custom style buttercream cakes to order. We use high-quality ingredients and home-made buttercream frosting to make our traditional and gluten free cakes moist, delicious, and beautiful to look at. We also offer a variety of flavors and fillings to suit your taste buds and create our cakes from scratch to match your unique vision. But that’s not all. We also make miniature “cutie cakes”, which are a 4 inch version of our classic buttercream cakes. These are ideal for smaller servings, gifts, or party favors. They are cute, adorable, and just as delicious as our regular cakes. If you are looking for a unique, tasty way to celebrate your next event with traditional and gluten-free options, contact us today and let us know your requirements. We will work with you to design and create a custom cake or cutie cakes that will make your day extra special. Thank you for choosing Frosted By Nes!</div>
          <br />
          <div className="bold-mid">
            <InstagramLink classes="logo-purple-color pointer-hover flex between center center-horiz contain-width"><InstagramIcon fill="#724777" classes="padded" /> Check out a few of my cakes!</InstagramLink>
          </div>
        </>} >
      </Plain>
      <Plain title="WHO WE SERVE" classes='logo-alt-pink-bg grow margin' secondaryText={<>
          We offer our services for <span className="logo-purple-color">pickup</span> and <span className="logo-purple-color">delivery</span> across northern Utah.
          <div className='flex space-evenly top center-horiz'>
            <div className="padded" style={{flex: 1}}>
              <div className="bold-small logo-purple-color">Davis County, Utah</div>
              <div>Bountiful</div>
              <div>Centerville</div>
              <div>Clearfield</div>
              <div>Clinton</div>
              <div>Farmington</div>
              <div>Fruit Heights</div>
              <div>Kaysville</div>
              <div>Layton</div>
              <div>North Salt Lake</div>
              <div>South Weber</div>
              <div>Sunset</div>
              <div>Syracuse</div>
              <div>West Bountiful</div>
              <div>West Point</div>
              <div>Woods Cross</div>
            </div>
            <div className="padded" style={{flex: 1}}>
              <div className="bold-small logo-purple-color">Salt Lake County, Utah</div>
              <div>Bluffdale</div>
              <div>Cottonwood Heights</div>
              <div>Draper</div>
              <div>Herriman</div>
              <div>Holladay</div>
              <div>Midvale</div>
              <div>Millcreek</div>
              <div>Murray</div>
              <div>Riverton</div>
              <div>Salt Lake City</div>
              <div>Sandy</div>
              <div>South Jordan</div>
              <div>South Salt Lake</div>
              <div>Taylorsville</div>
              <div>West Jordan</div>
              <div>West Valley City</div>
            </div>
            <div className="padded" style={{flex: 1}}>
              <div className="bold-small logo-purple-color">Summit County, Utah</div>
              <div>Coalville</div>
              <div>East Basin</div>
              <div>Echo</div>
              <div>Francis</div>
              <div>Henefer</div>
              <div>Hoytsville</div>
              <div>Kamas</div>
              <div>Marion</div>
              <div>Oakley</div>
              <div>Park City</div>
              <div>Peoa</div>
              <div>Samak</div>
              <div>Snyderville</div>
              <div>Wanship</div>
              <div>Woodland</div>
            </div>
            <div className="padded" style={{flex: 1}}>
              <div className="bold-small logo-purple-color">Utah County, Utah</div>
              <div>Alpine</div>
              <div>American Fork</div>
              <div>Cedar Hills</div>
              <div>Eagle Mountain</div>
              <div>Elk Ridge</div>
              <div>Highland</div>
              <div>Lehi</div>
              <div>Lindon</div>
              <div>Mapleton</div>
              <div>Orem</div>
              <div>Payson</div>
              <div>Pleasant Grove</div>
              <div>Provo</div>
              <div>Salem</div>
              <div>Santaquin</div>
              <div>Saratoga Springs</div>
              <div>Spanish Fork</div>
              <div>Springville</div>
              <div>Vineyard</div>
              <div>Woodland Hills</div>
            </div>
            <div className="padded" style={{flex: 1}}>
              <div className="bold-small logo-purple-color">Weber County, Utah</div>
              <div>Farr West</div>
              <div>Harrisville</div>
              <div>Huntsville</div>
              <div>Hooper</div>
              <div>Marriott Slaterville</div>
              <div>North Ogden</div>
              <div>Ogden</div>
              <div>Plain City</div>
              <div>Pleasant View</div>
              <div>Riverdale</div>
              <div>Roy</div>
              <div>South Ogden</div>
              <div>Uintah</div>
              <div>Washinton Terrace</div>
              <div>West Haven</div>
            </div>
            <div className="padded" style={{flex: 1}}>
              <div className="bold-small logo-purple-color">Wasatch County, Utah</div>
              <div>Charleston</div>
              <div>Daniel</div>
              <div>Heber City</div>
              <div>Hideout</div>
              <div>Independence</div>
              <div>Interlaken</div>
              <div>Midway</div>
              <div>Soldier Summit</div>
              <div>Wallsburg</div>
              <div>Wildwood</div>
            </div>
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
