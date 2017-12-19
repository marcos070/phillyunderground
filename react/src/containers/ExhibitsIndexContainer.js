import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ExhibitsIndexTile from '../components/ExhibitsIndexTile';

class ExhibitsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibits: []
    };
    this.getExhibits = this.getExhibits.bind(this);
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
    return(
      <div>
        {exhibits}
      </div>
    )
  }
}
export default ExhibitsIndexContainer;
