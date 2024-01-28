import React from 'react';
import { generateId, range } from '../../utils';

function Guess({ guess = { value: '' }, wordSize=5}) {

  const letters = guess.value.split('')

  return (
    <p className='guess'>
      {range(0, wordSize).map(
        (_arr, index) => 
          letters.length > 0
            ? <span className={`cell ${guess.details[index].status}`} key={generateId()}>{letters[index]}</span>
            : <span className='cell' key={generateId()}></span>
      )}
    </p>
  )
}

export default Guess;
