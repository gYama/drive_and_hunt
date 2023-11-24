import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HistoryScreen = ({ navigation }: any) => {
  // ここに履歴データをステートまたはコンテキストから取得するロジックを追加する

  // 仮の履歴データ
  const historyData = {
    // 画像パスは適宜変更してください
    monsterImage: require('../../assets/monster0001.png'),
    monsterName: 'Dracospark', // 仮のモンスター名
    monsterLevel: 5, // 仮のモンスターレベル
    
    battleHistory: [
      { id: '1', result: '勝ち', experienceGained: 100 },
      { id: '2', result: '負け', experienceLost: 50 },
      { id: '3', result: '勝ち', experienceGained: 150 },
    ],
  
    growthHistory: [
      { id: '1', levelChange: '+1', date: '2023-11-01' },
      { id: '2', levelChange: '-1', date: '2023-11-02' },
      { id: '3', levelChange: '+2', date: '2023-11-03' },
    ],
  
    itemsGained: [
      { id: '1', itemName: '金貨', quantity: 3 },
      { id: '2', itemName: '魔法の薬', quantity: 1 },
      { id: '3', itemName: '古代のコイン', quantity: 5 },
    ],
  };
  
  return (
    <ScrollView style={styles.container}>
    <Image source={historyData.monsterImage} style={styles.monsterImage} />
    <Text style={styles.monsterName}>{historyData.monsterName}</Text>
    <Text style={styles.monsterLevel}>{`レベル: ${historyData.monsterLevel}`}</Text>
      <Text style={styles.title}>バトル履歴</Text>
      {/* バトル履歴を表示 */}
      {historyData.battleHistory.map((history) => (
        <View key={history.id} style={styles.historyItem}>
          <Text>{history.result === '勝ち' ? '勝利' : '敗北'}</Text>
          <Text>{`経験値 ${history.result === '勝ち' ? '+' : '-'}${history.experienceGained || history.experienceLost}`}</Text>
        </View>
      ))}

      <Text style={styles.title}>成長履歴</Text>
      {/* 成長履歴を表示 */}
      {historyData.growthHistory.map((history) => (
        <View key={history.id} style={styles.historyItem}>
          <Text>{`レベル ${history.levelChange} (${history.date})`}</Text>
        </View>
      ))}

      <Text style={styles.title}>獲得アイテム</Text>
      {/* 獲得アイテムを表示 */}
      {historyData.itemsGained.map((item) => (
        <View key={item.id} style={styles.historyItem}>
          <Text>{`${item.itemName} x ${item.quantity}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  monsterImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  monsterName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  monsterLevel: {
    fontSize: 20,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  // その他のスタイル定義
});

export default HistoryScreen;
