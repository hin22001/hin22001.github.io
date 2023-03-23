import React from 'react'
import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Home } from './sections'
import { Stack } from '@mui/system';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const App = (props) => {
  
  const {} = props

  return (
    <ThemeProvider theme={lightTheme}>
        <Stack>
          <AppBar component="nav" color="transparent" enableColorOnDark elevation={0}>
            <Container>
              <Toolbar style={{ paddingLeft: 0 }}>
                <span>Ryan's Portfolio</span>
              </Toolbar>
            </Container>
          </AppBar>
          <Home />
        </Stack>

    </ThemeProvider>
  )
}

export default App
