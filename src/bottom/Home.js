/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'; // Choose the icon set you want
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={handleOpenDrawer}>
          <Entypo name="menu" size={30} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <Text style={{fontSize:18, fontWeight:'600',marginLeft:15}}> Navigation Demo</Text>
    </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    width:'100%',
    height:60,
    flexDirection:'row',
    elevation:3,
    backgroundColor:'white',
    alignItems:'center'
  },
  icon: {
    marginLeft:10,
  },
});
