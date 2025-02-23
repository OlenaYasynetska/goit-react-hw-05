import axios from 'axios';

const API_KEY = '704ad332e8246742d3e7e2e15020c5da';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByQuery = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return data;
  } catch (error) {
    console.error('Error when searching for movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error('Error when fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error('Error when fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error('Error when fetching movie reviews:', error);
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error('Error when fetching trending movies:', error);
    throw error;
  }
};
