import React, { useState } from 'react';
import '../calculator/cal.css'

function Cal() {
  const [Result,setResult] = useState('');
  
  const handleClick = (e) => {
    setResult(Result.concat(e.target.name))
  }
  // const backspace = () => {
  //   setResult(Result.slice(0,Result.length - 1))
  // }
  const calculate = () => {
    setResult(eval(Result).toString())
  }

  return (
    <div className="calculator">
      <div className="display">
        <form action="">
          <input type="text" name="" value={Result} id="input" />
        </form>
      </div>
      <div className="buttons">
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='/' onClick={handleClick}>/</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='*' onClick={handleClick}>*</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='-' onClick={handleClick}>-</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='.' onClick={handleClick}>.</button>
        <button  onClick={calculate}>=</button>
        <button name='+' onClick={handleClick}>+</button>
      </div>
      <button className="clearButton" onClick={() => setResult('')}>C</button>
    </div>
  );
}

export default  Cal;
