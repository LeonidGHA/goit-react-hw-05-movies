const axios = require('axios').default;

const API_KEY = 'bddc52dc503f0bc4d00f10b7a0711377';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrending = async page => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const getSearch = async query => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

// export default getTrending;
