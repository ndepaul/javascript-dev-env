import 'whatwg-fetch';  // this polyfill will ensure that this code runs in browsers that don't yet support fetch natively
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl();

export function getUsers() {  //public function
  return get('users');
}

function get(url) { // just supporting get but I can add functions for handling put, post and delete requests.
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
