import { Fragment, useMemo, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { TextField, Stack, Grid } from '@mui/material'
import { Button } from '../../components'
import { triggerSnackbar } from '../../util/action/common.action'
import { useFormState, getRandomInt } from '../../util/core'

import Lottie from 'react-lottie';
import * as animationData from '../../assets/tick.json'

const useDictation = (dictVocabs) => {

    const [vocabs, setVocabs] = useState([])
    const [dictation, setDictation] = useState()
    const [rand, setRand] = useState(getRandomInt(vocabs.length))

    useEffect(() => {
        if (dictVocabs) setVocabs(dictVocabs)
    }, [dictVocabs])

    useEffect(() => {
        const index = getRandomInt(vocabs.length)
        console.log(vocabs[index])
        if (vocabs[index]) setDictation(vocabs[index])
        setRand(index)
    }, [vocabs])

    const handleDictationSubmission = (answer) => {
        const correct = _.get(dictation, "meaning") === answer
        const nextVocabs = [ ...vocabs ]
        nextVocabs.splice(rand, 1)

        if (nextVocabs.length === 0) return false
        if (correct) setVocabs(nextVocabs)

        return correct
    }

    return [ dictation, handleDictationSubmission ]
}

const mapStatetoProps = (state) => {
    return {
        vocabularies: state.language.vocabularies
    }
}

const Dictation = connect(mapStatetoProps)((props) => {
    const { dispatch, vocabularies } = props
    const router = useRouter()
    const { lang } = router.query
    const iframeRef = useRef(null)
    
    const dictVocabs = useMemo(() => _.get(vocabularies, lang, {}), [vocabularies, lang])
    const [ nextDictation, submitDictation ] = useDictation(dictVocabs)
    const [ formState, setFormState ] = useFormState({});

    return (
        <Fragment>
            <Stack pt="8rem" pb="4rem" spacing={1}>

                <TextField label="Vocabulary" variant="standard" value={_.get(nextDictation, "vocabulary", "")} disabled />
                <TextField label="Meaning" variant="standard" onBlur={(e) => setFormState("meaning", e.target.value)} />
            </Stack>
            <Grid container justifyContent="center">
                <Button variant="contained"
                    onClick={() => submitDictation(_.get(formState, "meaning"))} 
                    onSuccess={() => dispatch(triggerSnackbar("success"))} 
                    onFailure={() => dispatch(triggerSnackbar("error"))}>Submit</Button>
            </Grid>
            
            <Lottie 
                options={{
                    loop: true,
                    autoplay: true, 
                    animationData: animationData,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                height={200}
                width={200} />
        </Fragment>
    )
})

export default Dictation