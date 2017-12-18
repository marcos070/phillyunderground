import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' >
          <IndexRoute component={VenuesIndexContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
