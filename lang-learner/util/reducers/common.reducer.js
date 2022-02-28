import { TRIGGER_SNACKBAR } from "../constants/common.constants"
  
  
const initialState = {
    snackbarOpen: false,
    snackbarSeverity: ""
}

export default function(state = initialState, action) {
    console.log(`%cDISPATCH ACTION  //  type: ${action.type}, payload:`, 'font-weight:bold', action.payload)
    switch(action.type) {
        case TRIGGER_SNACKBAR:
            return {
                ...state, snackbarOpen: !state.snackbarOpen, snackbarSeverity: action.payload
            }
        default:
            return state
    }
}