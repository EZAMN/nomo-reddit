// API url generation
const apiUrl = 'https://api.reddit.com/ ';
const picsSubreddit = `${apiUrl}r/pics/`;
const postsPerPageDefault = 24;
const sortByDefault = 'hot';

// Main function to communicate with the api
const fetchAPI = (url, params = {}) => {
  const encodedParams = Object.entries(params).map((keyValue) => keyValue.map(encodeURIComponent).join('=')).join('&');

  return fetch(`${url}?${encodedParams}`)
    .then((response) => response.json()
      .then((data) => ({ response: data, status: response.status })));
};

// Calls the api to get a post list
export const getPicsList = (sortBy = sortByDefault, page = 1) => fetchAPI(`${picsSubreddit}${sortBy}'.json`, { per_page: postsPerPageDefault, page });
