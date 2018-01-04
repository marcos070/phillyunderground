import React, { Component } from 'react';
import { Link, Route, Redirect, browserHistory } from 'react-router';
import ExhibitShowTile from "../components/ExhibitShowTile";
import SelectField from '../components/SelectField';
import size from '../Constant';

class ExhibitShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibit: {},
      quantity: '',
      size: '',
      errors: [],
      exhibit_id: this.props.params.id
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

  handleChange(event) {
    let newKey = event.target.name;
    let newValue = event.target.value;
    this.setState({
      [newKey]: newValue
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      quantity: this.state.quantity,
      size: this.state.size,
      exhibit_id: this.state.exhibit_id
    };
    this.addToCart(formPayload);
    this.handleClearForm(event);
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      quantity: '',
      size: ''
    });
  }

  addToCart(cart) {
    fetch('/api/v1/checkouts', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(cart),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => this.processResponse(response))
    .then(body => {
      browserHistory.push(`/exhibits/${this.state.exhibit_id}`);
    })
    .catch(response => {
      this.setState({
        errors: response.errors
      });
      let errorMessage = `${response.status} (${response.statusText})`;
      console.error(`Error in fetch: ${errorMessage}`);
    });
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
          <div className="selection-fields">
            <div id='errors'>{this.state.errors}</div>
              <form onSubmit={this.handleFormSubmit}>
                <SelectField
                  content={this.state.quantity}
                  label="Quantity"
                  name="quantity"
                  options={[1, 2, 3, 4, 5]}
                  onChange={this.handleChange}
                />
                <SelectField
                content={this.state.size}
                label="Size:"
                name="size"
                options={size}
                onChange={this.handleChange}
              />
                <div className="button-group">
                  <span className="custom-button" onClick={this.handleClearForm} >Clear</span>
                  <input className="button" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        );
    }
}
export default ExhibitShowContainer;
