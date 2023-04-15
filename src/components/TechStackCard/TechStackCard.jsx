import './TechStackCard.css'
import { Paper, Grid } from '@mui/material'

const TechStackCard = ({ image, onClick }) => {

  const handleClick = () => {

  }

  return (
    <Paper className="tech-stack-card" elevation={1} onClick={onClick}>
      <img className="tech-stack-card-img" src={image} />
    </Paper>
  )
}

export default TechStackCard