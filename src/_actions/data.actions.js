import {dataConstants, userConstants} from '../_constants';
import {dataService, userService} from '../_services';
import {history} from "../_helpers";
import {alertActions} from "./alert.actions";

export const dataActions = {
    getPosting,
    newPost
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

function newPost(txt) {
    return dispatch => {
        dispatch(request({ txt }));

        dataService.newPost(txt)
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
