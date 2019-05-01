import {dataConstants, userConstants} from '../_constants';
import {dataService, userService} from '../_services';
import {history} from "../_helpers";
import {alertActions} from "./alert.actions";

export const dataActions = {
    getPosting,
    newPost,
    newMedia,
    like,
    comment,
    repost
};


function getPosting(pid) {
    return dispatch => {
        console.log("i am called!", pid);
        dispatch(request({pid}));

        dataService.getPosting(pid)
            .then(
                posting => dispatch(success(posting)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: dataConstants.GET_POSTING_REQUEST } }
    function success(posting) { return { type: dataConstants.GET_POSTING_SUCCESS, posting } }
    function failure(error) { return { type: dataConstants.GET_POSTING_FAILURE, error } }
}

function newPost(txt, mediaUrl) {
    return dispatch => {
        dispatch(request({ txt }));

        dataService.newPost(txt, mediaUrl)
          .then(
            postStatus => {
                dispatch(success(postStatus));
            },
            error => {
                dispatch(failure(error));
            }
          );
    };

    function request(postStatus) { return { type: dataConstants.NEW_POST_REQUEST, postStatus } }
    function success(postStatus) { return { type: dataConstants.NEW_POST_SUCCESS, postStatus } }
    function failure(error)      { return { type: dataConstants.NEW_POST_FAILURE, error } }
}

function newMedia(media) {
    return dispatch => {
        dispatch(request({media}));

        dataService.newMedia(media)
          .then(
            mediaUrl => {dispatch(success(mediaUrl));},
            error => {dispatch(failure(error));}
          );
    };

    function request(mediaUrl) { return { type: dataConstants.NEW_MEDIA_REQUEST, mediaUrl}}
    function success(mediaUrl) { return { type: dataConstants.NEW_MEDIA_SUCCESS, mediaUrl}}
    function failure(error)    { return { type: dataConstants.NEW_MEDIA_FAILURE, error }}
}

function like(uid, pid) {
    return dispatch => {
        dispatch(request({uid, pid}));

        dataService.like(uid, pid)
          .then(
            likeResult => {dispatch(success(likeResult));},
            error => {dispatch(failure(error));}
          );
    };

    function request(likeResult) { return {type: dataConstants.LIKE_REQUEST, likeResult}}
    function success(likeResult) { return { type: dataConstants.LIKE_SUCCESS, likeResult}}
    function failure(error) { return { type: dataConstants.LIKE_FAILURE, error}}
}

function comment() {}

function repost() {}
