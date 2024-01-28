import React from 'react';
import crypto from 'crypto'
import { generateId } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessInput({ guesses, setGuesses, answer, disable }) {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newGuesses = [...guesses, 
      { 
        id: generateId(),
        value: guess,
        details: checkGuess(guess, answer)
      }
    ]
    setGuess('')
    setGuesses(newGuesses)
  }


  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input 
        id='guess-input'
        type='text'
        disabled={disable}
        value={guess}
        onChange={
        (event) => setGuess(event.target.value.toUpperCase().substr(0, 5))
        }
        required={true}
        pattern='\w{5}'
      />
    </form>
  );
}

export default GuessInput;
