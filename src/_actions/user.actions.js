import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import {get_uid, get_username, history} from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    getFeed,
    getMyPosts,
    getUserPosts,
    getProfile,
    getUserProfile,
    editProfile,
    follow,
    unfollow,
    getMyFollow
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getProfile() {
    return dispatch => {
        dispatch(request());

        userService.getProfile()
          .then(
            profile => dispatch(success(profile)),
            error => dispatch(failure(error))
          );
    };

    function request() { return { type: userConstants.GETPROFILE_REQUEST}}
    function success(profile) { return { type: userConstants.GETPROFILE_SUCCESS, profile }}
    function failure(error) { return { type: userConstants.GETMYPOSTS_FAILURE, error }}
}

function getUserProfile(username) {
    return dispatch => {
        dispatch(request({username}));

        userService.getUserProfile(username)
          .then(
            profile => dispatch(success(profile)),
            error => dispatch(failure(error))
          );
    };

    function request() { return { type: userConstants.GETPROFILE_REQUEST}}
    function success(profile) { return { type: userConstants.GETPROFILE_SUCCESS, profile }}
    function failure(error) { return { type: userConstants.GETMYPOSTS_FAILURE, error }}
}

function getFeed() {
    return dispatch => {
        dispatch(request());

        userService.getFeed()
          .then(
            posts => dispatch(success(posts)),
            error => dispatch(failure(error))
          );
    };
    function request() {return {type: userConstants.GET_POSTS_REQUEST}}
    function success(posts) {return {type: userConstants.GET_POSTS_SUCCESS, posts}}
    function failure(error) {return {type: userConstants.GET_POSTS_FAILURE, error}}
}

function getMyPosts() {
    return dispatch => {
        dispatch(request());
        userService.getMyPosts()
            .then(
                posts => dispatch(success(posts)),
                error => dispatch(failure(error))
            );
    };

    function request() {return { type: userConstants.GET_POSTS_REQUEST } }
    function success(posts) { return { type: userConstants.GET_POSTS_SUCCESS, posts } }
    function failure(error) { return { type: userConstants.GET_POSTS_FAILURE, error}}
}

function getUserPosts(username) {
    return dispatch => {
        dispatch(request({username}));
        userService.getUserPosts(username)
          .then(
            posts => dispatch(success(posts)),
            error => dispatch(failure(error))
          );
    };

    function request() {return { type: userConstants.GET_POSTS_REQUEST } }
    function success(posts) { return { type: userConstants.GET_POSTS_SUCCESS, posts } }
    function failure(error) { return { type: userConstants.GET_POSTS_FAILURE, error}}
}

function editProfile(displayName, quote, themeColor, avatarUrl) {
    return dispatch => {
        dispatch(request({displayName, quote, themeColor, avatarUrl}));
        userService.editProfile(displayName, quote, themeColor, avatarUrl)
          .then(
            newProfile => dispatch(success(newProfile)),
            error => dispatch(failure(error))
          );
    };
    function request() {return { type: userConstants.EDIT_PROFILE_REQUEST } }
    function success(newProfile) { return { type: userConstants.EDIT_PROFILE_SUCCESS, newProfile } }
    function failure(error) { return { type: userConstants.EDIT_PROFILE_FAILURE, error}}
}

function follow(username) {
    return dispatch => {
        dispatch(request());
        userService.follow(username);
        userService.getFollow(get_username())
          .then(
            MyFollow => {dispatch(success(MyFollow));window.location.reload();},
            error => dispatch(failure(error))
          );
    };

    function request() { return {type: userConstants.FOLLOW_REQUEST}}
    function success(MyFollow) { return {type: userConstants.FOLLOW_SUCCESS, MyFollow}}
    function failure(error) { return {type: userConstants.FOLLOW_FAILURE, error}}
}

function unfollow(username) {
    return dispatch => {
        dispatch(request());
        userService.unfollow(username);
        userService.getFollow(get_username())
          .then(
            MyFollow => {dispatch(success(MyFollow)); window.location.reload();},
            error => dispatch(failure(error))
          );
    };

    function request() { return {type: userConstants.UNFOLLOW_REQUEST}}
    function success(MyFollow) { return {type: userConstants.UNFOLLOW_SUCCESS, MyFollow}}
    function failure(error) { return {type: userConstants.UNFOLLOW_FAILURE, error}}
}

function getMyFollow() {
    return dispatch => {
        dispatch(request());
        userService.getFollow(get_uid())
          .then(
            MyFollow => dispatch(success(MyFollow)),
            error => dispatch(failure(error))
          );
    };

    function request() { return {type: userConstants.GET_MY_FOLLOW_REQUEST}}
    function success(MyFollow) { return {type: userConstants.GET_MY_FOLLOW_SUCCESS, MyFollow}}
    function failure(error) { return {type: userConstants.GET_MY_FOLLOW_FAILURE, error}}
}
