import { useContext } from 'react';
import { CalcContext } from '../../context/calculation.context';

import './calc-screen.styles.css';

const CalcScreen = () => {
  const { calc, result } = useContext(CalcContext);

  return (
    <div className="calc-screen">
      {result ? <span className="result-preview">({result})</span> : ''}
      <span className="calc-screen__result">{calc || '0'}</span>
    </div>
  );
};

export default CalcScreen;
