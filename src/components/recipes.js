import React, { useState } from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Loading from './loading';
import catalogData from '../data/catalogData'; // Import data from catalogData.js
import { useNavigation } from '@react-navigation/native';

// Import gambar untuk setiap kategori (pastikan menyesuaikan dengan struktur data)
import view1 from '../images/slider/1.png'; // Misalnya saja untuk kategori "brownis"
import view2 from '../images/slider/2.png'; // Misalnya saja untuk kategori "brownis"
import view3 from '../images/slider/3.png'; // Misalnya saja untuk kategori "brownis"

export default function Recipes() {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(null);

  // Filter data berdasarkan kategori yang aktif
  const filteredData = activeCategory ? catalogData.filter(item => item.category === activeCategory) : catalogData;

  const categories = [...new Set(catalogData.map(item => item.category))];
  const categoryImages = {
    'cosmos-comfort': view1,
    'kido-kids' : view2,
    'pavilion-II':view3,
    // Tambahkan gambar untuk setiap kategori lainnya jika diperlukan
  };

  return (
    <View style={{ marginHorizontal: wp(4) }}>
      {/* Menu Kategori */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: hp(2.5), fontWeight: '600', color: '#4B5563', marginBottom: hp(2) }}>Categories</Text>
        <Text style={{ fontSize: hp(2),opacity:1, fontWeight: '500', color: '#1B3C73', position: 'absolute', right: 20, top: 0 }}>View All</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        horizontal={true} // Mengatur properti horizontal menjadi true
        showsHorizontalScrollIndicator={false} // Menyembunyikan indikator scroll horizontal
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={{ flexDirection: 'row', marginBottom: hp(-3) }}>
          {categories.map((category, index) => (
            <Pressable
              key={index}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: activeCategory === category ? '#1B3C73' : '#D1D5DB',
                borderRadius: 8,
              }}
              onPress={() => setActiveCategory(category)}
            >
              {/* Gambar kategori */}
              <Image
                source={categoryImages[category]} 
                style={{
                  width: 55,
                  height: 55,
                  marginBottom: 5,
                  borderRadius: 50,
                  overflow: 'hidden',
                  borderWidth: 0.5, 
                  borderColor: '#124076' 
                }}
              />
              {/* Teks kategori */}
              <Text style={{ fontSize:12, color: activeCategory === category ? '#FFFF' : '#1F2937' }}>{category}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: hp(2.5), fontWeight: '600', color: '#4B5563', marginBottom: hp(2) }}>Latters Wallpapper</Text>
        <Text style={{ fontSize: hp(2),opacity:1, fontWeight: '500', color: '#1B3C73', position: 'absolute', right: 20, top: 0 }}>View All</Text>
      </View>
      <View>
        {catalogData.length === 0 ? (
          <Loading size="large" style={{ marginTop: hp(5) }} />
        ) : (
          <MasonryList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()} // ubah ke string karena key harus dalam bentuk string
            numColumns={2}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            renderItem={({ item, index }) =>
              <RecipeCard item={item} index={index} navigation={navigation} />
            }
          />
        )}
      </View>
    </View>
  );
}

const RecipeCard = ({ item, index, navigation }) => {
  // Mengonversi id ke integer dan mengecek apakah genap
  const isEvenId = parseInt(item.id) % 2 === 0; 
  // Menentukan tinggi gambar berdasarkan apakah id genap atau ganjil
  const imageHeight = isEvenId ? hp(30) : hp(30); 

  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
      <Pressable
        style={{
          width: '100%',
          paddingLeft: isEvenId ? 8 : 8,
          paddingRight: isEvenId ? 8 : 8,
          marginBottom: 8, // Tambahkan jarak antar gambar di sini
        }}
        onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
      >
        <Animated.Image
          source={item.imgUrl}
          style={{
            width: '100%',
            height: imageHeight,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#D1D5DB',
            resizeMode: 'contain',
          }}
          sharedTransitionTag={item.strMeal}
        />

        <Text style={{ fontSize: hp(2.1), marginTop: 4 }}>{item.title}</Text>
      </Pressable>
    </Animated.View>  
  );
};
