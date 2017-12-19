import React from 'react';
import { Link } from 'react-router';

const ExhibitShowTile = props => {
  return(
    <div className=''>
      <div className='exhibit-header clearfix'>
        <div className='exhibit-details'>
          {/* <Link to={`/exhibits/${props.id}/edit`} className='custom-button edit-button'>Edit</Link> */}
          <img src={props.imageUrl}/>
          <h1 className='title-show clearfix'>{props.title}</h1>
          <hr/>
            <div className='info-column'>
              <h4>Artist:</h4>
              <p>{props.artistName}</p>
            </div>
            <div className='info-column'>
              <h4>Exhibit Information:</h4>
              <p>Genre: {props.genre}</p>
              <p>Price: {props.price}$</p>
            </div>
        </div>
        <div className='cf'></div>
      </div>
    </div>
  )
}
export default ExhibitShowTile;
