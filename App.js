import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.main} testID="app-root" accessibilityLabel="app-root">
      <Text>Hello World</Text>
      <Button
        title={'Clicked ' + counter + ' times'}
        testID="increase-count"
        accessibilityLabel="increase-count"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
