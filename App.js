import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image,Animated } from 'react-native';
import Carousel from './components/Carousel';


export default function App() {
  

  return (
    <View style={ {flex:1}  }>
      <Carousel/>

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
