import Frosting from './components/Frosting';
import Plain from './components/Plain';
import ImageContainer from './components/ImageContainer';

function Main() {
  return (
    <div className="App">
      <Frosting componentSize='full'>
        CUSTOM BUTTERCREAM CAKES
      </Frosting>
      <Plain title="WHAT WE DO" classes='logo-alt-pink-bg grow margin' secondaryText="We are a gluten-free custom cake shop run by a baker with Celiac disease who loves to make custom lambeth style buttercream cakes to order. We use high-quality gluten-free ingredients and buttercream frosting to make our cakes moist, delicious, and beautiful to look at. We also offer a variety of flavors and fillings to suit your taste buds and strive to create our cakes to order to match your unique vision. But that’s not all. We also make miniature “cutiecakes”, which are a 4 inch version of our lambeth buttercream cake. These are ideal for smaller servings, gifts, or party favors. They are cute, adorable, and just as delicious as our regular lambeth cakes. If you are looking for a unique, tasty way to celebrate your next event with gluten-free options, contact us today and let us know your requirements. We will work with you to design and create a custom lambeth cake or cutiecakes that will make your day extra special. Thank you for choosing Frosted By Nes!">
      </Plain>
      <ImageContainer classes='full' children={[
        {src: 'lamberth_transparent.png', text: 'CAKES', classes:'contain-height', link:'/pricing#6-inch-rounds'},
        {src: 'tildeath.png', text: 'SPECIALTY CAKES', classes:'contain-height', link: '/pricing#custom-cakes'},
        {src: 'cutiecakes.png', text: 'CUTIE CAKES', classes:'contain-height', link: '/pricing#cutie-cakes'},
        ]}>
      </ImageContainer>
    </div>
  );
}

export default Main;
