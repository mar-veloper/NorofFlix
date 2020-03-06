const API_URL = `http://api.tvmaze.com/shows`;

function callApi(func, apiUrl) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(json => func(json))
    .catch(err => console.log(err));
}
