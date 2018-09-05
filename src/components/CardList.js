import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({films}) => {
  return (
    <div className='card-list'>
      {films.map(film => {
        return <Card
                title={film.title}
                release={film.release_date}
                director={film.director}
                producer={film.producer}
                key={film.episode_id} 
              />
      })}
    </div>
  );
}

export default CardList;