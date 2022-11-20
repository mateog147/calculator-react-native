import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  type?: string;
}
export const ButtonCal = ({text, type}: Props) => {
  return (
    <TouchableOpacity
      style={getBtnStyles(type)}
      onPress={() => console.log({text})}>
      <Text style={getTextStyles(type)}>{text}</Text>
    </TouchableOpacity>
  );
};

const getBtnStyles = (type: string | undefined) => {
  let res;
  switch (type) {
    case undefined:
      res = styles.btn;
      break;

    case 'operator':
      res = {...styles.btn, ...styles.opBtn};
      break;

    case 'control':
      res = {...styles.btn, ...styles.ctrBtn};
      break;

    case 'wide':
      res = {...styles.btn, ...styles.wideBtn};
      break;

    default:
      res = styles.btn;
      break;
  }

  return res;
};

const getTextStyles = (type: string | undefined) => {
  let res;
  switch (type) {
    case undefined:
      res = styles.btnText;
      break;

    case 'operator':
      res = styles.btnText;
      break;

    case 'control':
      res = {...styles.btnText, ...styles.ctrBtnText};
      break;

    default:
      res = styles.btnText;
      break;
  }

  return res;
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: '#2d2d2d',
  },
  opBtn: {
    backgroundColor: '#ff9426',
  },
  ctrBtn: {
    backgroundColor: '#9b9b9b',
    color: 'black',
  },
  btnText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  ctrBtnText: {
    color: 'black',
  },
  wideBtn: {
    width: 160,
  },
});
