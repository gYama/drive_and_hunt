import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomButton from '../components/Button';

// 仮のイベントデータ
const events = [
  { id: '1', name: 'Spring Festival', location: { latitude: 35.7151, longitude: 139.7774 } },
  { id: '2', name: 'Monster Race', location: { latitude: 35.6308, longitude: 139.7785 } },
  { id: '3', name: 'Treasure Hunt', location: { latitude: 35.6852, longitude: 139.7528 } },
  // ... その他のイベントデータ
];

const JoinEventScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join an Event</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text>{item.name}</Text>
            <CustomButton
              title="ここに行く"
              onPress={() => {
                // ここで目的地としてセットする機能を実装
                if (item.location) {
                  navigation.navigate('MapScreen', { destination: item.location });
                }
              }}
            />
            <CustomButton
              title="詳細"
              onPress={() => {
                navigation.navigate('EventDetail', {
                  eventId: item.id,
                  eventName: item.name,
                });
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0e4d7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#e5d5b5',
  },
});

export default JoinEventScreen;
