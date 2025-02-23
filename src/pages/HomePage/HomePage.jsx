import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../Services/moviesAPI';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        if (Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          console.error('The data is not an array:', data);
        }
      } catch (error) {
        console.error('Error loading trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {loading ? <div>Loading...</div> : <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;