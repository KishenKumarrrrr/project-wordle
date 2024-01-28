import React from 'react';
import { generateId, range } from '../../utils';
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResult({ guesses }) {
  
  return <div className='guess-results'>
    {range(0, NUM_OF_GUESSES_ALLOWED).map(
      (_arr, index) => 
        guesses[index] 
          ? <Guess key={guesses[index].id} guess={guesses[index]}/>
          : <Guess key={generateId()}/>
      )
    }
  </div>;
}

export default GuessResult;
