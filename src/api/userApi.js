import 'whatwg-fetch';  // this polyfill will ensure that this code runs in browsers that don't yet support fetch natively
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl();

export function getUsers() {  //public function
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) { // just supporting get but I can add functions for handling put, post and delete requests.
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
