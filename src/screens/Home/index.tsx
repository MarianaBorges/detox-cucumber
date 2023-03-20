import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        testID='button-details'
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        testID='button-counts'
        title="Count"
        onPress={() => navigation.navigate('Counts')}
      />
    </View>
  );
}

export { HomeScreen };