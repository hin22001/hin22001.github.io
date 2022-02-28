import { Button } from '@mui/material'
import { handleClick } from '../../util/core'

const Component = ({ onClick, onSuccess, onFailure, children, ...other }) => {

    return (
        <Button onClick={() => handleClick(onClick, onSuccess, onFailure)} {...other}>
            { children }
        </Button>
    )
}

export default Component