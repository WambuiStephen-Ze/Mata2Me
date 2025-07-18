import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={[styles.home]}
      className="flex-1 justify-center items-center bg-white dark:bg-black"
    >
      <Text className="text-xl font-bold text-black dark:text-white">Welcome to <Text style={[styles.brand]}>Mata2Me</Text></Text>
      <Text className="text-sm text-gray-700 dark:text-gray-300">Helping you get where you need to go</Text>
    </View>
  );
}

const accent = '#67d91bff'

const styles = StyleSheet.create({
  home: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  brand: {
    color: accent,
    fontWeight: 'bold'
  },
});