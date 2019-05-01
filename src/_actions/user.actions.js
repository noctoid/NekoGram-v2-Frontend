import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    getMyPosts,
    getProfile,
    editProfile
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

function getMyPosts() {
    return dispatch => {
        dispatch(request());
        userService.getMyPosts()
            .then(
                myposts => dispatch(success(myposts)),
                error => dispatch(failure(error))
            );
    };

    function request() {return { type: userConstants.GETMYPOSTS_REQUEST } }
    function success(myposts) { return { type: userConstants.GETMYPOSTS_SUCCESS, myposts } }
    function failure(error) { return { type: userConstants.GETMYPOSTS_FAILURE, error}}
}

function editProfile(displayName, quote, themeColor, avatarUrl) {
    return dispatch => {
        dispatch(request({displayName, quote, themeColor, avatarUrl}));
        userService.editProfile(displayName, quote, themeColor, avatarUrl)
          .then(
            newProfile => dispatch(success(newProfile)),
            error => dispatch(failure(error))
          );
    }
    function request() {return { type: userConstants.EDIT_PROFILE_REQUEST } }
    function success(newProfile) { return { type: userConstants.EDIT_PROFILE_SUCCESS, newProfile } }
    function failure(error) { return { type: userConstants.EDIT_PROFILE_FAILURE, error}}
}
