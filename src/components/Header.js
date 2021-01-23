import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

 export function Header({count}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO</Text>
      <Text style={styles.countTitle}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  countTitle: {
    fontWeight: 'bold',
    fontSize: 27,
  },
});

