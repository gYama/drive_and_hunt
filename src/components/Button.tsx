import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, Text, TouchableOpacity, 
    ViewStyle, TextStyle, View 
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
    const [isComingSoon, setIsComingSoon] = useState(false); // 追加
  
    useEffect(() => {
      if (isComingSoon) {
        setTimeout(() => {
          setIsComingSoon(false);
        }, 1000);
      }
    }, [isComingSoon]);
  
    const handlePress = () => {
      if (onPress) {
        onPress();
      } else {
        setIsComingSoon(true);
      }
    };
  
    return (
    <TouchableOpacity 
        style={[styles.button, isComingSoon ? styles.comingSoonButton : {}, style]} 
        onPress={handlePress}>
        <View style={styles.innerContainer}>
          <Text style={[styles.text, isComingSoon ? styles.comingSoonText : {}, textStyle]}>
            {isComingSoon ? "Coming Soon!!" : title}
          </Text>
        </View>
    </TouchableOpacity>
    );
};
  
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  comingSoonButton: { // 追加
    backgroundColor: '#e7afaf', // 例えば赤色
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  comingSoonText: { // 追加
    color: '#2c3e50', // 例えばダークブルー
  },
  innerContainer: { 
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
