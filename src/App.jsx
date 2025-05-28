import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const App = (props) => {
  
  const {} = props

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
