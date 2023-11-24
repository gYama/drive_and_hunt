import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Monster } from "../types/types";

interface MonsterDetailProps {
  route?: {
    params: {
      item: Monster;
    };
  };
}

const MonsterDetailScreen = ({ route }: MonsterDetailProps): React.JSX.Element => {
// routeが存在することを確認し、存在しない場合はデフォルトの値を設定する
const { item } = route?.params || {
  item: {
    id: '',
    name: 'Unknown',
    level: 0,
    element: 'Unknown',
    thumbnail: '',
    description: 'Description not available',
    skills: [] // 空の配列をデフォルトの値として設定
    // 他のプロパティも必要に応じて追加
  }
};if (!item || !item.thumbnail || !item.name || !item.level || !item.element) {
  return <Text style={styles.error}>Monster information not available.</Text>;
}
return (
  <View style={styles.container}>
    <Text style={styles.title}>Monster Details</Text>
    <View style={styles.monsterDetail}>
      <Image source={{ uri: item.thumbnail }} style={styles.detailThumbnail} />
      <View style={styles.detailInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>Level: {item.level}</Text>
        <Text style={styles.details}>Element: {item.element}</Text>

        {/* 新しい詳細情報を追加 */}
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.skills}>{item.skills}</Text>
        {/* 他の詳細情報を表示 */}
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  monsterDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  detailThumbnail: {
    width: 120,
    height: 120,
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
  },
  detailInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  details: {
    color: '#ccc',
    fontSize: 18,
    marginVertical: 4,
  },
  // 新しく追加する error スタイル
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    // description スタイルの定義
    color: '#333',
    fontSize: 16,
    // 他のスタイルプロパティ
  },
  // 新しく追加する skills スタイル
  skills: {
    // skills スタイルの定義
    color: 'blue',
    fontSize: 14,
    // 他のスタイルプロパティ
  },
});

export default MonsterDetailScreen;
