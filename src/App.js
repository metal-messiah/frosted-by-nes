import './App.css';
import Header from './components/Header';
import Frosting from './components/Frosting';
import Plain from './components/Plain';
import ImageContainer from './components/ImageContainer';

function App() {
  return (
    <div className="App">
      <Plain classes='logo-alt-pink-bg'></Plain>
      <Header />
      <Frosting componentSize='full'>
        CUSTOM BUTTERCREAM CAKES
      </Frosting>
      <Plain classes='logo-alt-pink-bg half margin' secondaryText="this is some gibberish garbage. this is some gibberish garbage. this is some gibberish garbage. this is some gibberish garbage. ">
        WHAT WE DO
      </Plain>
      <ImageContainer classes='full'>
        <div className="contain-height" style={{width: '25vw'}}>
          <img src='lamberth.jpeg' className='centered-img contain-height image-shadow'></img>
          <div className='text-center bold-small margin'>
            CAKES
          </div>
        </div>
        <div className="contain-height" style={{width: '25vw'}}>
          <img src='lamberth.jpeg' className='centered-img contain-height image-shadow'></img>
          <div className='text-center bold-small margin'>
            SPECIALTY CAKES
          </div>
        </div>
        <div className="contain-height" style={{width: '25vw'}}>
          <img src='lamberth.jpeg' className='centered-img contain-height image-shadow'></img>
          <div className='text-center bold-small margin'>
            CUTIE CAKES
          </div>
        </div>
      </ImageContainer>
    </div>
  );
}

export default App;
