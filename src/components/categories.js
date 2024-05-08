import React from 'react';
import { View, StyleSheet, FlatList,Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import catalogData from '../data/catalogData';

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: hp(2.5),marginLeft: 15, fontWeight: '600', color: '#4B5563', marginBottom: hp(2) }}>Offers for you</Text>
      <FlatList
        data={catalogData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.sliderItem}>
            <Image source={item.slider} style={styles.sliderImage} />
            <Image source={item.slider1} style={styles.sliderImage} />
            <Image source={item.slider2} style={styles.sliderImage} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer} // Style untuk konten dalam FlatList
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  sliderItem: {
    flexDirection: 'row', // Mengatur tata letak menjadi horizontal
    marginRight: 20,
    marginLeft: 15,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 15,
    marginRight: 10, // Memberi ruang di antara gambar
  },
  contentContainer: {
    paddingRight: 10, // Memberi ruang di sebelah kanan untuk sliderItem terakhir
  },
});
