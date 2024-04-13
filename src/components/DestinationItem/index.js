// Write your code here
import './index.css'

const DestinationItem = props => {
  const {items} = props
  const {id, imgUrl, name} = items
  console.log(id)

  return (
    <div className="bg-card">
      <img src={imgUrl} alt={name} className="img-card" />
      <p className="para-card">{name}</p>
    </div>
  )
}
export default DestinationItem
