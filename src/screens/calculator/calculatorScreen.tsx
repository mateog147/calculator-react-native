import {Text, View} from 'react-native';
import React from 'react';
import {ButtonCal} from '../../components/ButtonCal';
import {styles} from '../../theme/CalculatorTheme';

export const CalculatorScreen = () => {
  return (
    //Safe deja un margin es especialmente buneo en IOS
    <View>
      <Text style={styles.operationsText}>0</Text>
      <Text style={styles.resultText}>0</Text>
      <View style={styles.btnContainer}>
        <View style={styles.centralContainer}>
          <View style={styles.controlBtnsContainer}>
            <ButtonCal text="C" type="control" />
            <ButtonCal text="+/-" type="control" />
            <ButtonCal text="del" type="control" />
          </View>

          <View style={styles.numberBtnsContainer}>
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(number => (
              <ButtonCal text={number.toString()} />
            ))}
          </View>

          <View style={styles.bottomContainer}>
            <ButtonCal text="0" type="wide" />
            <ButtonCal text="." />
          </View>
        </View>
        <View style={styles.opBtnsContainer}>
          <ButtonCal text="÷" type="operator" />
          <ButtonCal text="x" type="operator" />
          <ButtonCal text="-" type="operator" />
          <ButtonCal text="+" type="operator" />
          <ButtonCal text="=" type="operator" />
        </View>
      </View>
    </View>
  );
};
