import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
// import imgIcon from '../images/imgIcon.png';

export default function WelcomeScreen() {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(()=> ring1padding.value = withSpring(ring1padding.value+hp(5)), 100);
        setTimeout(()=> ring2padding.value = withSpring(ring2padding.value+hp(5.5)), 300);

        setTimeout(()=> navigation.navigate('Home'), 2500)
    },[])
  return (
    <View className="flex-1 justify-center items-center space-y-10 " style={{backgroundColor:'#124076'}}>
      <StatusBar style="light" />

      {/* logo image with rings */}
      <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2padding}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ring1padding}}>
            <Image source={require('../../assets/images/ogo.png')}
                style={{width: hp(15), height: hp(15)}} />
        </Animated.View>
      </Animated.View>

      {/* title and punchline */}
      <View className="flex items-center space-y-2">
        <Text style={{fontSize: hp(5)}} className="font-bold text-white tracking-widest">
            Managemen
        </Text>
        <Text style={{fontSize: hp(3)}} className="font-medium text-white tracking-widest">
        PT Seraya Startup Nusantara
        </Text>
      </View>
    </View>
  )
}