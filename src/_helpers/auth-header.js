export function authHeader() {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        // alert("auth-header.js says: user is " + user.access_token);
        // console.log("Authorization: Bearer " + token);
        return {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
        };
    } else {
        return {};
    }
    // if (user && user.token) {
    //     return { 'Authorization': 'Bearer ' + user.token };
    // } else {
    //     return {};
    // }
}