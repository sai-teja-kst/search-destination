// Write your code here
import './index.css'

import DestinationItem from '../DestinationItem/index'

const DestinationSearch = props => {
  const {destinationsList} = props
  const item = destinationsList[0]

  const userInput = event => {
    console.log(event.target.value)
  }

  return (
    <div className="bg-container">
      <h1>Destination Search</h1>
      <div className="search-card">
        <input
          type="search"
          onChange={userInput}
          className="input-card"
          placeholder="Search"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="icon"
        />
      </div>
      <DestinationItem items={item} />
    </div>
  )
}

export default DestinationSearch
