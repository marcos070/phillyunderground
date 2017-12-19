import React from 'react';
import { Link } from 'react-router';

const ExhibitsIndexTile = props => {
  return(
    <div className='exhibit-tile'>
      <div className='tile-info'>
        <Link to={`/exhibits/${props.id}`}><h2>{props.artistName} - {props.title}</h2></Link>
        <img src={props.imageUrl}/>
      </div>
    </div>
  )
}
export default ExhibitsIndexTile;
