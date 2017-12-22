import React, { Component } from 'react';
import TextField from '../components/TextField';
import { browserHistory } from 'react-router';
import NumberField from '../components/NumberField';



class ExhibitFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: '',
      title: '',
      price: 0,
      genre: '',
      imageUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let newKey = event.target.name;
    let newValue = event.target.value;
    this.setState({
      [newKey]: newValue
    });
  }

  addNewExhibit(newExhibit) {
    debugger;
    fetch('/api/v1/exhibits', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newExhibit),
      headers: {'Content-Type': 'application/json'}
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
      browserHistory.push(`/exhibits`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updateExhibit(newExhibit) {
    fetch(`/api/v1/exhibits/${this.props.params.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(newExhibit),
      headers: {'Content-Type': 'application/json'}
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
      browserHistory.push(`/exhibits`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    if(this.props.params.id){
      fetch(`/api/v1/exhibits/${this.props.params.id}`)
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
          artistName: body.artistName,
          title: body.title,
          price: body.price,
          genre: body.genre,
          imageUrl: body.image_url
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      artist_name: this.state.artistName,
      title: this.state.title,
      price: this.state.price,
      genre: this.state.genre,
      image_url: this.state.imageUrl
    };
    if(this.props.params.id){
      this.updateExhibit(formPayload);
    } else {
      this.addNewExhibit(formPayload);
    }
    this.handleClearForm(event);
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      artistName: '',
      title: '',
      price: 0,
      genre: '',
      imageUrl: ''
    });
  }

  render() {
    return(
      <div className='exhibit-form'>
        <form className="new-exhibit-form callout" onSubmit={this.handleFormSubmit}>
          <div className='row'>
            <TextField
              content={this.state.artistName}
              label="Artist's Name:"
              name="artistName"
              onChange={this.handleChange}
            />
            <TextField
              content={this.state.title}
              label="Title:"
              name="title"
              onChange={this.handleChange}
            />
            <NumberField
              content={this.state.price}
              label="Price:"
              name="price"
              onChange={this.handleChange}
            />
            <TextField
              content={this.state.genre}
              label="Genre:"
              name="genre"
              onChange={this.handleChange}
            />
            <TextField
              content={this.state.imageUrl}
              label="Exhibit Photo URL:"
              name="imageUrl"
              onChange={this.handleChange}
            />
          </div>
          <div className="button-group row">
            <span className="custom-button" onClick={this.handleClearForm} >Clear</span>
            <input className="custom-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ExhibitFormContainer;
