import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../../pages/Home';
import DocumentationHome from '../../pages/DocumentationHome';
import Documentation from '../../pages/Documentation';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact
                 path="/"
                 component={Home} />
          <Route exact
                 path="/documentation"
                 component={DocumentationHome} />
          <Route path="/documentation/:className"
                 component={Documentation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
