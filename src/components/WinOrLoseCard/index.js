// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isResult, currentScore, finalScore, onPlayingAgainGame} = props
  const imageUrl = isResult
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const altText = isResult ? 'Won' : 'Lose'
  const bestText = isResult ? 'Best Score' : 'Score'
  const onPlayAgain = () => {
    onPlayingAgainGame()
  }
  return (
    <div className="win-lose-bg-container">
      <div className="win-lose-image-container">
        <img src={imageUrl} alt="win or lose" className="win-lose-image" />
      </div>
      <div className="win-lose-card-container">
        <h1 className="win-lose-main-heading">You {altText}</h1>
        <p className="win-lose-main-para">{bestText}</p>
        <p className="scores-para">
          {currentScore}/{finalScore}
        </p>
        <button
          type="button"
          className="play-again-button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
