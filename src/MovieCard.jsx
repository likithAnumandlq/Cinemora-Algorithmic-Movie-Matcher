import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={movie.posterUrl} alt={movie.title} />
      {hover && (
        <div className="overlay">
          <h3>{movie.title}</h3>
          <p>{movie.matchScore}% Match</p>
          <div className="tags">{movie.tags.join(' • ')}</div>
        </div>
      )}
    </div>
  );
};
export default MovieCard;