import { dataConstants } from "../_constants";

export const posting = (state = {}, action) => {
    switch (action.type) {
        case dataConstants.GET_POSTING_REQUEST:
            return { loading: true };
        case dataConstants.GET_POSTING_SUCCESS:
            return {items: action.posting};
        case dataConstants.GET_POSTING_FAILURE:
            return {items: action.error};
        default:
            return state;
    }
};
