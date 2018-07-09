import axios from 'axios';
import { API_BASE_URL } from './config';

export function GET(location) {
  console.log('API GET: ', location);
  return axios
    .get(location)
    .then((response) => {
      console.log('Resolved', response);
      return { response };
    })
    .catch((error) => {
      console.log('Rejected', error, error.response);
      throw error.response ? error.response : error;
    });
}

export function POST(location, body) {
  console.log('API POST: ', location);
  return axios
    .post(location, body)
    .then((response) => {
      console.log('Resolved', response);
      return { response };
    })
    .catch((error) => {
      console.log('Rejected', error, error.response);
      throw error.response ? error.response : error;
    });
}

export function PUT(location, body) {
  console.log('API PUT: ', location);
  return axios
    .put(location, body)
    .then((response) => {
      console.log('Resolved', response);
      return { response };
    })
    .catch((error) => {
      console.log('Rejected', error, error.response);
      throw error.response ? error.response : error;
    });
}

axios.defaults.baseURL = API_BASE_URL;

export function setAuthHeaders(authToken) {
  axios.defaults.headers.common.Authorization = authToken;
}
