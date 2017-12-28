import React from 'react';
import { Link } from 'react-router';

const ExhibitsIndexTile = props => {
  return(
    <div className='info-tile one-third column' >
        <Link to={`/exhibits/${props.id}`}><h4>{props.title}</h4><h5>{props.artistName}</h5></Link>
        <img className='exhibit-index' src={props.imageUrl}/>
    </div>
  )
}
export default ExhibitsIndexTile;
