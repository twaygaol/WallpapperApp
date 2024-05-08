import React from 'react';
import { View, Text, Pressable, Animated, Image } from 'react-native';
import catalogData from '../data/catalogData';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Wallpaper = () => {
    const navigation = useNavigation();
  return (
    <View>
      {catalogData.map((item, index) => (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)} key={item.id}>
          <Pressable
            style={{
              width: '100%',
              paddingLeft: index % 2 === 0 ? 8 : 8,
              paddingRight: index % 2 === 0 ? 8 : 8,
              marginBottom: 8,
            }}
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
          >
            <Animated.Image
              source={item.imgUrl}
              style={{
                width: '100%',
                height: '10',
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#D1D5DB',
                resizeMode: 'contain',
              }}
              sharedTransitionTag={item.strMeal}
            />

            <Text style={{ fontSize: hp(2.0), fontWeight: 'bold', marginTop: 4 }}>{item.title}</Text>
          </Pressable>
        </Animated.View>
      ))}
    </View>
  );
};

export default Wallpaper;
