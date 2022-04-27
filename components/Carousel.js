import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions,FlatList } from 'react-native';
const {width, height} = Dimensions.get('screen');



// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312
const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571572",
    "title": "Multi-lateral intermediate moratorium",
    "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    "image": "https://cdn-icons-png.flaticon.com/512/3571/3571603.png"
  },
  {
    "key": "3571747",
    "title": "Automated radical data-warehouse",
    "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    "image": "https://cdn-icons-png.flaticon.com/512/3571/3571591.png"
  },
  {
    "key": "3571680",
    "title": "Inverse attitude-oriented system engine",
    "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    "image": "https://cdn-icons-png.flaticon.com/512/3571/3571680.png"
  },
  {
    "key": "3571603",
    "title": "Monitored global data-warehouse",
    "description": "We need to program the open-source IB interface!",
    "image": "https://cdn-icons-png.flaticon.com/512/3571/3571665.png"
  }
]
const Carousel = () => {
  return (
    <View style={styles.container} >
      <Text>hi</Text>
      <Animated.FlatList
        data={DATA}
        keyExtractor={item=>item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
            return(
                <View style={{width,justifyContent:'center',alignItems:'center'}}>
                    <Image
                        source={{uri:item.image}}
                        style={{width:width/2,height:width/2,resizeMode:'contain'}}
                    />
                </View>
            )
        }}

      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });