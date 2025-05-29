import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = (props) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        padding: 3,
        textAlign: 'center'
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#666',
          fontSize: '3.5rem',
          fontWeight: 500,
          marginBottom: 2
        }}
      >
        Page Not Found
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          maxWidth: '600px',
          marginBottom: 4
        }}
      >
        We're sorry, the page you requested could not be found. Please go back to the homepage.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          backgroundColor: '#fff',
          color: '#666',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          padding: '10px 24px',
          borderRadius: '30px',
          '&:hover': {
            backgroundColor: '#f5f5f5'
          }
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;