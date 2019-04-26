import {ActionTypes} from '../_constants/ui.constant'

const showModal = ({ modalProps, modalType }) => dispatch => {
  dispatch({
    type: ActionTypes.SHOW_MODAL,
    modalProps,
    modalType
  });
}

const hideModal = () => dispatch => {
  dispatch({
    type: ActionTypes.HIDE_MODAL
  });
}


export {
  showModal,
  hideModal
}
