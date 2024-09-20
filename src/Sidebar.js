/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Sidebar = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 5, width: '100%', backgroundColor: 'blue' }} />
      <Image
        source={require('./images/user-dummy-pic.png')}
        style={{ marginTop: 10, alignSelf: 'center', width: 80, height: 80 }}
      />
      <View style={{ marginTop: 50, width: '100%' }}>
        <FlatList
          data={[
            { icon: require('./images/home.png'), title: 'Home' },

          ]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={item.icon}
                  style={{ marginLeft: 15, width: 24, height: 24 }} />
                <Text style={{ marginLeft: 15, fontSize: 18, color: '#000' }}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
