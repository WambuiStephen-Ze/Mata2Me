import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-black dark:text-white">Welcome to Mata2Me</Text>
      <Text className="text-sm text-gray-700 dark:text-gray-300">Helping you get where you need to go</Text>
    </View>
  );
}
