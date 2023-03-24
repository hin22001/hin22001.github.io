import React from 'react'
import { Box, Container } from '@mui/material'
import terraform from '../../assets/terraform-icon-svgrepo-com.svg'
import jenkins from '../../assets/jenkins.svg'
import k8s from '../../assets/k8s.svg'
import docker from '../../assets/docker.svg'
import grafana from '../../assets/grafana.svg'
import helm from '../../assets/helm.svg'
import ansible from '../../assets/ansible.svg'
import './TechStack.css'

const TechStack = (props) => {

  return (
    <section>
      <Box className="tech-stack-box">
        <Container>
          <h3>Tech-Stack</h3>
          <img src={terraform} height={150} />
          <img src={jenkins} height={150} />
          <img src={k8s} height={150} />
          <img src={docker} height={150} />
          <img src={grafana} height={150} />
          <img src={helm} height={150} />
          <img src={ansible} height={150} />
        </Container>
      </Box>
    </section>
  )
}

export default TechStack