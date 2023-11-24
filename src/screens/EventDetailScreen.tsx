import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EventDetailScreen = ({ route, navigation }: any) => {
  // route.paramsからイベントデータを取得
  const { eventId, eventName } = route.params;

  // ここにイベントの詳細情報を取得するロジックを追加する

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{eventName}</Text>
      <Text style={styles.description}>
        {/* ここにイベントの説明文などを表示 */}
        {'イベントの詳細情報が表示されます。'}
      </Text>
      {/* ここにイベントの詳細に関するその他のコンポーネントを追加 */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  // その他のスタイルをここに追加
});

export default EventDetailScreen;
