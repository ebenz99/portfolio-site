import './Home.scss';
import { COLORS, SECTIONS, LINKS } from '../../constants.js'
import Tab from './Tab/Tab';
import Landing from './Landing/Landing';
import { ParallaxProvider } from 'react-scroll-parallax';


function Home() {
  let tabs = COLORS.map((color, idx) => {
    let tabColor = 'var(--' + color + ')';
    return <Tab key={idx} bgColor={tabColor} tabTitle={SECTIONS[idx]} linkTo={LINKS[idx]}/>
  });

  return (
    <div className="Home">
      < Landing />
      <ParallaxProvider>
        <div className="tabSection">
          {tabs}
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default Home;
