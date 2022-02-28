import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, List, ListItem, Divider, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu';
import { toFirstLetterUpperCase } from '../../util/core'

const Component = ({ }) => {

    const [open, setOpen] = useState(false)
    const router = useRouter()
    const path = router.asPath

    return (
        <Fragment>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        { _.join(_.map(path.split("/").reverse(), (p) => toFirstLetterUpperCase(p)), " ") }
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >
                <List>
                    {['Dictation', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text} onClick={() => {
                        setOpen(false)
                        router.push(text.toLocaleLowerCase())
                    }}>
                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Import', 'Export'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                </Box>
            </Drawer>
        </Fragment>
    )
}

export default Component