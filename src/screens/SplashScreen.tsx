import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import {AppColors} from '../context/ThemeContext';

const {width, height} = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({onFinish}: SplashScreenProps) => {
  const [imageError, setImageError] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  useEffect(() => {
    // Simulate a delay (e.g., for initialization tasks)
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={[
      styles.container, 
      {backgroundColor: isDarkMode ? '#121212' : AppColors.white}
    ]}>
      <StatusBar translucent backgroundColor="transparent" />
      {imageError ? (
        <View style={styles.fallbackContainer}>
          <Text style={styles.title}>3D Shikshan</Text>
          <Text style={[styles.subtitle, {color: isDarkMode ? AppColors.lightTeal : AppColors.teal}]}>
            Learning in three dimensions
          </Text>
        </View>
      ) : (
        <Image
          source={require('../../assets/3dshikshan-logo.png')}
          style={styles.logo}
          resizeMode="contain"
          onError={() => setImageError(true)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.3, // 30% of screen height
  },
  fallbackContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: AppColors.teal, // Teal color from our theme
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: AppColors.teal,
  },
});

export default SplashScreen; 