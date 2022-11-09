import axios from 'axios';

const API_KEY = '1a6852dab5b963d197c9fca4c59c3eb7';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function fetchMovies() {
  const { data } = await axios.get(`/3/trending/all/day`, {
    params: { api_key: API_KEY },
  });
  return data;
}

export async function fetchMovieDetails(id) {
  const { data } = await axios.get(`/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
}
export async function fetchCast(id, signal) {
  const { data } = await axios.get(`/3/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
    signal,
  });
  return data;
}

export async function fetchReview(id) {
  const { data } = await axios.get(`/3/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data;
}
export async function fetchMovieByName(query, page) {
  const { data } = await axios.get(`/3/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
      query,
    },
  });
  return data;
}