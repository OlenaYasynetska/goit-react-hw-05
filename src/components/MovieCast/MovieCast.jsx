import { useParams } from 'react-router-dom';
import {fetchMovieCast} from '../../Services/moviesAPI';
import { useEffect, useState } from 'react';

const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);

useEffect(() => {
    const getCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data.cast);  
    };
    getCast();
}, [movieId]);

return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
          )}
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;


