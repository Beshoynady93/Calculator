import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const changeTheme = (type = '') => {
  const wrapper = document.querySelector('.wrapper');
  wrapper.setAttribute('data-theme', type);
};

export const CalcContext = createContext({
  theme: '',
  result: '',
  calc: '',
});

export const CalcProvider = ({ children }) => {
  const [theme, setTheme] = useState('');
  const [result, setResult] = useState('');
  const [calc, setCalc] = useState('');

  const ops = ['+', '-', '*', '/', '.'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const delLastNum = () => {
    setCalc(calc.slice(0, -1));
  };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const value = {
    setTheme,
    setResult,
    result,
    calc,
    updateCalc,
    setCalc,
    delLastNum,
  };
  return <CalcContext.Provider value={value}> {children}</CalcContext.Provider>;
};

CalcProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
