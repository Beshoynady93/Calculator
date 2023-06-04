import { useContext, useRef } from 'react';
import { CalcContext } from '../../context/calculation.context';

import './calc-header.styles.css';

const Header = () => {
  const { setTheme } = useContext(CalcContext);
  const buttonNormalRef = useRef();
  const buttonLightRef = useRef();
  const buttonMagentaRef = useRef();

  const changeToNormalTheme = () => {
    setTheme('');
    const btn = buttonNormalRef.current;
    if (!btn.classList.contains('active')) {
      buttonLightRef.current.classList.remove('active');
      buttonMagentaRef.current.classList.remove('active');
      btn.classList.add('active');
    }
  };

  const changeToLightTheme = () => {
    setTheme('light');
    const btn = buttonLightRef.current;
    if (!btn.classList.contains('active')) {
      buttonNormalRef.current.classList.remove('active');
      buttonMagentaRef.current.classList.remove('active');
      btn.classList.add('active');
    }
  };

  const changeToMagentaTheme = () => {
    setTheme('magenta');
    const btn = buttonMagentaRef.current;
    if (!btn.classList.contains('active')) {
      buttonNormalRef.current.classList.remove('active');
      buttonLightRef.current.classList.remove('active');
      btn.classList.add('active');
    }
  };

  return (
    <header className="calc-header">
      <h1 className="calc-header__title">calc</h1>
      <span className="calc-header__theme">theme</span>
      <div className="calc-header__theme-picker">
        <button
          className="calc-header__btn active"
          onClick={changeToNormalTheme}
          ref={buttonNormalRef}
        ></button>
        <button
          className="calc-header__btn"
          onClick={changeToLightTheme}
          ref={buttonLightRef}
        ></button>
        <button
          className="calc-header__btn"
          onClick={changeToMagentaTheme}
          ref={buttonMagentaRef}
        ></button>
      </div>
    </header>
  );
};

export default Header;
