import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';

export const App = () => {
  return (
    //Safe deja un margin es especialmente buneo en IOS
    <SafeAreaView style={styles.main}>
      <Text style={styles.operationsText}>0</Text>
      <Text style={styles.resultText}>0</Text>
      <View style={styles.btnContainer}>
        <View style={styles.centralContainer}>
          <View style={styles.controlBtnsContainer}>
            <Pressable style={[styles.btn, styles.ctrBtn]}>
              <Text style={[styles.btnText, styles.ctrBtnText]}>C</Text>
            </Pressable>

            <Pressable style={[styles.btn, styles.ctrBtn]}>
              <Text style={[styles.btnText, styles.ctrBtnText]}>+/-</Text>
            </Pressable>

            <Pressable style={[styles.btn, styles.ctrBtn]}>
              <Text style={[styles.btnText, styles.ctrBtnText]}>del</Text>
            </Pressable>
          </View>

          <View style={styles.numberBtnsContainer}>
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(number => (
              <Pressable style={styles.btn}>
                <Text style={styles.btnText}>{number}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.bottomContainer}>
            <Pressable style={[styles.btn, styles.wideBtn]}>
              <Text style={styles.btnText}>0</Text>
            </Pressable>

            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>.</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.opBtnsContainer}>
          <Pressable style={[styles.btn, styles.opBtn]}>
            <Text style={styles.btnText}>÷</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.opBtn]}>
            <Text style={styles.btnText}>x</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.opBtn]}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.opBtn]}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.opBtn]}>
            <Text style={styles.btnText}>=</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 2,
  },
  operationsText: {
    color: '#7c7c7c',
    fontSize: 40,
    width: '100%',
    textAlign: 'right',
    paddingRight: 15,
  },
  resultText: {
    color: '#fbfbfb',
    fontSize: 80,
    width: '100%',
    textAlign: 'right',
    paddingRight: 15,
  },

  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 'auto',
  },
  centralContainer: {
    height: '100%',
    width: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  controlBtnsContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  opBtnsContainer: {},
  numberBtnsContainer: {
    width: '100%',
    maxWidth: 270,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
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
export default App;
