import { Fragment } from 'react'
import { connect } from 'react-redux'
import { Typography, TextField, Stack, Grid } from '@mui/material'
import { Button, Autocomplete } from '../../components'
import { triggerSnackbar } from '../../util/action/common.action'
import { createVocabulary } from '../../util/action/language.action'
import { useFormState } from '../../util/core'

const mapStatetoProps = (state) => {
    return {
        languages: state.language.languages
    }
}

const Home = connect(mapStatetoProps)((props) => {
    const { dispatch, languages } = props

    const [ formState, setFormState ] = useFormState({});

    return (
        <Fragment>
            <Stack pt="8rem" pb="4rem" spacing={1}>

                <Autocomplete
                    options={languages}
                    creatable
                    disableClearable
                    renderInput={(params) => (
                        <TextField {...params} label="Language" variant="standard" />
                    )}
                    onChange={(e, value) => {
                        setFormState("language", value)
                    }}
                />

                <TextField label="Vocabulary" variant="standard" onBlur={(e) => setFormState("vocabulary", e.target.value)} />
                <TextField label="Meaning" variant="standard" onBlur={(e) => setFormState("meaning", e.target.value)} />

            </Stack>
            <Grid container justifyContent="center">
                <Button variant="contained"
                    onClick={() => dispatch(createVocabulary(formState))} 
                    onSuccess={() => dispatch(triggerSnackbar("success"))} 
                    onFailure={() => dispatch(triggerSnackbar("error"))}>Submit</Button>
            </Grid>
            
        </Fragment>
    )
})

export default Home