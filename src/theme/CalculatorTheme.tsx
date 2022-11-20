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
});
