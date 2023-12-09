import axios from 'axios';

const KEY = '00cc31c17df561925e753da9321ba2b0';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: KEY,
};

export const getTrending = async () => {
  const { data } = await axios.get('/3/trending/movie/week');
  return data.results;
};
export const getMovieById = async id => {
  const { data } = await axios.get(`/3/movie/${id}`);

  return data;
};
export const getCast = async id => {
  const { data } = await axios.get(`/3/movie/${id}/credits`);

  return data;
};
