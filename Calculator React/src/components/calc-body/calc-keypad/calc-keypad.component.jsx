import { useContext } from 'react';

import { CalcContext } from '../../../context/calculation.context';

import './calc-keypad.styles.css';

const CalcKeypad = () => {
  const { updateCalc, setCalc, delLastNum, result, setResult } =
    useContext(CalcContext);

  const reset = () => {
    setCalc('');
    setResult('');
  };

  const del = () => delLastNum();

  const res = () => {
    return setCalc(result);
  };

  return (
    <div className="calc-keypad-container">
      <button className="calc-keypad-button" onClick={() => updateCalc('7')}>
        7
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('8')}>
        8
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('9')}>
        9
      </button>
      <button className="calc-keypad-del-key" onClick={del}>
        del
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('4')}>
        4
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('5')}>
        5
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('6')}>
        6
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('+')}>
        +
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('1')}>
        1
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('2')}>
        2
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('3')}>
        3
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('-')}>
        -
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('.')}>
        .
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('0')}>
        0
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('/')}>
        /
      </button>
      <button className="calc-keypad-button" onClick={() => updateCalc('*')}>
        x
      </button>
      <button className="calc-keypad-reset-key" onClick={reset}>
        reset
      </button>
      <button className="calc-keypad-equal-key equal-key" onClick={res}>
        =
      </button>
    </div>
  );
};

export default CalcKeypad;
