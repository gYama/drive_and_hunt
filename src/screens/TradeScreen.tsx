import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import CustomButton from '../components/Button';

// 仮のモンスターNFTデータ
const monsterNFTs = [
  { id: '1', name: 'Golden Dragon', owner: 'Alice' },
  { id: '2', name: 'Silver Phoenix', owner: 'Bob' },
  { id: '3', name: 'Bronze Unicorn', owner: 'Charlie' },
  // ... その他のモンスターNFTデータ
];

const TradeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trade Monster NFTs</Text>
      <FlatList
        data={monsterNFTs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.nftItem}>
            <Text>{item.name} (Owned by {item.owner})</Text>
            <CustomButton
              title="Buy"
              // onPress={() => {
              //   // ここでNFTの購入機能を実装
              // }}
            />
            <CustomButton
              title="Exchange"
              // onPress={() => {
              //   // ここでNFTの交換機能を実装
              // }}
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
    backgroundColor: '#e1e7f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nftItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#d0dbe8',
  },
});

export default TradeScreen;
