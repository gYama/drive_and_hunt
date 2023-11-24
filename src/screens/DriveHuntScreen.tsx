// DriveHuntScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomButton from '../components/Button';
import { ImageBackground } from 'react-native';

const DriveHuntScreen = ({ navigation }: any) => {
  const startDrive = () => {
    // ドライブを開始する機能を実装
    navigation.navigate('MapScreen');
  };

  return (
    <ImageBackground
      source={require('../../assets/drive.jpg')}
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      {/* <Text style={styles.title}>Drive & Hunt</Text> */}
      <CustomButton
        title="目的地をセット"
        onPress={() => navigation.navigate('JoinEvent')}
      />
      <CustomButton
        title="相棒モンスターをセット"
        onPress={() => navigation.navigate('MonsterList')}
      />
      <CustomButton
        title="ドライブスタート"
        onPress={startDrive}
      />
      <CustomButton
        title="履歴を見る"
        onPress={() => navigation.navigate('History')}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 120,
    //backgroundColor: '#ddd',
  },
  /**
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
   */
  backgroundImage: {
    flex: 0,
    width: '100%',
    height: '100%',
  },
});

export default DriveHuntScreen;
