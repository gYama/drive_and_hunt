import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomButton from '../components/Button';
import { ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../../assets/home_back.png')}
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <CustomButton
        title="ゲームを開始する"
        onPress={() => navigation.navigate('TopPage')}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 0,
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
