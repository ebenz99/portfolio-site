import './App.scss';
import { COLORS } from '../../constants.js'
import Tab from '../Tab/Tab';
import Landing from '../Landing/Landing';

function App() {
  let tabs = COLORS.map((color, idx) => {
    let tabColor = 'var(--' + color + ')';
    return <Tab key={idx} bgColor={tabColor} />
  });

  return (
    <div className="App">
      < Landing />
      {tabs}
    </div>
  );
}

export default App;
