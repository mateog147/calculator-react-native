import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

interface Props {
  text: string;
}
export const ButtonCal = ({text}: Props) => {
  return (
    <Pressable style={styles.btn} onPress={() => console.log({text})}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
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
  btnText: {
    fontSize: 35,
    color: 'pink',
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
