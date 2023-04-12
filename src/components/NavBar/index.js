// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreCount, topScoreCount, isGameInProgress} = props
  return (
    <nav className="navbar-container">
      <div className="logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {isGameInProgress ? (
        ''
      ) : (
        <div className="scores-card-container">
          <p className="scores">Score: {scoreCount}</p>
          <p className="scores">Top Score: {topScoreCount}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
