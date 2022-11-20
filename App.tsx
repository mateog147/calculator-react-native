import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/calculator/CalculatorScreen';
import {styles} from './src/theme/CalculatorTheme';

export const App = () => {
  return (
    //Safe deja un margin es especialmente buneo en IOS
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={'black'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
