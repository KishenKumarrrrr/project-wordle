import React from 'react';

import { sample } from '../../utils';
import GuessInput from '../GuessInput/GuessInput';
import { WORDS } from '../../data';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const isAnswerCorrect = (guesses) => {
  if (guesses.length === 0) {
    return false
  }
  const isAnswerCorrect = guesses[guesses.length - 1].details.every((letter) => letter.status === 'correct')
  return isAnswerCorrect
}

const isMaximumTries = (guesses) => {
  const isMaximumTries = guesses.length >= 6
  return isMaximumTries
}

const displayBannerIfGameOver = (guesses) => {
  if (guesses.length === 0) {
    return
  }
  const correctAnswer = isAnswerCorrect(guesses)
  const tooManyTries = isMaximumTries(guesses)
  if (correctAnswer) {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guesses.length} guesses</strong>
        </p>
      </div>
    )
  }
  if (tooManyTries) {
    return (
      <div className='sad banner'>
        <p>Sorry, the correct answer is
        <strong> {answer}</strong>.</p>
      </div>
    )
  }
}

function Game() {
  const [guesses, setGuesses] = React.useState([])

  return <>
  {displayBannerIfGameOver(guesses)}
  <GuessResult guesses={guesses}/>
  <GuessInput guesses={guesses} setGuesses={setGuesses} answer={answer} disable={isAnswerCorrect(guesses) || isMaximumTries(guesses)}/>
  </>;
}

export default Game;
