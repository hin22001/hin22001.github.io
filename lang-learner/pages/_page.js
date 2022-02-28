import { Snackbar, Alert, Container } from "@mui/material"
import { Drawer } from '../components'
import { Fragment, cloneElement } from "react"
import { connect } from "react-redux"
import { triggerSnackbar } from '../util/action/common.action'

const mapStatetoProps = (state) => {
    return {
      snackbarOpen: state.common.snackbarOpen,
      snackbarSeverity: state.common.snackbarSeverity,
      drawerOpen: state.common.drawerOpen,
    }
}

const Page = connect(mapStatetoProps)((props) => {
    const { dispatch, children, snackbarOpen, snackbarSeverity, snackbarMsg, drawerOpen } = props
    return (
        <Fragment>
            <Container maxWidth="sm">
                { cloneElement(children, props) }
            </Container>

            <Drawer />

            <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={() => dispatch(triggerSnackbar())}>
                <Alert elevation={6} onClose={() => dispatch(triggerSnackbar())} variant="filled" severity={snackbarSeverity} sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </Fragment>
    )
})

export default Page