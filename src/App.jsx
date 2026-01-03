import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';
import { Portfolio, NotFound, Landing } from './pages';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const App = (props) => {
  
  const {} = props
  const [reachedComputer, setReachedComputer] = React.useState(false);

	const handleDistanceReached = (distance) => {
		setReachedComputer(true);
	}

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!reachedComputer? <Landing onDistanceReached={handleDistanceReached} />: <Portfolio />} />
          {/* <Route path="/fund" element={<Fund />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
