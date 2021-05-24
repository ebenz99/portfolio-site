import './App.scss';
import Home from '../Home/Home';
import About from '../About/About';
import Books from '../Books/Books';
import Music from '../Music/Music';

import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Switch>
    <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/books' component={Books}/>
      <Route exact path='/music' component={Music}/>
    </Switch>
  );
}

export default App;