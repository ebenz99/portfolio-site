import './App.scss';
import Home from '../Home/Home';
import About from '../About/About';
import Books from '../Books/Books';
import Music from '../Music/Music';

import { Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const TRACKING_ID = "273423622";
ReactGA.initialize(TRACKING_ID);

ReactGA.set({ page: history.location.pathname }); // Update the user's current page
ReactGA.pageview(history.location.pathname);

function App() {

    // Initialize google analytics page view tracking
    history.listen(location => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });

  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/books' component={Books}/>
        <Route exact path='/music' component={Music}/>
      </Switch>
    </Router>
  );
}

export default App;