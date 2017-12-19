import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ExhibitsIndexContainer from "./containers/ExhibitsIndexContainer";

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' >
          <IndexRoute component={ExhibitsIndexContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
