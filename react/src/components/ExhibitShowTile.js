import React from 'react';
import { Link } from 'react-router';

const ExhibitShowTile = props => {
  return(
    <div>
      <div className="info-tile">
        <div className="backdrop">
          <div>
            <img className='exhibit-image' src={props.imageUrl}/>
          </div>
        </div>
          <h1>{props.title}</h1>
          <hr/>
            <div>
              <h4>Artist:</h4>
              <p>{props.artistName}</p>
            </div>
            <div>
              <h4>Exhibit Information:</h4>
              <p>Genre: {props.genre}</p>
              <p>Price: {props.price}$</p>
            </div>
        </div>
      </div>
  )
}
export default ExhibitShowTile;
