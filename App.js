import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image,Animated } from 'react-native';
import {useState} from 'react';

const HEADER_MAX_HEIGHT = 120
const HEADER_MIN_HEIGHT = 70
const PROFILE_IMAGE_MAX_HEIGHT =80
const PROFILE_IMAGE_MIN_HEIGHT =40

export default function App() {
  const[scrolY,setScrollY] = useState(new Animated.Value(0))

  const headerHeight = scrolY.interpolate({
    inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT], //0 is the starting point, the ditance user is allowed to scroll
    outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT], // when the user has not scrolled on the y-axis, when the user starts scrolling.
  
  })
  return (
    <View style={ {flex:1}  }>
      <Animated.View style={{position:'absolute',
      top:0,left:0,right:0,bottom:0, backgroundColor:'lightskyblue',height:headerHeight,}}>


      </Animated.View>

      <ScrollView style={{flex:1}} scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: { contentOffset: { y: scrolY} }}]
        )}
      >
          <View style={{height:PROFILE_IMAGE_MAX_HEIGHT,
                        width: PROFILE_IMAGE_MAX_HEIGHT,
                        borderColor:'white',
                        borderWidth:3,
                        overflow:'hidden',
                        borderRadius:PROFILE_IMAGE_MAX_HEIGHT/2,
                        marginTop: HEADER_MAX_HEIGHT- (PROFILE_IMAGE_MAX_HEIGHT / 2)
                      }}>
              <Image source={require('./assets/Ajay.jpeg')}
            style={{flex:1,height:null,width:null}}
                ></Image>

          </View>

          
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text><Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>

          <Text>Hi IHH</Text><Text>Hi IHH</Text><Text>Hi IHH</Text><Text>Hi IHH</Text><Text>Hi IHH</Text>

          <Text>Hi IHH</Text><Text>Hi IHH</Text><Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>
          <Text>Hi IHH</Text>

          
      </ScrollView>

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
