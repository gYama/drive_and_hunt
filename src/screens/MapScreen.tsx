import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const getRandomCoordinate = () => {
    const baseLat = 35.6895;
    const baseLong = 139.6917;
    const latOffset = Math.random() * 0.1;
    const longOffset = Math.random() * 0.1;
    const latitude = baseLat + latOffset;
    const longitude = baseLong + longOffset;
    return { latitude, longitude };
};

const getRandomImage = () => {
    // 画像のファイル名を追加
    const images = ['../../assets/monster/monster1.jpg', '../../assets/monster/monster2.jpg', '../../assets/monster/monster3.jpg'];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

const MapScreen = ({ route }: any) => {
    const [userLocation, setUserLocation] = useState({
        latitude: 35.6586,
        longitude: 139.7454,
  });

    const destination = route.params?.destination || { latitude: 0, longitude: 0 };

    const [randomPins, setRandomPins] = useState<Array<{
        key: string;
        coordinate: { latitude: number; longitude: number };
        title: string;
        description: string;
        image: any;
    }>>([]);
    
    useEffect(() => {
        const updateRandomPins = () => {
        const newRandomPins = Array.from({ length: 5 }, (_, index) => {
            const randomCoordinate = getRandomCoordinate();
            const randomImage = getRandomImage();
        return {
            key: index.toString(),
            coordinate: {
                latitude: randomCoordinate.latitude,
                longitude: randomCoordinate.longitude,
        },
        title: `Random Marker ${index + 1}`,
          description: `Image: ${randomImage}`,
          image: randomImage,
        };
      });

      setRandomPins(newRandomPins);
    };

    // 初回実行
    updateRandomPins();

    // 3分ごとにモンスターの位置を変更
    const intervalId = setInterval(updateRandomPins, 3 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
      (async () => {
          try {
              const { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                  console.error('Permission to access location was denied');
                return;
            }
            
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setUserLocation({ latitude, longitude });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={{
            latitude: destination.latitude || userLocation.latitude,
            longitude: destination.longitude || userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
      >
        <Marker
        coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
        title="Your Location"
        description="You are here!"
        image={require('../../assets/pin.jpg')}
        />

        {destination.latitude !== 0 && destination.longitude !== 0 && (
        <Marker
        coordinate={{ latitude: destination.latitude, longitude: destination.longitude }}
        title="Destination"
        description="Your goal!"
        pinColor="RED"
          />
        )}

        {randomPins.map((pin) => (
        <Marker
        key={pin.key}
        coordinate={pin.coordinate}
        title={pin.title}
        description={pin.description}
        //image={pin.image}
        // 暫定的に表示するモンスターを固定
        image={require(`../../assets/monster/monster1.jpg`)}
          />
        ))}
      </MapView>
      <ScrollView
      style={styles.scrollView}
      onScroll={(event) => {
          const yOffset = event.nativeEvent.contentOffset.y;
          console.log('Y Offset:', yOffset);

          const newLatitude = userLocation.latitude + yOffset * 0.0001;
          setUserLocation((prevLocation) => ({
            ...prevLocation,
            latitude: newLatitude,
          }));
        }}
        scrollEnabled
      >
        <Text>Scrollable Content Goes Here</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        height: '100%',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default MapScreen;
