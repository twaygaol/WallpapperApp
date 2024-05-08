import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Wallpapper from '../pages/wallpapper'; // Pastikan nama file dan direktori di sini
import { useNavigation } from "@react-navigation/native";
import { BellIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function Header() {
  const navigate = useNavigation(); // Gunakan navigate untuk navigasi
  const navigateToWallpapperScreen = () => {
    navigate.navigate('Wallpapper'); // Ganti 'wallpapper' menjadi 'Wallpaper'
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <HomeIcon name="home" size={24} color="#333" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToWallpapperScreen}>
        <MagnifyingGlassIcon name="magnifyingGlass" size={24} color="#333" />
        <Text style={styles.menuText}>Wallpaper</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.menuItem}>
        <HeartIcon name="heart" size={24} color="#333" />
        <Text style={styles.menuText}>Favorit</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: "#DDDDDD",
  },
  menuItem: {
    alignItems: "center",
    paddingHorizontal:50,
  },
  menuText: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
});
