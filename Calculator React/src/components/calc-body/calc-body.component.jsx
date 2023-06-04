import Header from '../calc-header/calc-header.component';
import CalcScreen from '../clalc-screen/calc-screen.component';
import CalcKeypad from './calc-keypad/calc-keypad.component';

import './calc-body.styles.css';

const CalcBody = () => {
  return (
    <div className="calc-body">
      <Header />
      <CalcScreen />
      <CalcKeypad />
    </div>
  );
};

export default CalcBody;
