import {
    TRIGGER_SNACKBAR
} from '../constants/common.constants'

export const triggerSnackbar = (severity) => (dispatch, getState) => {
    dispatch({
        type: TRIGGER_SNACKBAR,
        payload: severity || getState().common.snackbarSeverity
    })
}