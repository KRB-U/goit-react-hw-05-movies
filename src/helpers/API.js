import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '1313eb7d87ffc79c96ba5fefca3b8f25',
};

const getMovieCredits = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?language=en-US`);

  return response.data;
};

const getMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?language=en-U`);

  return response.data;
};

const getMovieReviews = async (movieId, page = 1) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?language=en-US&page=${page}`
  );

  return response;
};

const getTrending = async () => {
  const response = await axios.get(`trending/all/day?language=en-US`);

  return response.data;
};

const searchMovies = async (page = 1, query) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
  );

  return response;
};

export {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getTrending,
  searchMovies,
};
