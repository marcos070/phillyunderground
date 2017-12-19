import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ExhibitsIndexContainer from "./containers/ExhibitsIndexContainer";

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' >
          <IndexRoute component={ExhibitsIndexContainer}/>
          <Route path='/exhibits' component={ExhibitsIndexContainer}/>
          {/* <Route path='/venues/new' component={VenueFormContainer}/>
          <Route path='/venues/:id/edit' component={VenueFormContainer}/>
          <Route path='/venues/:id' component={VenueShowContainer}/>
          <Route path='/venues/:venue_id/reviews/new' component={ReviewFormContainer}/>
          <Route path='/admin/users' component={UsersIndexContainer} /> */}
        </Route>
      </Router>
    </div>
  )
}

export default App;
