import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Typography, TextField, Stack, Grid } from '@mui/material'
import { Button, Autocomplete } from '../../components'

import { useState } from 'react'

const mapStatetoProps = (state) => {
    return {
        languages: state.language.languages
    }
}

const Dictation = connect(mapStatetoProps)((props) => {

    const { dispatch, languages } = props
    const router = useRouter()

    const [ lang, setLang ] = useState("")

    return (
        <Fragment>
            <Stack pt="8rem" pb="4rem" spacing={1}>

                <Autocomplete
                    options={languages}
                    disableClearable
                    renderInput={(params) => (
                        <TextField {...params} label="Language" variant="standard" />
                    )}
                    onChange={(e, value) => {
                        setLang(value)
                    }}
                />

            </Stack>
            <Grid container justifyContent="center">
                <Button variant="contained" onClick={() => router.push(`dictation/${lang}`)}>Submit</Button>
            </Grid>
            
        </Fragment>
    )
})

export default Dictation