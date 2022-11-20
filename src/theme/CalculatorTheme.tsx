import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
