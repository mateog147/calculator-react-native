import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';

export const App = () => {
  return (
    //Safe deja un margin es especialmente buneo en IOS
    <SafeAreaView style={styles.main}>
      <Text style={styles.operationsText}>0</Text>
      <Text style={styles.resultText}>0</Text>
      <View style={styles.btnContainer}>
        <View style={styles.opBtnsContainer}>
          <Pressable style={[styles.btn, styles.opBtn]}>
            <Text style={styles.btnText}>-</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 5,
  },
  operationsText: {
    marginTop: 100,
    color: 'gray',
    fontSize: 30,
    width: '100%',
    textAlign: 'right',
    paddingRight: 15,
  },
  resultText: {
    color: 'white',
    fontSize: 60,
    width: '100%',
    textAlign: 'right',
    paddingRight: 15,
  },

  btnContainer: {
    width: '100%',
    alignItems: 'flex-end',
    height: 90,
  },
  opBtnsContainer: {},
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 70,
    height: 70,
    margin: 5,
    backgroundColor: 'gray',
  },
  opBtn: {
    backgroundColor: 'orange',
  },
  btnText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default App;
