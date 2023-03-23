import React from 'react'
import Typed from 'typed.js'
import { Typography, Stack, Avatar, Box, Container, Chip } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import blueTexture from '../../assets/blue-texture.png'
import { GitHub, LinkedIn } from '@mui/icons-material';
import './Home.css'


const Home = (props) => {

  const {} = props

  const typedSpan = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(typedSpan.current, {
      strings: ['Ryan Tam', 'DevOpser', 'Coder', 'IT Dog'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1200,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section>
      <Box bgcolor="background.default">
        <Container>
          <Grid container>
            <Grid xs={6} paddingTop="200px">
              <Stack spacing={2}>
                <span>Hello</span>
                <h1 className="hero-text">
                  I'm
                  <span ref={typedSpan} className="typing-span" />
                </h1>
                <Typography variant='subtitile1' color="black">
                  Placeholder for self description
                </Typography>
                <Stack direction="row" spacing={1}>
                  <GitHub sx={{ fontSize: 40 }} className="icon" />
                  <LinkedIn sx={{ fontSize: 40 }} className="icon" />
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={6}>
              <img src={blueTexture} height={600}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  )
}

export default Home