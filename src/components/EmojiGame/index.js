/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    scoreCount: 0,
    topScoreCount: 0,
    clickedList: [],
    isGameInProgress: true,
  }

  onPlayingAgainGame = () => {
    const {
      clickedList,
      scoreCount,
      topScoreCount,
      isGameInProgress,
    } = this.state
    this.setState({
      scoreCount: 0,
      topScoreCount: 0,
      clickedList: [],
      isGameInProgress: true,
    })
  }

  renderWinOrLose = () => {
    const {scoreCount, topScoreCount, clickedList} = this.state
    const {emojisList} = this.props
    const finalLength = emojisList.length
    let isResult = false
    if (clickedList.length === emojisList.length) {
      isResult = true
    }
    return (
      <WinOrLoseCard
        isResult={isResult}
        currentScore={topScoreCount}
        finalScore={finalLength}
        onPlayingAgainGame={this.onPlayingAgainGame}
      />
    )
  }

  renderEmojiLists = () => {
    const {emojisList} = this.props
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <ul className="emojis-main-list-container">
        {shuffledList.map(eachItem => (
          <EmojiCard
            emojisDetails={eachItem}
            key={eachItem.id}
            oncheckingClickedEmoji={this.oncheckingClickedEmoji}
          />
        ))}
      </ul>
    )
  }

  //   settingInprogress = () => {
  //     this.setState({

  //     })
  //   }

  oncheckingClickedEmoji = id => {
    const {clickedList} = this.state
    const {emojisList} = this.props
    const findingClickedList = emojisList.filter(eachItem => eachItem.id === id)
    if (clickedList.includes(id)) {
      this.setState({
        isGameInProgress: false,
        scoreCount: 0,
      })
    } else {
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, findingClickedList[0].id],
        scoreCount: prevState.scoreCount + 1,
        topScoreCount: prevState.topScoreCount + 1,
        isGameInProgress: true,
      }))
      //   this.settingInprogress()
    }
  }

  render() {
    const {scoreCount, topScoreCount, isGameInProgress} = this.state

    return (
      <div className="main-bg-container">
        <NavBar
          scoreCount={scoreCount}
          topScoreCount={topScoreCount}
          isGameActive={isGameInProgress}
        />
        <div className="banner-bg-container">
          {isGameInProgress ? this.renderEmojiLists() : this.renderWinOrLose()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
