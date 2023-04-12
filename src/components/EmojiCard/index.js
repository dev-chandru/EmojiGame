// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisDetails, oncheckingClickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails
  const onClickEmoji = () => {
    oncheckingClickedEmoji(id)
  }

  return (
    <li className="list-item-container">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
