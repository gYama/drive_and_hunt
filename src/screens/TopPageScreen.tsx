import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomButton from '../components/Button';

const TopPageScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Page</Text>
      <CustomButton
        title="Drive & Hunt"
        onPress={() => navigation.navigate('DriveHunt')}
      />
      <CustomButton
        title="Monstor List"
        onPress={() => navigation.navigate('MonsterList')}
      />
      <CustomButton
        title="Join a Event"
        onPress={() => navigation.navigate('JoinEvent')}
      />
      <CustomButton
        title="Trade"
        onPress={() => navigation.navigate('Trade')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TopPageScreen;
