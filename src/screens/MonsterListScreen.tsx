import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 追加
import { Monster } from "../types/types";

const initialMonsters: Monster[] = [
  {
    id: '1',
    name: 'Dragon',
    level: 50,
    element: 'Fire',
    thumbnail: require('../../assets/monster0001.png'), // 静的なパスを直接指定
    description: 'Powerful fire-breathing dragon',
    skills: ['Fire Breath', 'Wing Slash']
  },
  {
    id: '2',
    name: 'Phoenix',
    level: 40,
    element: 'Wind',
    thumbnail: require('../../assets/monster0001.png'),
    description: 'Majestic bird reborn from ashes',
    skills: ['Flame Burst', 'Rebirth']
  },
  {
    id: '3',
    name: 'Unicorn',
    level: 35,
    element: 'Water',
    thumbnail: require('../../assets/monster0001.png'),
    description: 'Graceful mythical creature',
    skills: ['Healing Horn', 'Pure Stream']
  },
  // 他のモンスターデータ
];

const MonsterListScreen = ({ navigation }: { navigation: any }) => {
  const windowWidth = useWindowDimensions().width;

  // 列数を動的に計算
  const numColumns = Math.floor(windowWidth / 120); // 120 はサムネイルの幅


  const [monsters, setMonsters] = useState(initialMonsters);

  // 新しいモンスターを追加する関数
  const catchNewMonster = (newMonster: Monster) => {
    setMonsters((prevMonsters) => [...prevMonsters, newMonster]);
  };

  const onPressMonster = (item: Monster) => {
    navigation.navigate('MonsterDetail', { item });
  };
  const renderMonster = ({ item }: { item: Monster }) => {
    let elementColor = '#ccc'; // デフォルトの色

    // element によって色を変える
    switch (item.element) {
      case 'Fire':
        elementColor = '#ff0000'; // レッド
        break;
      case 'Wind':
        elementColor = '#00ff00'; // グリーン
        break;
      case 'Water':
        elementColor = '#0000ff'; // ブルー
        break;
      default:
        break;
    }

    return (
      <TouchableOpacity
      style={styles.monsterItem}
      onPress={() => onPressMonster(item)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.monsterInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>Level: </Text>
          <Text style={[styles.details, styles.levelText]}>{item.level}</Text>
        </View>
        <Text style={styles.details}>Element: {item.element}</Text>
      </View>
    </TouchableOpacity>
    );
  };

  // グリッドにデータを分割する関数
  const formatData = (data: Monster[], numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

  if (numberOfElementsLastRow !== 0) {
    data = data.slice(0, data.length - numberOfElementsLastRow);
  }

  return data;
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monster List</Text>
      <FlatList
        data={formatData(monsters, numColumns)}
        keyExtractor={(item) => item.id}
        renderItem={renderMonster}
        numColumns={numColumns}
      />
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
  list: {
    paddingHorizontal: 20,
  },
  monsterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#2e2e2e', // 背景色を追加
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
  },
  monsterInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  details: {
    color: '#ccc',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default MonsterListScreen;
