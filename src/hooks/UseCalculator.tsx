import {useState} from 'react';

export const useCalculatorLogic = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const assignOperation = (operaMath: string) => {
    if (number === '0') {
      setPreviousNumber(previousNumber.replace(/( [+-×÷])$/, ' ' + operaMath));
    } else if (previousNumber.match(/( [\+\-\×\÷])$/)) {
      const data = previousNumber.split(' ');
      console.log(data);
      // eslint-disable-next-line no-eval
      const resultado = eval(data[0] + data[1] + number);
      setPreviousNumber(resultado + ' ' + operaMath);
      setNumber('0');
    } else {
      setPreviousNumber(number.replace(/^(= )/, '') + ' ' + operaMath);
      setNumber('0');
    }
    setOperation(operaMath);
  };

  const assembleNumber = (numberTexto: string) => {
    if (number.includes('= ')) {
      setPreviousNumber('0');
      setNumber(numberTexto);
    } else {
      switch (numberTexto) {
        case '0':
          if (number !== '0' && number !== '-0') {
            console.log('0', numberTexto);
            setNumber(number + numberTexto);
          }
          break;
        case '·':
          console.log('·', numberTexto);
          if (!number.includes('.')) {
            setNumber(number + numberTexto);
          }
          break;
        default:
          console.log('default', numberTexto);
          if (number === '-0') {
            setNumber('-' + numberTexto);
          } else {
            number === '0'
              ? setNumber(numberTexto)
              : setNumber(number + numberTexto);
          }
      }
    }
  };

  const positiveNegativeChange = () => {
    if (number.includes('= ')) {
      setPreviousNumber('0');
      setNumber('-0');
    } else if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const eraseLast = () => {
    if (number.length > 1) {
      const tmp = Number(number.replace(/.$/, ''));
      if (isNaN(tmp)) {
        setNumber('0');
        setPreviousNumber('0');
      } else {
        setNumber(Number(number.replace(/.$/, '')).toString());
      }
    }
  };

  const dot = () => {
    if (number.includes('= ')) {
      setPreviousNumber('0');
      setNumber('0.');
    } else if (!number.includes('.')) {
      setNumber(number + '.');
    }
  };

  const calculateOperation = () => {
    if (
      number !== '0' &&
      number !== '-0' &&
      !number.includes('= ') &&
      previousNumber !== '0'
    ) {
      const number1 = Number(previousNumber.replace(/( [+-×÷])$/, ''));
      setPreviousNumber(previousNumber + ' ' + number);
      switch (operation) {
        case '+':
          setNumber('= ' + (number1 + Number(number)).toString());
          break;
        case '-':
          setNumber('= ' + (number1 - Number(number)).toString());
          break;
        case '×':
          setNumber('= ' + (number1 * Number(number)).toString());
          break;
        case '÷':
          if (Number(number) !== 0) {
            setNumber('= ' + (number1 / Number(number)).toString());
          } else {
            setNumber('= La división por cero no existe');
          }
          break;
      }
    }
  };

  return {
    clean,
    assignOperation,
    assembleNumber,
    positiveNegativeChange,
    eraseLast,
    dot,
    calculateOperation,
    previousNumber,
    number,
  };
};
