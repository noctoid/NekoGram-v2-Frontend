import {dataConstants} from "../_constants";


export const posting = (state = [], action) => {
  switch (action.type) {
    case dataConstants.GET_POSTING_REQUEST:
      return {loading: true};
    case dataConstants.GET_POSTING_SUCCESS:
      return {
        items: action.posting
      };
    case dataConstants.GET_POSTING_FAILURE:
      return {items: action.error};
    default:
      return state;
  }
};

export const postStatus = (state = {}, action) => {
  switch (action.type) {
    case dataConstants.NEW_POST_REQUEST:
      return {loading: true};
    case dataConstants.NEW_POST_SUCCESS:
      return {
        items: action.postStatus
      };
    case dataConstants.NEW_POST_FAILURE:
      return { items: action.error };
    default:
      return state;
  }
};

export const mediaUrl = (state = {}, action) => {
  switch (action.type) {
    case dataConstants.NEW_MEDIA_REQUEST:
      return {loading: true};
    case dataConstants.NEW_MEDIA_SUCCESS:
      return {items: action.mediaUrl};
    case dataConstants.NEW_MEDIA_FAILURE:
      return {items: action.error};
    default:
      return state;
  }
};

export const likeResult = (state = {}, action) => {
  switch (action.type) {
    case dataConstants.LIKE_REQUEST:
      return {loading: true};
    case dataConstants.LIKE_SUCCESS:
      return {items: action.likeResult};
    case dataConstants.LIKE_FAILURE:
      return {items: action.error};
    default:
      return state;
  }
};
