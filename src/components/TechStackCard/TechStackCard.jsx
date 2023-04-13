import './TechStackCard.css'
import { Paper, Grid } from '@mui/material'

const TechStackCard = ({ image }) => {

  const handleClick = () => {
    
  }

  return (
    <Paper className="tech-stack-card" elevation={1} onClick={handleClick}>
      <img className="tech-stack-card-img" src={image} />
    </Paper>
  )
}

export default TechStackCard