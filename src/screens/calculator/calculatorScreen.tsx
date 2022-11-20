import {Text, View} from 'react-native';
import React from 'react';
import {ButtonCal} from '../../components/ButtonCal';
import {styles} from '../../theme/CalculatorTheme';
import {useCalculatorLogic} from '../../hooks/UseCalculator';

export const CalculatorScreen = () => {
  const {
    clean,
    assignOperation,
    assembleNumber,
    positiveNegativeChange,
    eraseLast,
    dot,
    calculateOperation,
    previousNumber,
    number,
  } = useCalculatorLogic();
  return (
    //Safe deja un margin es especialmente buneo en IOS
    <View>
      <Text style={styles.operationsText}>{previousNumber}</Text>
      <Text style={styles.resultText}>{number}</Text>
      <View style={styles.btnContainer}>
        <View style={styles.centralContainer}>
          <View style={styles.controlBtnsContainer}>
            <ButtonCal text="C" type="control" action={clean} />
            <ButtonCal
              text="+/-"
              type="control"
              action={positiveNegativeChange}
            />
            <ButtonCal text="del" type="control" action={eraseLast} />
          </View>

          <View style={styles.numberBtnsContainer}>
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(index => (
              <ButtonCal text={index.toString()} action={assembleNumber} />
            ))}
          </View>

          <View style={styles.bottomContainer}>
            <ButtonCal text="0" type="wide" action={assembleNumber} />
            <ButtonCal text="." action={dot} />
          </View>
        </View>
        <View style={styles.opBtnsContainer}>
          <ButtonCal text="÷" type="operator" action={assignOperation} />
          <ButtonCal text="x" type="operator" action={assignOperation} />
          <ButtonCal text="-" type="operator" action={assignOperation} />
          <ButtonCal text="+" type="operator" action={assignOperation} />
          <ButtonCal text="=" type="operator" action={calculateOperation} />
        </View>
      </View>
    </View>
  );
};
