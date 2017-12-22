import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ExhibitsIndexTile from '../components/ExhibitsIndexTile';
import ExhibitFormContainer from './ExhibitFormContainer';


class ExhibitsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibits: [],
      currentUser: null
    };
    this.getExhibits = this.getExhibits.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // dont forget bindings
  }

  getExhibits() {
    fetch('/api/v1/exhibits', {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       exhibits: body.exhibits
       //currentUser: body.current_user
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getExhibits();
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/venues/new');
  }



  render() {

    let exhibits = this.state.exhibits.map((exhibit) => {
      return(
        <ExhibitsIndexTile
          key={exhibit.id}
          id={exhibit.id}
          artistName={exhibit.artist_name}
          title={exhibit.title}
          price={exhibit.price}
          genre={exhibit.genre}
          imageUrl={exhibit.image_url}
        />
      )
    })

    let button = <Link to={`/exhibits/new`} >Add a new exhibition</Link>

    return(
      <div>
        <div>
            {button}
        </div>
        <div>
          {exhibits}
        </div>
      </div>
    )
  }
}
export default ExhibitsIndexContainer;
