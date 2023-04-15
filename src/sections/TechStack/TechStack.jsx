import React from 'react'
import { Box, Container, Grid, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { TechStackCard, TechStackImage } from '../../components'
import { motion, AnimatePresence } from 'framer-motion'
import TechStackSVG from '../../assets/tech-stack-svg'
import Backend from '../../assets/tech/backend.png'
import DevOps from '../../assets/tech/devops.png'
import Frontend from '../../assets/tech/frontend.png'
import './TechStack.css'

const TechStack = (props) => {

  const [techStack, setTechStack] = React.useState("")

  const handleTechStackCardClick = (target) => {
    setTechStack(target)
  }

  return (
    <section>
      <Box className="tech-stack-box">
        <Container>
          <h3>Tech-Stack</h3>
          <AnimatePresence>
            {(techStack.length !== 0) &&
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="tech-stack-close">
                <CloseIcon onClick={() => handleTechStackCardClick("")}/>
              </div>
            </motion.div>
            }
          </AnimatePresence>
          <AnimatePresence>
            {(techStack.length === 0) &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TechStackCard image={Backend} onClick={() => handleTechStackCardClick("backend")} />
                  </Grid>
                  <Grid item xs={4}>
                    <TechStackCard image={DevOps} onClick={() => handleTechStackCardClick("devops")}>
                    </TechStackCard>
                  </Grid>
                  <Grid item xs={4}>
                    <TechStackCard image={Frontend} onClick={() => handleTechStackCardClick("frontend")} />
                  </Grid>
                </Grid>
              </motion.div>
            }
          </AnimatePresence>
          {(techStack === "devops") &&
            <React.Fragment>
              {Object.entries(TechStackSVG).map(([title, imageSrc]) => (
                <TechStackImage imageSrc={imageSrc} title={title} key={title} />
              ))}
            </React.Fragment>
          }
        </Container>
      </Box>
    </section>
  )
}

export default TechStack