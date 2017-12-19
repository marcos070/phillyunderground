import React, { Component } from 'react';
import { Link } from 'react-router';
import ExhibitShowTile from "../components/ExhibitShowTile"

class ExhibitShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibit: {}
    }
    //dont forget to bind
  }

  getExhibit() {
      let exhibitId = this.props.params.id

      fetch(`/api/v1/exhibits/${exhibitId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
         exhibit: body
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

    componentDidMount(){
      this.getExhibit()
    }

    render() {
        return(
          <div>
            <ExhibitShowTile
              key={this.state.exhibit.id}
              id={this.state.exhibit.id}
              artistName={this.state.exhibit.artist_name}
              genre={this.state.exhibit.genre}
              imageUrl={this.state.exhibit.image_url}
              price={this.state.exhibit.price}
            />
          </div>
        );
    }
}
export default ExhibitShowContainer;
