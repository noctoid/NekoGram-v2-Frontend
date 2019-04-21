import { dataConstants } from '../_constants';
import { dataService } from '../_services';

export const dataActions = {
    getPosting
};


function getPosting(pid) {
    return dispatch => {
        console.log("i am called!");
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
