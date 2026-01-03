import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function NeedsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Needs</Text>
      <Text style={styles.subtitle}>Track and manage your needs here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
