
import { authHeader } from '../_helpers';
import { current_user_token } from "../_helpers";

export const userService = {
    login,
    logout,
    getAll,
    getMyPosts,
    getProfile
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));
    //
    //         return user;
    //     });
    return fetch(`http://127.0.0.1:8000/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            // alert("user is" + user['access_token']);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(user['access_token']));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getProfile() {
    return fetch(
      "http://127.0.0.1/api/u/read/",
      {
          method: "OPTIONS",
          headers: authHeader(),
          body: JSON.stringify({"token": current_user_token()})
      }
    ).then(handle_getProfileData)
}

function getAll() {
    return fetch(
        "http://127.0.0.1:8000/",
        {
            method: "OPTIONS",
            headers: authHeader(),
            // mode: "no-cors",
            // headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNzQ5ZDIzMmQtZWRhYy00NjU2LTgzNmQtN2I0YjQzN2U0ZTg5IiwiZXhwIjoxNTU0OTgxNzIyfQ.kMjbbI3dJvB6QMNqgyi3A9mawXTFWPPdO9yda6TMwxU"}
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

// function getMyPosts() {
//     return fetch(
//         "http://127.0.0.1/api/p/u_get_plist/",
//         // "http://127.0.0.1:8000/",
//         {
//             method: "OPTIONS",
//             headers: authHeader(),
//             body: JSON.stringify({"username": "noctoid"}),
//         }).then(handle_getMyPostsData)
// }

function getMyPosts() {
  return fetch(
    "http://127.0.0.1/api/p/read_my_posts/",
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({"username": "noctoid"})
    }).then(handle_getMyPostsData)
}

function handle_getMyPostsData(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // console.log("data should be ", data);
        return data.result;
    });
}

function handle_getProfileData(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    // console.log("data should be ", data);
    return data;
  });
}

