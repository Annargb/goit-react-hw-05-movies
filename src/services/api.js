import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '58dce637b823f2c00548f4a3a78afc72';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const fetchReviewsOnMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};

// https://api.themoviedb.org/3/search/movie

export const fetchMovieByRequest = async request => {
  const response = await axios.get(`search/movie?api_key=${KEY}&query=${request}
`);
  console.log(response.data);
  return response.data.results;
};
