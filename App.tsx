// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 各画面をimport
import HomeScreen from './src/screens/HomeScreen';
import TopPageScreen from './src/screens/TopPageScreen';
import DriveHuntScreen from './src/screens/DriveHuntScreen';
import MonsterListScreen from './src/screens/MonsterListScreen';
import MonsterDetailScreen from './src/screens/MonsterDetailScreen';
import JoinEventScreen from './src/screens/JoinEventScreen';
import EventDetailScreen from './src/screens/EventDetailScreen';
import TradeScreen from './src/screens/TradeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TopPage" component={TopPageScreen} />
        <Stack.Screen name="DriveHunt" component={DriveHuntScreen} />
        <Stack.Screen name="MonsterList" component={MonsterListScreen} />
        <Stack.Screen name="MonsterDetail" component={MonsterDetailScreen} />
        <Stack.Screen name="JoinEvent" component={JoinEventScreen} />
        <Stack.Screen name="EventDetail" component={EventDetailScreen} />
        <Stack.Screen name="Trade" component={TradeScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        
        <Stack.Screen name="MapScreen" component={MapScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
