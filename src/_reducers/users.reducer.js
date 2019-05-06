import { userConstants } from '../_constants';

export const users = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
};

export const profile = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETPROFILE_REQUEST:
      return {loading: true};
    case userConstants.GETPROFILE_SUCCESS:
      return {items: action.profile};
    case userConstants.GETMYPOSTS_FAILURE:
      return {items: action.error};
    default:
      return state;
  }
};

export const posts = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GET_POSTS_REQUEST:
      return { loading: true };
    case userConstants.GET_POSTS_SUCCESS:
      return {items: action.posts};
    case userConstants.GET_POSTS_FAILURE:
      return {
        items: action.error
      };
    default:
      return state;
  }
};

export const newProfile = (state = {}, action) => {
  switch (action.type) {
    case userConstants.EDIT_PROFILE_REQUEST:
      return { loading: true };
    case userConstants.EDIT_PROFILE_SUCCESS:
      return {items: action.newProfile};
    case userConstants.EDIT_PROFILE_FAILURE:
      return {items: action.error};
    default:
      return state;
  }
};

export const MyFollow = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GET_MY_FOLLOW_REQUEST:
      return {loading: true};
    case userConstants.GET_MY_FOLLOW_SUCCESS:
      return {items: action.MyFollow};
    case userConstants.GET_MY_FOLLOW_FAILURE:
      return {items: action.error};
    default:
      return state;
  }
};

// export function myposts(state = {}, action) {
//   switch (action.type) {
//     case userConstants.GETMYPOSTS_REQUEST:
//       return {
//         loading: true
//       };
//     case userConstants.GETMYPOSTS_SUCCESS:
//       return {
//         items: action.myposts
//       };
//     case userConstants.GETMYPOSTS_FAILURE:
//       return {
//         items: action.error
//       };
//     default:
//       return state
//   }
// }

// const myposts = (state = {}, action) => {
//   switch (action.type) {
//     case userConstants.GETMYPOSTS_REQUEST:
//       return { loading: true };
//     case userConstants.GETMYPOSTS_SUCCESS:
//       return {items: action.myposts};
//     case userConstants.GETMYPOSTS_FAILURE:
//       return {
//         items: action.error
//       };
//     default:
//       return state;
//   }
// }
//
// export  {
//   users,
//   myposts
// };
