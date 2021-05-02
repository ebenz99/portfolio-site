import './App.scss';
import { COLORS } from '../../constants.js'
import Tab from '../Tab/Tab';

function App() {
  let tabs = COLORS.map((color, idx) => {
    let tabColor = 'var(--' + color + ')';
    return <Tab key={idx} bgColor={tabColor} />
  });

  return (
    <div className="App">
      <div className="spacer"></div>
      {tabs}
    </div>
  );
}

export default App;
