import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import AllContactsModal from './components/AllContactsModal';
import USContactsModal from './components/USContactsModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/all" component={AllContactsModal} />
        <Route exact path="/us" component={USContactsModal} />
      </Switch>
    </Router>    
  );
}

export default App;
