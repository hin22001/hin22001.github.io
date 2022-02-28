import {
    CREATE_LANGUAGE,
    CREATE_VOCABULARY
} from '../constants/language.constants'

const getLanguages = (state) => {
    return _.get(state, "language.languages", [])
}

const getVocabularies = (state, language) => {
    if (language) return _.get(state, `language.vocabularies.${language}`, [])
    return _.get(state, `language.vocabularies`, {})
}

const languageExists = (language) => (dispatch, getState) => {
    if (language) return _.some(getLanguages(getState()), (lang) => lang === language)

    throw new Exception("language is not defined")
}

const createLanguage = (language) => (dispatch, getState) => {
    if (language) {
        const languages = getLanguages(getState())
        languages.push(language)
        dispatch({ type: CREATE_LANGUAGE, payload: languages })
        return
    }

    throw new Exception("language is not defined")
}

export const createVocabulary = ({ language, vocabulary, meaning }) => (dispatch, getState) => {
    try {
        console.log(language)
        if (!dispatch(languageExists(language))) dispatch(createLanguage(language))
    
        const languageVocabs = getVocabularies(getState(), language)
        languageVocabs.push({ vocabulary, meaning })
        const vocabularies = { ...getVocabularies(getState()) }
        _.set(vocabularies, language, languageVocabs)
    
        dispatch({ type: CREATE_VOCABULARY, payload: vocabularies })
    
        return true
    } catch(e) {
        return false
    }
}