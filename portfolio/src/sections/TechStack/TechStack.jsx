import React from 'react'
import { Box, Container } from '@mui/material'
import { TechStackCard } from '../../components'
import TechStackSVG from '../../assets/tech-stack-svg'
import CertificateCard from '../../components/CertificateCard/CertificateCard'
import './TechStack.css'

console.log(TechStackSVG)
console.log(Object.entries(TechStackSVG))

const TechStack = (props) => {

  return (
    <section>
      <Box className="tech-stack-box">
        <Container>
          <h3>Tech-Stack</h3>
          {Object.entries(TechStackSVG).map(([title, imageSrc]) => (
            <TechStackCard imageSrc={imageSrc} title={title} key={title} />
          ))}
        </Container>
      </Box>
    </section>
  )
}

export default TechStack