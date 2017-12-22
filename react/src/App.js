import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ExhibitsIndexContainer from "./containers/ExhibitsIndexContainer";
import ExhibitShowContainer from "./containers/ExhibitShowContainer";
import ExhibitFormContainer from "./containers/ExhibitFormContainer"


const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' >
          <IndexRoute component={ExhibitsIndexContainer}/>
          <Route path='/exhibits' component={ExhibitsIndexContainer}/>
          <Route path='/exhibits/new' component={ExhibitFormContainer}/>
          <Route path='/exhibits/:id' component={ExhibitShowContainer}/>
        </Route>
      </Router>
    </div>
  )
}
export default App;
