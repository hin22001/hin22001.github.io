import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';
import { Portfolio, NotFound } from './pages';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const App = (props) => {
  
  const {} = props

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          {/* <Route path="/fund" element={<Fund />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
