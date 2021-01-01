
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
This is Splash Screen      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  paragraph:{
    fontSize:55
  }
 
});
