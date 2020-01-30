// API url generation
const apiUrl = 'https://api.reddit.com/';
const picsSubreddit = `${apiUrl}r/pics/`;
const postsPerPageDefault = 20;
const sortByDefault = 'hot';

// Main function to communicate with the api
const fetchAPI = (url, params = {}) => {
  const encodedParams = Object.entries(params)
    .map(keyValue => keyValue.map(encodeURIComponent).join('='))
    .join('&');

  return fetch(`${url}?${encodedParams}`).then(response =>
    response.json().then(data => ({response: data, status: response.status})),
  );
};

// Calls the api to get a post list based on the page and last image loaded
export const getPostsList = (sortBy = sortByDefault, lastPostName = '') => {
  const finalURL = `${picsSubreddit}${sortBy}.json`;

  let params = {limit: postsPerPageDefault};
  if (lastPostName !== '') {
    params = {...params, after: lastPostName};
  }

  return fetchAPI(finalURL, params);
};
