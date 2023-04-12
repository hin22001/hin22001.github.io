import './TechStackCard.css'

const TechStackCard = (props) => {

  const { imageSrc, title } = props

  return (
    <div className="tech-stack-div">
      <div>
        <img src={imageSrc} className="tech-stack-img" />
        <br />
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default TechStackCard