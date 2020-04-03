import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../../pages/Home';
import Documentation from '../../pages/Documentation';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact
                 path="/"
                 component={Home} />
          <Route path="/documentation/:className?"
                 component={Documentation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
