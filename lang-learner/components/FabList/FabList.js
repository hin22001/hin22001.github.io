import React from 'react'
import { Fab, Grow, Grid } from '@mui/material'
import { map, isPlainObject, reverse } from 'lodash'
import AddIcon from '@mui/icons-material/Add'
import styles from './FabList.module.css'

const useFabClicked = (fabRootRef) => {

    const [clicked, setClicked] = React.useState(false)

    React.useEffect(() => {
        console.log(clicked)
        if (!clicked) fabRootRef.current.blur()
    }, [clicked])

    return [clicked, setClicked]
}

const createChildrenFab = (children, fabRootRef, childHeight, clicked) => {
    const rootHeight = fabRootRef?.current?.clientHeight
    const offset = (rootHeight - childHeight) / 2 + childHeight
    let childrenArray = reverse([ ...children ])
    if (isPlainObject(children)) childrenArray = [children] 
    return (
        <React.Fragment>
            {map(childrenArray, (child, i) => {
                // reverse back the index
                const index = childrenArray.length - i - 1
                const style = { bottom: `${index * rootHeight + offset}px`, left: `${index * childHeight + offset}px`}
                const childStyle = { width: childHeight, height: childHeight }
                return (
                    <div key={`fab-list-child-${index}`} className={styles.child} style={style}>
                        <Grow in={clicked} timeout={index * 500}>
                            {React.cloneElement(child, { style: childStyle })}
                        </Grow>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

const FabList = ({ children, childHeight=48 }) => {

    const fabRootRef = React.useRef(null)

    const [clicked, setClicked] = useFabClicked(fabRootRef)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const handleBlur = () => {
        setClicked(false)
    }

    return (
        <div className={styles.fab}>
            { createChildrenFab(children, fabRootRef, childHeight, clicked) }
            <Fab className={styles.root} ref={fabRootRef} onClick={handleClick} onBlur={handleBlur} size="large">
                <AddIcon />
            </Fab>
        </div>
    )
}

export default FabList