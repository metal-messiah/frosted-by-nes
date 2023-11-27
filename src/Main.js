import Frosting from './components/Frosting';
import Plain from './components/Plain';
import ImageContainer from './components/ImageContainer';

function Main() {
  return (
    <div className="App">
      <Frosting componentSize='full'>
        CUSTOM BUTTERCREAM CAKES
      </Frosting>
      <Plain title="WHAT WE DO" classes='logo-alt-pink-bg half margin' secondaryText="this is some gibberish garbage. this is some gibberish garbage. this is some gibberish garbage. this is some gibberish garbage. ">
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
