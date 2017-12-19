import React from 'react';
import { Link } from 'react-router';

const ExhibitsIndexTile = props => {
  return(
    <div className='exhibit-tile'>
      <div className='tile-info'>
        <Link to={`/exhibits/${props.id}`}><h2>{props.artistName} - {props.title}</h2></Link>
        <ul>
          <li>{props.price}$</li>
          <li><em>{props.genre}</em></li>
        </ul>
        <img src={props.imageUrl}/>
      </div>
    </div>
  )
}
export default ExhibitsIndexTile;
