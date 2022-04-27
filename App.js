import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image,Animated } from 'react-native';
import {useState} from 'react';

const HEADER_MAX_HEIGHT = 120
const HEADER_MIN_HEIGHT = 70
const PROFILE_IMAGE_MAX_HEIGHT =80
const PROFILE_IMAGE_MIN_HEIGHT =40

export default function App() {
  

  return (
    <View style={ {flex:1}  }>
      <Text>Hi</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
