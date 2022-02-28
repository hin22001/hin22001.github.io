import { 
    CREATE_LANGUAGE, 
    CREATE_VOCABULARY 
} from "../constants/language.constants"
  
  
const initialState = {
    languages: [],
    vocabularies: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_LANGUAGE:
            return {
                ...state, languages: action.payload
            }
        case CREATE_VOCABULARY:
            return {
                ...state, vocabularies: action.payload
            }
        default:
            return state
    }
}