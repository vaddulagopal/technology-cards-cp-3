// Write your code here.
import './index.css'

const CardName = props => {
  const {cardName} = props
  const {title, description, imgUrl, className} = cardName
  return (
    <div className="card-flex">
      <div className={`card-container ${className}`}>
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="image" alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default CardName
