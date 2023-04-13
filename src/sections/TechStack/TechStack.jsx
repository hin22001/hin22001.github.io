import React from 'react'
import { Box, Container, Grid, Paper } from '@mui/material'
import { TechStackCard, TechStackImage } from '../../components'
import TechStackSVG from '../../assets/tech-stack-svg'
import Backend from '../../assets/tech/backend.png'
import DevOps from '../../assets/tech/devops.png'
import Frontend from '../../assets/tech/frontend.png'
import './TechStack.css'

const TechStack = (props) => {

  return (
    <section>
      <Box className="tech-stack-box">
        <Container>
          <h3>Tech-Stack</h3>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TechStackCard image={Backend} />
            </Grid>
            <Grid item xs={4}>
              <TechStackCard image={DevOps} />
            </Grid>
            <Grid item xs={4}>
              <TechStackCard image={Frontend} />
            </Grid>
          </Grid>
          {Object.entries(TechStackSVG).map(([title, imageSrc]) => (
            <TechStackImage imageSrc={imageSrc} title={title} key={title} />
          ))}
        </Container>
      </Box>
    </section>
  )
}

export default TechStack