import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <p>Released: {props.release}</p>
      <p>Director: {props.director}</p>
      <p>Producer: {props.producer}</p>
    </div>
  );
}

export default Card;