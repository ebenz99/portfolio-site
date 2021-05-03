import './App.scss';
import { COLORS } from '../../constants.js'
import Tab from '../Tab/Tab';
import Landing from '../Landing/Landing';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  let tabs = COLORS.map((color, idx) => {
    let tabColor = 'var(--' + color + ')';
    return <Tab key={idx} bgColor={tabColor} />
  });

  return (
    <div className="App">
      < Landing />
      <ParallaxProvider>
        {tabs}
      </ParallaxProvider>
    </div>
  );
}

export default App;
