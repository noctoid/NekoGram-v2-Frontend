import {authHeader, get_username, get_uid} from '../_helpers';
import {current_user_token} from "../_helpers";

import {apiConstants} from "../_constants";

export const userService = {
  login,
  logout,
  getAll,
  getMyPosts,
  getUserPosts,
  getProfile,
  editProfile
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };

  return fetch(apiConstants.auth, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      // alert("user is" + user['access_token']);
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', user['access_token']);
      localStorage.setItem('username', username);
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

function getProfile() {
  return fetch(
    apiConstants.getProfile,
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({"username": get_username()})
    }
  ).then(handle_getMyProfileData)
}

function getAll() {
  return fetch(
    apiConstants.getProfile,
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({"username": "noctoid"}),
    })
    .then(handleResponse)
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(data);
    // alert(data);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    console.log(data);
    return data;
  });
}

function getUserPosts(username) {
  return fetch(
    apiConstants.getUserPosts,
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({"username": username})
    }).then(handle_getMyPostsData)
}

function getMyPosts() {
  return fetch(
    apiConstants.getMyPosts,
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({"username": get_username()})
    }).then(handle_getMyPostsData)
}

function handle_getMyPostsData(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    // console.log("data should be ", data);
    return data.result;
  });
}

function handle_getMyProfileData(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log("data should be ", data);
    localStorage.setItem("uid", data.result.uid);
    return data.result;
  });
}

function editProfile(displayName, quote, themeColor, avatarUrl) {
  console.log("here i go");
  return fetch(
    apiConstants.editProfile,
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({
        "username": get_username(),
        "displayName": displayName,
        "quote": quote,
        "themeColor": themeColor,
        "avatarUrl": avatarUrl
      })
    }).then(console.log);
}
