import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { fetchMovieDetails } from '../../Services/moviesAPI';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/');

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const bannerUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <div className={s.details}>
      <Link to={goBackLink.current}>Go back</Link>
      <div className={s.content}>
        {bannerUrl && <img src={bannerUrl} alt={`${movie.title} banner`} className={s.banner} />}
        <div className={s.text}>
          <h1>{movie.title} ({movie.release_date?.slice(0, 4)})</h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview:</h2>
          <p>{movie.overview}</p>
          <h2>Genres:</h2>
          <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={s.separator}></div>
      <div>
        <h2>Additional Information</h2>
        <ul className={s.linkList}>
          <li>
            <Link to={`/movies/${movieId}/cast`} className={s.link}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} className={s.link}>Reviews</Link>
          </li>
        </ul>
      </div>
      <div className={s.separator}></div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;